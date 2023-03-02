import moment from "moment-timezone";
// import tz from "moment-timezone";
import { useEffect, useState } from "react";
export default function HourlyWeather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const time = ['12:00AM', '3:00', '6:00', '9:00', '12:00PM', '3:00', '6:00', '9:00', '12:00']
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   setLat(position.coords.latitude);
  //   setLong(position.coords.longitude);
  // });

  // console.log(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&cnt=9&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(res => {
          setData(res)
          console.log(data, 'hourly')
        })
        .catch((err) => {
          console.log(err.message)
        });
    }
    fetchData();
  }, [lat, long])

  let hourlyReading = data?.list
  // moment(new Date(hourlyReading[0]?.dt * 1000)).format('LT')
  // console.log(new Date(hourlyReading[4]?.dt *1000)).toLocaleTimeString('en-US', { timeZone: 'UTC' })
  // console.log(new Date(1677747600 * 1000).toLocaleTimeString('en-US', { timeZone: 'UTC' }))
  // console.log(hourlyReading[0], 'tuna')
  return (
    <>
      <div className="hourly">
        {/* {hourlyReading.map((hourly, idx) => (
          <>
            <div className="hourlyBox">
              <div >{hourly?.main?.temp}</div>
              <div>{time[idx]}</div>
            </div>
          </>
        ))} */}

      </div>
    </>
  )
}