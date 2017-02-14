var axios=require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=b507fde23faea483687c1ab4f0ad4bd2';

module.exports={
	getTemp:function(location){
		var encodedLocation=encodeURIComponent(location);
		var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${location}`;
		return axios.get(requestUrl).then(function(res){
			if (!res.data) 
			{
				console.log(res);
				throw new Error(res.data.message);
				
			}
			else
			{
				console.log(res.data);
				return res.data.main.temp;

			}
		},function(res){
			throw new Error(res.data.message);
			console.log('2.-'+res.data.message);

		});
	}
}