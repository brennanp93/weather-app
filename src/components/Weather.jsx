import moment from "moment";
import HourlyWeather from "./HourlyWeather"
export default function Weather({ weatherData, hourlyData }) {
  const temp = Math.round(hourlyData?.current_weather?.temperature);
  let sunrise = moment(new Date(weatherData.sys.sunrise * 1000)).format('LT');
  let sunset = moment(new Date(weatherData.sys.sunset * 1000)).format('LT');
  const clouds = weatherData.weather[0].description.toUpperCase();
  const high = Math.round(weatherData.main.temp_max);
  const low = Math.round(weatherData.main.temp_min);
  const humidity = weatherData.main.humidity;
  const wind = weatherData.wind.speed;
  let directions = getDirections(weatherData.wind.deg);

  // Calculate the wind directeion based on degrees. 
  function getDirections(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    let index = Math.round(degrees / 45) % 8;
    return directions[index]
  };

  return (
    <>
      <div className='weatherBox'>
        <div className='box1'>
          <h2>{weatherData.name}</h2>
          <h1>{temp}ºF</h1>
          <div>
            <h4>{clouds}</h4>
            <div>
              <h5>H:{high}º&nbsp;&nbsp;|&nbsp;&nbsp;L:{low}º</h5>
            </div>
          </div>
        </div>
        <HourlyWeather hourlyData={hourlyData} temp={temp} />
        <div className='box2'>
          <div>
            <img src='/white-sunrise.png' alt="" />
            <h4>{sunrise}</h4>
          </div>
        </div>
        <div className='box3'>
          <div>
            <img src="/white-sunset.png" alt="" />
            <h4>{sunset}</h4>
          </div>
        </div>
        <div className='box4'>
          <section>
            <img src="/white-dew-point.png" alt="" />
            <h4>{humidity}%</h4>
          </section>
        </div>
        <div className='box5'>
          <section>
            <img src="/white-wind.png" alt="" />
            <h4>{wind}&nbsp;mph&nbsp;{directions}</h4>
          </section>
        </div>
      </div>
    </>
  )
};