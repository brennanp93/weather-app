import moment from "moment-timezone";
// import tz from "moment-timezone";
import { useEffect, useState } from "react";
export default function HourlyWeather({ hourlyData }) {
  const hours = [  "12AM", "1AM", "2AM", "3AM", "4AM", "5AM",   "6AM", "7AM", "8AM", "9AM", "10AM", "11AM",   "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",   "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];

  // navigator.geolocation.getCurrentPosition(function (position) {
  //   setLat(position.coords.latitude);
  //   setLong(position.coords.longitude);
  // });

  // console.log(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //     });

  //     await fetch(`https://api.open-meteo.com/v1/forecast?latitude=33.79&longitude=-117.85&hourly=temperature_2m&temperature_unit=fahrenheit&start_date=2023-03-01&end_date=2023-03-01`)
  //       .then(res => res.json())
  //       .then(res => {
  //         setData(res)
  //         console.log(data, 'hourly')
  //       })
  //       .catch((err) => {
  //         console.log(err.message)
  //       });
  //   }
  //   fetchData();
  // }, [lat, long])

  let hourlyTemp = hourlyData?.hourly?.temperature_2m
  // moment(new Date(hourlyReading[0]?.dt * 1000)).format('LT')
  // console.log(new Date(hourlyReading[4]?.dt *1000)).toLocaleTimeString('en-US', { timeZone: 'UTC' })
  // console.log(new Date(1677747600 * 1000).toLocaleTimeString('en-US', { timeZone: 'UTC' }))
  console.log('BananaA', hourlyData)
  return (
    <>
      <div className="hourlyContainer">
        {hourlyTemp.map((hour, idx) => (
          <div className="hourlyBox">
            <div>{hour}</div>
            <br></br>
            <div>{hours[idx]}</div>
          </div>
          
        ))}
     

      </div>
    </>
  )
}