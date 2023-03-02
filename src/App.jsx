import { useEffect, useState } from "react"
import './App.css';
import PlaceHolder from "./components/PlaceHolder";
import Weather from "./components/Weather";
import WeatherCard from "./components/WeatherCard"


function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  
  
  navigator.geolocation.getCurrentPosition(function (position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });
  // console.log(lat, long)
  // console.log(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      // await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&cnt=8&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(res => {
          setData(res)
          // console.log(data)
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
        <Weather weatherData={data}
        lat={lat}
        long={long}
        setLat={setLat}
        setLong={setLong}
        setData={setData} />
        // <WeatherCard />
        :
        <PlaceHolder weatherData={data}/>
      // <div></div>
      }
    </div>
  );
}

export default App;
