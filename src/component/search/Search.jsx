import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_data, fetch_set_city } from "../../redux/actions/action";


function Search() {
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const [input, setInput] = useState(city);

  function handledata(e) {
    setInput(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();

    if (!input.trim()) return;

    dispatch(fetch_set_city(input));
    dispatch(fetch_data(input));
  }

  function handleClear() {
    setInput("");
    dispatch(fetch_set_city(""));
  }

  return (
    <div className="search-container">
      <h1 className="search-title">Weather Search</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Enter city name..."
            value={input}
            onChange={handledata}
          />

          {input && (
            <button
              type="button"
              className="clear-button"
              onClick={handleClear}
            >
              ✕
            </button>
          )}
        </div>

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;