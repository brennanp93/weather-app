import { useEffect, useState } from "react"
import './App.css';
import PlaceHolder from "./components/PlaceHolder";
import Weather from "./components/Weather";
import WeatherCard from "./components/WeatherCard"


function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
    
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   setLat(position.coords.latitude);
  //   setLong(position.coords.longitude);
  // });
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(parseFloat(position.coords.latitude));
        setLong(parseFloat(position.coords.longitude));
      });
      console.log(lat)

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      // await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&cnt=8&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(res => {
          setData(res)
          console.log(data)
        })
        .catch((err) => {
          console.log(err.message)
        });
console.log(`https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(2)}&longitude=${long.toFixed(2)}&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FLos_Angeles`)
        await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&temperature_unit=fahrenheit&start_date=2023-03-01&end_date=2023-03-01`)
        .then(res => res.json())
        .then(res => {
          setHourlyData(res)
          console.log(hourlyData, 'hourly')
        })
        .catch((err) => {
          console.log(err.message)
        });
    }
    fetchData();
  }, [lat, long])


  return (
    <div className="App">

      {(typeof data.main != 'undefined') ?
        <Weather 
        weatherData={data}
        hourlyData={hourlyData} 
        />
        // <WeatherCard />
        :
        <PlaceHolder weatherData={data}/>
      // <div></div>
      }
    </div>
  );
}

export default App;
