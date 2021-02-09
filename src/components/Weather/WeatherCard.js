import React from 'react'
import styled from 'styled-components'

const WeatherC = styled.div`
    
    width: 10em;
    height: 12vh;
    padding: .8em .6em;
    background-color: rgba(0,0,0,0.7);
    text-align: center;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    z-index: 50;
    list-style: none;

 
h4 {
  height: fit-content;
  font-size: .6rem;
  overflow: hidden;
}
 h6 {
   font-size: 0.8rem
 }

 p{
    font-size: 0.6rem;
 }


span {
  font-size: 0.8rem;
  padding: 0.2rem;
}

 `;


const WeatherCard = ({data}) => {


    return ( 
        <>
        <WeatherC className="weather-info">
                <h4>{!data.data ? '?' : data.data.name.toUpperCase()}</h4>
                <span>Temprature: {!data.data ? '?' : data.data.main.temp.toFixed(1)}</span>
        
                <div className="forecast">
                        <h6>Forecast: </h6>
                        <p>{!data.data ? '?' : data.data.weather[0].description}</p>
                        </div>
        </WeatherC>

        </>
     );
}
 
export default WeatherCard;