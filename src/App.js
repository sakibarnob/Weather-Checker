import React, { useState } from 'react'
import './App.css'

function App() {
  const apikey = 'c47504061b60cc7d35173ccd763a5aab'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState('')

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        .then(response => response.json())
        .then(
          data => {
            setWeatherData(data)
            setCity("")
          }
        )
    }
  }

  return (
    <div className='container'>
      <h2 className='weather-check'>Weather Checker</h2>
      <input
        className='input'
        placeholder='Enter city'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}

      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>welcome to weather app.enter in a city to get the weather of</p>
        </div>

      ) : (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)} F°</p>
          <p className='temp'>{Math.round(((weatherData.main.temp)-32)*5/9).toFixed(2)} C°</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
        </div>

      )}

      {weatherData.cod === '404' ? (
        <p>city is no found</p>
      ) : (
        <>
        </>
      )}

      <footer>
        <h2 className='footer'>Build with 🤍 by Arnob</h2>
      </footer>

    </div>

  )



}

export default App