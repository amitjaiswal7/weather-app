import {
  WEATHER_ERROR,
  WEATHER_CURRENT,
  WEATHER_FORECAST,
  WEATHER_PENDING,
  SET_CITY
} from "../constant/constant";

const initialState = {
  city: "",
  current: null,
  forecast: null,
  loading: false,
  error: null
};

export const Renducerweater = (
  state = initialState,
  action
) => {

  if (action.type === WEATHER_PENDING) {

    return {
      ...state,
      loading: true,
      error: null
    };
  }


  if (action.type === WEATHER_CURRENT) {

    return {
      ...state,
      loading: false,
      current: action.payload
    };
  }


  if (action.type === WEATHER_FORECAST) {

    return {
      ...state,
      loading: false,
      forecast: action.payload
    };
  }


  if (action.type === WEATHER_ERROR) {

    return {
      ...state,
      loading: false,
      error: action.payload
    };
  }


  if (action.type === SET_CITY) {

    return {
      ...state,
      city: action.payload
    };
  }


  return state;
};