import { Card } from 'semantic-ui-react'
export default function WeatherCard({weatherData}) {
  const feelsLike = Math.round(weatherData.main.feels_like);
  const temp = Math.round(weatherData.main.temp);
  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();
  const clouds = weatherData.weather[0].description
  console.log(weatherData)
  return (
    <Card>
      <Card.Content header={weatherData.name}/>
        <ul>
          <li>Current Temp: {temp}ºF</li>
          <li>Feels Like: {feelsLike}ºF</li>
          <li>Sunrise:{sunrise} </li>
          <li>Sunset: {sunset} </li>
          <li>{clouds}</li>
        </ul>
    </Card>
  )
}