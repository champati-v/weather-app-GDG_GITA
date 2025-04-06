import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div>
        <h1>Location: {weather.name}</h1>
        <p>{weather.main.temp} degree celcius </p>
        <p>{weather.wind.speed} m/s</p>
    </div>
  )
}

export default WeatherCard