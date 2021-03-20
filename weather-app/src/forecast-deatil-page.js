import React from 'react';
import {useLocation} from "react-router-dom";

const ForecastDetailPage = () => {
    const location = useLocation();
    return(
        <div class='detail-page'>
           <h1> Welcome to forecast detail page!</h1>
            <div>
            <h2>It's {location.item.data.day}'s Forecast</h2>
            <div className='date'>{location.item.data.date}</div>
            <i className={location.item.data.icon} style={{color: location.item.data.color, fontSize: '106px'}}></i>
            <div className='temperature'>{location.item.data.temp}</div>
            <div className='detail-atmos'>{location.item.data.desc}</div>
        </div>
        </div>
    )
}

export default ForecastDetailPage;