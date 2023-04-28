import React from 'react';
// import axios from 'axios';
import WeatherInfo from './WeatherInfo.js'

class Weather extends React.Component{
    
    render(){
        return(
            
            <>
            
            <div id='CurrentWeather'>
            
                <h2>Weather:</h2>
                {this.props.weatherData.map((date, index) => {
                    return <WeatherInfo key={index} day={date}/>
                })
                
            }
            </div>
            </>
        )
    }
    


}

export default Weather;