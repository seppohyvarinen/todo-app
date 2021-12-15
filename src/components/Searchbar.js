import { useState, useEffect } from "react";

/*
Searchbar.js uses the filter function it receives as props to filter the todos realtime according to the search parameters.
I used useEffect to achieve this realtime functionality. It calls the filter function everytime the searchParams state is changed.
The filter function changes the search parameters and the names to lowercase when searching, so the search
works case insensitively.
*/

const SearchBar = ({ filter, theme }) => {
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    filter(searchParams, "searchmode");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleChange = (e) => {
    setSearchParams(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.length !== 0) {
      filter(searchParams, "searchmode");
    }
  };

  return (
    <div className="Searchcomponent">
      {" "}
      <form onSubmit={handleSubmit}>
        <label>
          <span className="visually-hidden">Search todos</span>
        </label>
        <input
          type="text"
          className={theme === "alt" ? "alt-Searchbar" : "Searchbar"}
          placeholder="Search todos..."
          onChange={handleChange}
          value={searchParams}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
