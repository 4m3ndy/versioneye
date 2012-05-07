class Versioncomment

  include Mongoid::Document
  include Mongoid::Timestamps

  field :user_id, type: String
  field :product_key, type: String
  field :language, type: String
  field :version, type: String
  field :rate, type: Integer, :default => 0
  field :rate_docu, type: Integer, :default => 0
  field :rate_support, type: Integer, :default => 0
  field :comment, type: String
  field :prod_name, type: String
  
  validates_presence_of :user_id,     :message => "User is mandatory!"
  validates_presence_of :product_key, :message => "Product is mandatory!"
  validates_presence_of :version,     :message => "Version is mandatory!"
  validates_presence_of :rate,        :message => "Rate is mandatory!"
  validates_presence_of :comment,     :message => "Comment is mandatory!"  
  
  def as_json parameter
    product = get_product
    prod_name = product.name unless product.nil?
    prod_key = product.prod_key unless product.nil?
    {
      :rate => self.rate,
      :rate_docu => self.rate_docu,
      :comment => self.comment,
      :from => user.fullname,
      :product_name => prod_name,
      :product_key => prod_key,
      :created_at => self.created_at.strftime("%Y.%m.%d %I:%M %p"),
      :updated_at => self.updated_at.strftime("%Y.%m.%d %I:%M %p")
    }
  end
  
  def self.find_by_id(id)
    Versioncomment.first(conditions: { id: id} )
  end
  
  def self.find_by_user_id(user_id)
    Versioncomment.where(user_id: user_id).desc(:created_at)
  end

  def self.get_prod_keys_for_user(user_id)
    Versioncomment.where(user_id: user_id).distinct(:product_key)
  end

  def self.count_by_user_id(user_id)
    Versioncomment.where(user_id: user_id).count()
  end

  def self.find_by_prod_keys(prod_keys)
    Versioncomment.all( conditions: {:product_key.in => prod_keys}).desc(:created_at)
  end
  
  def self.find_by_prod_key_and_version(prod_key, version)
    Versioncomment.all( conditions: {product_key: prod_key, version: version} ).asc(:created_at)
  end
  
  def self.get_sum_by_prod_key_and_version(prod_key, version)
    comments = Versioncomment.all( conditions: {product_key: prod_key, version: version} )
    sum = 0
    comments.each do |comment|
      sum = sum + comment.rate
    end
    sum
  end

  def self.get_docu_sum_by_prod_key_and_version(prod_key, version)
    comments = Versioncomment.all( conditions: {product_key: prod_key, version: version} )
    sum = 0
    comments.each do |comment|
      sum = sum + comment.rate_docu
    end
    sum
  end

  def self.get_support_sum_by_prod_key_and_version(prod_key, version)
    comments = Versioncomment.all( conditions: {product_key: prod_key, version: version} )
    sum = 0
    comments.each do |comment|
      sum = sum + comment.rate_support
    end
    sum
  end

  def self.migrate_to_likes()
    comments = Versioncomment.all()
    comments.each do |comment|
      like = Productlike.find_by_user_id_and_product(comment.user_id, comment.product_key)
      if like.nil? 
        like = Productlike.new
        like.user_id = comment.user_id
        like.prod_key = comment.product_key
      end
      product = Product.find_by_key(comment.product_key)
      if comment.rate > 0 && like.overall == 0
        like.overall = 1
        product.like_overall = product.like_overall + 1 
      end
      if comment.rate_docu > 0 && like.documentation == 0
        like.documentation = 1 
        product.like_docu = product.like_docu + 1 
      end
      if comment.rate_support > 0 && like.support == 0
        like.support = 1 
        product.like_support = product.like_support + 1 
      end
      product.save
      like.save
    end
  end
  
  def self.get_count_by_prod_key_and_version(prod_key, version)
    Versioncomment.where(product_key: prod_key).and(version: version).and(:rate.gt => 9).count()
  end

  def self.get_docu_count_by_prod_key_and_version(prod_key, version)
    Versioncomment.all( conditions: {product_key: prod_key, version: version, :rate_docu.gt => 9} ).count()
  end

  def self.get_support_count_by_prod_key_and_version(prod_key, version)
    Versioncomment.all( conditions: {product_key: prod_key, version: version, :rate_support.gt => 9} ).count()
  end
  
  def self.get_average_rate_by_prod_key_and_version(prod_key, version)
    avg = 0
    sum = Versioncomment.get_sum_by_prod_key_and_version(prod_key, version)
    count = Versioncomment.get_count_by_prod_key_and_version(prod_key, version)
    if count > 0
      avg = sum / count
    end
    avg
  end

  def self.get_average_rate_docu_by_prod_key_and_version(prod_key, version)
    avg = 0
    sum = Versioncomment.get_docu_sum_by_prod_key_and_version(prod_key, version)
    count = Versioncomment.get_docu_count_by_prod_key_and_version(prod_key, version)
    if count > 0
      avg = sum / count
    end
    avg
  end

  def self.get_average_rate_support_by_prod_key_and_version(prod_key, version)
    avg = 0
    sum = Versioncomment.get_support_sum_by_prod_key_and_version(prod_key, version)
    count = Versioncomment.get_support_count_by_prod_key_and_version(prod_key, version)
    if count > 0
      avg = sum / count
    end
    avg
  end
  
  def user
    if self.user_id.size < 3
      User.find( self.user_id.to_i )
    else
      User.find( self.user_id )
    end
  end
  
  def prod_key_url
    Product.to_url_param(self.product_key)
  end
  
  def version_url
    Product.to_url_param(self.version)
  end
  
  def name_and_version
    "#{self.prod_name} (#{self.version})" 
  end

  def rating
    self.rate / 10
  end
  
  def self.update_product_names
    comments = Versioncomment.all
    comments.each do |comment|
      if comment.rate_docu.nil?
        comment.rate_docu = 0
        comment.save
      end
      if comment.rate_support.nil?
        comment.rate_support = 0
        comment.save
      end
      product = comment.get_product
      if !product.nil?
        comment.prod_name = product.name
        comment.language = product.language
        comment.save
      end      
    end
  end
  
  def get_product
    product = Product.find_by_key(self.product_key)
    if !product.nil?
      product.version = self.version
    end
    product
  end
  
  def self.get_flatted_average(avg)
    avg = 10 if avg < 15 && avg > 0
    avg = 20 if avg < 25 && avg >= 15
    avg = 30 if avg < 35 && avg >= 25
    avg = 40 if avg < 45 && avg >= 35
    avg = 50 if avg >= 45
    avg
  end

end