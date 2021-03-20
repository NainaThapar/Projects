import React from 'react';
import DayForecastCard from './day-forecast-card';
import weatherData from './data.json';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Homepage = () => {
    console.log(weatherData);
    return(
            <div class="homepage">
            <div class="header">5-Day Weather Forecast</div>
            <div class="place">{weatherData.city}, {weatherData.country}</div>
            {weatherData.details.map(data => {
                return (<Link to={{
                    pathname: "/detail",
                    item : {data}
                }}><DayForecastCard day={data.day} temp={data.temp} icon={data.icon} desc={data.desc} date={data.date}></DayForecastCard></Link>)
            })}
        </div>
    )
}

export default Homepage;