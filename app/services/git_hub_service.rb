require 'benchmark'

class GitHubService

  def self.update_all_repos
    User.all(:timeout => true).live_users.where(:github_scope => "repo").each do |user|
      update_repos_for_user user
    end
  end

  def self.update_repos_for_user( user )
    Rails.logger.debug "Importing repos for #{user.fullname}."
    user.github_repos.delete_all
    GitHubService.cached_user_repos user
    Rails.logger.debug  "Got #{user.github_repos.count} repos for #{user.fullname}."
    user.github_repos.all
  rescue => e
    Rails.logger.error "Cant import repos for #{user.fullname}\n#{e}"
  end

=begin
  Returns github repos for user;
  If user don't have yet any github repos
     or there's been any change on user's github account,
  then trys to read from github
  else it returns cached results from GitHubRepos collection.
=end
  def self.cached_user_repos( user )
    if user.github_repos.all.count == 0
      Rails.logger.info "Fetch Repositories from GitHub and cache them in DB."
      orga_names = Github.orga_names(user.github_token)
      self.cache_user_all_repos(user, orga_names)
    elsif Github.user_repos_changed?( user )
      Rails.logger.info "Repos are changed - going to re-import all user repos."
      user.github_repos.delete_all
      self.cached_user_repos user
    else
      Rails.logger.info "Nothing is changed - skipping update."
    end
    GithubRepo.by_user( user )
  end

  def self.bad_credentail?(repo)
    if repo.is_a?(Hash) and repo.has_key?("message")
      Rails.logger.error("Catched Github API exception: #{repo}")
      return true
    end
    return false
  rescue => e
    Rails.logger.error "Bad Credentials"
    true
  end

  private

    def self.cache_user_all_repos(user, orga_names)
      puts "Going to cache users repositories."
      user_info = Github.user(user.github_token)
      user[:user_login] = user_info['login'] if user_info.is_a?(Hash)
      #load data
      Thread.new {self.cache_user_repos(user)}
      orga_names.each do |orga_name|
        Thread.new { self.cache_user_orga_repos(user, orga_name) }
      end
    end

    def self.cache_user_repos( user )
      url = nil
      begin
        data = Github.user_repos(user, url)
        data[:repos].each do |repo|
          return nil if bad_credentail?( repo )
          begin
            time = Benchmark.measure do
              repo[:projects] = Github.repo_project_files(user, repo['full_name'])
              GithubRepo.add_new(user, repo, data[:etag])
            end
            puts "Reading `#{repo['full_name']}` took: #{time} "
          rescue => e
            Rails.logger.error("Can't add repo to cache: #{repo}")
            Rails.logger.error e.message
            Rails.logger.error e.backtrace.first
            nil
          end
        end
        url = data[:paging]["next"]
      end while not url.nil?
    end

    def self.cache_user_orga_repos(user, orga_name)
      url = nil
      begin
        data = Github.user_orga_repos(user, orga_name, url)
        data[:repos].each do |repo|
          return nil if bad_credentail?(repo)
          GithubRepo.add_new(user, repo, data[:etag])
        end
        url = data[:paging]["next"]
      end while not url.nil?
    end
end
