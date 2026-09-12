

import { useEffect } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_data } from './redux/actions/action';
import Search from './component/search/Search';
import Show from './component/search/Show';
import ForeCast from './component/search/ForeCast';
function App() {

  const dispatch = useDispatch();

  let city = useSelector(state=>state.city)

useEffect(() => {
  if (city) {
    dispatch(fetch_data(city));
  }
}, [city]);

  return (
    <>
    <Search/>
    <Show/>
    <ForeCast/>

    </>
  )
}

export default App
