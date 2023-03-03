import HourlyWeather from "./HourlyWeather"
export default function PlaceHolder({ weatherData }) {

  // console.log(weatherData)
  return (
    <>
      <div className='weatherBoxSmallScreen'>
        <div className='box1'>
          {/* <h2>{weatherData.city.name}</h2> */}
          <h2>City Name</h2>
          <h3>Location Sharing Must Be On In Your Browser In Order To Retrieve Current Weather</h3>
          <div>
            <h4>Sky</h4>
            <div>
              <h5>H:&nbsp;|&nbsp;L:</h5>
            </div>
          </div>
        </div>
        <div className="hourlyContainer"></div>
        <div className='box2'>
          <div>
            <img src='/white-sunrise.png' alt="" />
            <h4>Sunrise</h4>
          </div>
        </div>
        <div className='box3'>
          <div>
            <img src="/white-sunset.png" alt="" />
            <h4>Sunset</h4>
          </div>
        </div>
        <div className='box4'>
          <div>
            <img src="/white-dew-point.png" alt="" />
            <h4>Humidity</h4>
          </div>
        </div>
        <div className='box5'>
          <div>
            <img src="/white-wind.png" alt="" />
            <h4>Wind speed & Direction</h4>
          </div>
        </div>
      </div>
    </>
  )
}