// import moment from 'moment';
export default function PlaceHolder({ weatherData }) {
  const feelsLike = Math.round(weatherData.main.feels_like);
  const temp = Math.round(weatherData.main.temp);
  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });;
  const clouds = weatherData.weather[0].description.toUpperCase()
  // const weatherIcon = weatherData.weather[0].icon
  const high = Math.round(weatherData.main.temp_max)
  const low = Math.round(weatherData.main.temp_min)
  console.log(weatherData)
  return (
    <>
      <div className='weatherBoxSmallScreen'>
        <div className='box1'>
          <h2>{weatherData.name}</h2>
          <h1>{temp}ºF</h1>
          <div>
            <h4>{clouds}</h4>
            <div>
              <h5>H:{high}&nbsp;|&nbsp;L:{low}</h5>
            </div>
          </div>
        </div>
        <div className='box4'>
          <div>
            <img src='/sunrise.png' alt="" />
            <h4>{sunrise}</h4>
          </div>

        </div>
        <div className='box5'>
          <div>
            <img src="/sunset.png" alt="" />
            <h4>{sunset}</h4>
          </div>
        </div>
        <div className='box2'>
          <h4>Feels Like:<br />&nbsp;{feelsLike}ºF</h4>
        </div>



      </div>
    </>
  )
}