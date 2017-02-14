var React = require('react');

var WeatherMessage = ({temp,location}) =>{
	 return (
      <h3>La temperatura es {temp} in {location}.</h3>
    );
};

module.exports = WeatherMessage;
