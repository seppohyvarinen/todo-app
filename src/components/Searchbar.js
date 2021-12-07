import { useState, useEffect } from "react";

const SearchBar = ({ filter }) => {
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
          className="Searchbar"
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
