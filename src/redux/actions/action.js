import {
  WEATHER_CURRENT,
  WEATHER_ERROR,
  WEATHER_FORECAST,
  WEATHER_PENDING,
  SET_CITY
} from "../constant/constant";

import axios from "axios";

export const fetch_error = (data) => {
  return {
    type: WEATHER_ERROR,
    payload: data
  };
};

export const fetch_current = (data) => {
  return {
    type: WEATHER_CURRENT,
    payload: data
  };
};

export const fetch_pending = () => {
  return {
    type: WEATHER_PENDING
  };
};

export const fetch_forecast = (data) => {
  return {
    type: WEATHER_FORECAST,
    payload: data
  };
};

export const fetch_set_city = (data) => {
  return {
    type: SET_CITY,
    payload: data
  };
};


export const fetch_data = (city) => {

  return async (dispatch) => {

    dispatch(fetch_pending());

    try {

      // 1. City → Latitude / Longitude

      const location = await axios(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1`
      );

      const result = location.data.results?.[0];

      if (!result) {
        throw new Error("City not found");
      }

      const { latitude, longitude } = result;


      // 2. Weather API

      const weather = await axios(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
      );


      console.log("WEATHER DATA:", weather.data);


      // 3. Current weather

      dispatch(
        fetch_current(weather.data.current)
      );


      // 4. Forecast

      dispatch(
        fetch_forecast(weather.data.daily)
      );


    } catch (error) {

      console.log(error);

      dispatch(
        fetch_error(error.message)
      );

    }
  };
};