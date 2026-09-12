import { useSelector } from "react-redux";


function Show() {

  const {
    loading,
    current,
    city,
    error
  } = useSelector((state) => state);


  if (loading) {
    return (
      <div className="weather-card">
        <h2>Loading...</h2>
      </div>
    );
  }


  if (error) {
    return (
      <div className="weather-card">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }


  if (!current) {
    return (
      <div className="weather-card">
        <h2>🌤️ Weather App</h2>
        <p>Search a city to see its weather.</p>
      </div>
    );
  }


  return (
    <div className="weather-card">

      <div className="weather-header">
        <div>
          <p className="weather-label">CURRENT WEATHER</p>
          <h2>{city}</h2>
        </div>

        <span className="weather-icon">
          🌤️
        </span>
      </div>


      <div className="weather-temperature">
        {current.temperature_2m}°
        <span>C</span>
      </div>


      <div className="weather-info">

        <div className="weather-item">
          <span>💧</span>

          <div>
            <p>Humidity</p>
            <strong>
              {current.relative_humidity_2m}%
            </strong>
          </div>
        </div>


        <div className="weather-item">
          <span>💨</span>

          <div>
            <p>Wind Speed</p>
            <strong>
              {current.wind_speed_10m} km/h
            </strong>
          </div>
        </div>


        <div className="weather-item">
          <span>🕒</span>

          <div>
            <p>Updated</p>
            <strong>
              {current.time}
            </strong>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Show;