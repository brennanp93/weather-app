import { useEffect, useState } from "react"
import './App.css';
import Weather from "./components/Weather";



function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);


  // navigator.geolocation.getCurrentPosition(function (position) {
  //   setLat(position.coords.latitude);
  //   setLong(position.coords.longitude);
  // });
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_BANANA}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(long)
        });
    }
    fetchData();
  }, [lat, long])

  // console.log(`${process.env.REACT_APP}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
  return (
    <div className="App">

      {(typeof data.main != 'undefined') ?
        <Weather weatherData={data} />
        :
        <div></div>
      }
    </div>
  );
}

export default App;
