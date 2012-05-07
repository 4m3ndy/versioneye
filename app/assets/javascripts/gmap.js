
function initialize(address) {
	if (address == null || address == "" ){
		address = "Berlin"
	}
	var map_for_user_profile = document.getElementById("map_for_user_profile");
	var geo = new google.maps.Geocoder;
    if (map_for_user_profile != null){
    	geo.geocode({'address': address},function(results, status){
			if (status == google.maps.GeocoderStatus.OK) {
				var latlng = results[0].geometry.location 
				var myOptions = {
			        zoom: 5,
			        center: latlng,
			        mapTypeId: google.maps.MapTypeId.ROADMAP
			    };
			    map = new google.maps.Map(map_for_user_profile, myOptions);
			    var marker = new google.maps.Marker({position: latlng, map: map});
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
    }
}

function getLatLong(address){
	
}  