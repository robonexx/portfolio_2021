import React, { useEffect, useState } from 'react';
import WeatherCard from '../Weather/WeatherCard';


// Easy version of setting a weather forecast. only shows stockholm now, could use geolocation to get the city or town of the user

const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=`
const API_KEY = "037faff6758526984b82d7fb60ff4947" 
const END = "&units=metric"


function Weather() {

    const [data, setData] = useState([]);

 
    useEffect(() => {
        fetch(API_URL + API_KEY + END)
            .then(response => response.json())
            .then(data => setData({ data })
            )
            .catch((e) => {
                console.log(e)
              
            })
            
    }, []);

    
    return (
        <div>
                    <WeatherCard key={data.id} data={data}/>
        </div>
    )
}

export default Weather;