var ip = 'check'
		var access_key = '145a6e1f8118cacc7daf96e2b3f5ab42';

		// get the API result via jQuery.ajax		
		$.ajax({
			url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
			dataType: 'jsonp',
			success: function(json) {

				// output the "capital" object inside "location"
				console.log(json);
				
			var city = json.city;
				
				
			$(".city").append(city);
			}
		});