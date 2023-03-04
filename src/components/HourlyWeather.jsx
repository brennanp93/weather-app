import moment from "moment";
export default function HourlyWeather({ hourlyData, temp }) {
  const currentDate = new Date()
  const currentHour = parseInt(currentDate.getHours().toString().padStart(2, '0'));

  let hourlyTemp = hourlyData?.hourly?.temperature_2m.map(t => t = Math.round(t));

  let timeArray = hourlyData?.hourly?.time.map((t) => t = moment(t * 1000).format('h a'));

  let shortTimeData = hourlyData?.hourly?.time.map((t) => t = new Date(t * 1000).getHours());

  let futureIndex = shortTimeData?.indexOf(currentHour) + 12;

  let twelveHourForcastTemp = hourlyTemp?.slice(currentHour + 1, futureIndex);
  let twelveHourForcastHours = timeArray?.slice(currentHour + 1, futureIndex);
  // console.log(twelveHourForcastTemp, twelveHourForcastHours)
  return (
    <>
      <div className="hourlyContainer">
        <div className="hourlyBox">
          <div>Now</div>
          <br/>
          <div className="temp" >{temp}º</div>
        </div>
        {twelveHourForcastHours?.map((hours, idx) => (
          <div className="hourlyBox" key={idx}>
            <div>{hours}</div>
            <br/>
            < div className="temp">{twelveHourForcastTemp[idx]}º</div>
          </div>
        ))}
      </div>
    </>
  )
}