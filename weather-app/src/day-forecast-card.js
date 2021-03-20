import React from 'react';

const DayForecastCard = (props) => {
    return(
        <div className='card-holder'>
            <h2>{props.day}</h2>
            <div className='date'>{props.date}</div>
            <i className={props.icon} style={{fontSize: "48px"}}></i>
            <div className='temperature'>{props.temp}</div>
            <div className='atmos'>{props.desc}</div>
        </div>
    )
}

export default DayForecastCard;