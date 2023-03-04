import { useEffect, useState } from "react"
import './App.css';
import PlaceHolder from "./components/PlaceHolder";
import Weather from "./components/Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(parseFloat(position.coords.latitude));
        setLong(parseFloat(position.coords.longitude));
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(res => {
          setData(res)
        })
        .catch((err) => {
          console.log(err.message)
        });
      await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&timeformat=unixtime&timezone=America%2FLos_Angeles`)
        .then(res => res.json())
        .then(res => {
          setHourlyData(res)
        })
        .catch((err) => {
          console.log(err.message)
        });
    };
    fetchData();
  }, [lat, long]);
// console.log( data)
  return (
    <div className="App">

      {(typeof data.main != 'undefined') ?
        <Weather
          weatherData={data}
          hourlyData={hourlyData}
        />
        :
        <PlaceHolder weatherData={data} />
      }
    </div>
  );
}

export default App;
