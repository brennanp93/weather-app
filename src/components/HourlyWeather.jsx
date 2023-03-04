import moment from "moment";
export default function HourlyWeather({ hourlyData }) {
  // const hours = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
  const currentDate = new Date()
  const currentHour = parseInt(currentDate.getHours().toString().padStart(2, '0'));
  // let newHourlyData = hourlyData
  let hourlyTemp = hourlyData?.hourly?.temperature_2m;
  
  let timeArray = hourlyData?.hourly?.time.map((t) => t = moment(t * 1000).format('h a'))
  
  let shortTimeData = hourlyData?.hourly?.time.map((t) => t = new Date(t * 1000).getHours())
  
  let futureIndex = shortTimeData?.indexOf(currentHour) + 12


  let twelveHourForcastTemp = hourlyTemp?.slice(currentHour, futureIndex)
  let twelveHourForcastHours = timeArray?.slice(currentHour, futureIndex)
console.log(twelveHourForcastHours)
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