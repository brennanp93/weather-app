import moment from "moment";
export default function HourlyWeather({ hourlyData }) {
  const currentDate = new Date()
  const currentHour = parseInt(currentDate.getHours().toString().padStart(2, '0'));

  let hourlyTemp = hourlyData?.hourly?.temperature_2m;
  
  let timeArray = hourlyData?.hourly?.time.map((t) => t = moment(t * 1000).format('h a'));
  
  let shortTimeData = hourlyData?.hourly?.time.map((t) => t = new Date(t * 1000).getHours());
  
  let futureIndex = shortTimeData?.indexOf(currentHour) + 12;

  let twelveHourForcastTemp = hourlyTemp?.slice(currentHour, futureIndex);
  let twelveHourForcastHours = timeArray?.slice(currentHour, futureIndex);

  return (
    <>
      <div className="hourlyContainer">
        {twelveHourForcastHours?.map((hours, idx) => (
          <div className="hourlyBox" key={idx}>
            <div>{hours}</div>
            <br></br>
            < div className="temp">{twelveHourForcastTemp[idx]}º</div>
          </div>
        ))}
      </div>
    </>
  )
}