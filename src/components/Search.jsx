import { useEffect, useState } from "react";
export default function Search({ lat, long }) {
  const [locationSearch, setLocationSearch] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  let tuna = "";

  function handleSubmit(evt) {
    evt?.preventDefault();
    let splitCityState = locationSearch
      .split(",")
      .map((data) => data.trim().toUpperCase().replace(" ", "_"));
    setCity(splitCityState[0]);
    setState(splitCityState[1])
    setLocationSearch("");
  }

  function handleChange(evt) {
    const search = evt.target.value;
    setLocationSearch(search);
  }

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
    </div>
  );
}
