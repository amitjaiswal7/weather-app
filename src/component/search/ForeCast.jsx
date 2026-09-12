import { useSelector } from "react-redux";


function ForeCast() {

  const {
    forecast,
    loading
  } = useSelector((state) => state);


  if (loading) {
    return null;
  }

  if (!forecast) {
    return null;
  }


  return (
    <div className="forecast-container">

      <h2>7 Day Forecast</h2>

      <div className="forecast-list">

        {forecast.time.map((day, index) => (

          <div
            className="forecast-card"
            key={day}
          >

            <p className="forecast-date">
              {day}
            </p>

            <div className="forecast-icon">
              🌤️
            </div>

            <div className="forecast-temp">
              <strong>
                {forecast.temperature_2m_max[index]}°
              </strong>

              <span>
                {forecast.temperature_2m_min[index]}°
              </span>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ForeCast;