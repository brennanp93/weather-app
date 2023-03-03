import moment from "moment-timezone";
// import tz from "moment-timezone";
import { useEffect, useState } from "react";
export default function HourlyWeather({ hourlyData }) {
  const hours = [  "12:00AM", "1:00AM", "2:00AM", "3:00AM", "4:00AM", "5:00AM",   "6:00AM", "7:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM",   "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM",   "6:00PM", "7:00PM", "8:00PM", "9:00PM", "10:00PM", "11:00PM", "12:00AM"];

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