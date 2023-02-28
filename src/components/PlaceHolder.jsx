// import moment from 'moment';
export default function PlaceHolder({ weatherData }) {
  const temp = Math.round(weatherData.main.temp);
  const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });;
  const clouds = weatherData.weather[0].description.toUpperCase()
  const high = Math.round(weatherData.main.temp_max)
  const low = Math.round(weatherData.main.temp_min)
  const humidity = weatherData.main.humidity
  const wind = weatherData.wind.speed
  let directions = getDirections(weatherData.wind.deg)
  function getDirections(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    let index = Math.round(degrees/45) % 8;
    return directions[index]
  }
  // console.log(weatherData)
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
            <img src='/white-sunrise.png' alt="" />
            <h4>{sunrise}</h4>
          </div>
        </div>
        <div className='box5'>
          <div>
            <img src="/white-sunset.png" alt="" />
            <h4>{sunset}</h4>
          </div>
        </div>
        <div className='box2'>
          <section>
            <img src="/white-dew-point.png" alt="" />
            <h4>{humidity}%</h4>
          </section>
        </div>
        <div className='box2'>
          <section>
            <img src="/white-wind.png" alt="" />
            <h4>{wind}mph&nbsp;{directions}</h4>
          </section>
        </div>
      </div>
    </>
  )
}