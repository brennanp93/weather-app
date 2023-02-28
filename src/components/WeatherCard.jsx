
import moment from 'moment';
export default function WeatherCard({ weatherData }) {
  const feelsLike = Math.round(weatherData.main.feels_like);
  const temp = Math.round(weatherData.main.temp);
  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});;
  const clouds = weatherData.weather[0].description.toUpperCase()
  console.log(weatherData)
  return (
    <>
          <div className='weatherBox'>
            <div className='box1'>
              <h1>{weatherData.name}</h1>
              <p>{moment().format('dddd')},&nbsp;
                {moment().format('MMMM Do YYYY, h:mm a')}</p>
            </div>
            <div className='box2'>
              <h4>Temp:<br />&nbsp;{temp}ºF</h4>
            </div>
            <div className='box3'>
              <h4>Feels Like:<br />&nbsp;{feelsLike}ºF</h4>
            </div>
            <div className='box4'>
              <h4>Sunrise:<br />&nbsp;{sunrise}</h4>
            </div>
            <div className='box5'>
              <h4>Sunset:<br />&nbsp;{sunset}</h4>
            </div>
            <div className='box6'>
              <h4>Sky:&nbsp;{clouds}</h4>
            </div>
          </div>
    </>
  )
}