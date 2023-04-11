import { useEffect, useState } from "react";
export default function Search({ pullLatLong, setLat, setLong }) {
  const [locationSearch, setLocationSearch] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [geoLocate, setGeoLocate] = useState();

 function handleSubmit(evt) {
    evt?.preventDefault();
    let splitCityState = locationSearch
      .split(",")
      .map((data) => data.trim().toUpperCase().replace(" ", "_"));
    setCity(splitCityState[0]);
    setState(splitCityState[1]);
    setLocationSearch("");
  }
  function currentLocation(evt) {
    evt?.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(parseFloat(position.coords.latitude));
      setLong(parseFloat(position.coords.longitude));
    });
    console.log('boom')
  }
  function handleChange(evt) {
    const search = evt.target.value;
    setLocationSearch(search);
  }
  useEffect(() => {

    const fetchData = async () => {
      await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},us&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          setGeoLocate(res[0]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchData();
    setLat(geoLocate?.lat);
    setLong(geoLocate?.lon);
  }, [city]);

  // console.log(`http://api.openweathermap.org/geo/1.0/direct?q=tucson,az,us&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
  return (
    <div className="searchBox">
      <input
        autoComplete="off"
        type="text"
        placeholder="ex: Orange, CA"
        value={locationSearch}
        onChange={handleChange}
      />
      <button type="submit" onClick={() => handleSubmit()}>
        <img src="/search.png" alt="" />
      </button>
      <button type="submit" onClick={() => currentLocation()}>
        <img src="/my-location.png" alt="" />
      </button>
    </div>
  );
}


// console.log(city, state)
    // 
    // await fetch(
    //   `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},us&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    // ) 
    // .then((res) => res.json())
    // .then((data) => {console.log(data)})