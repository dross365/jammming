import SearchBar from "../components/SearchBar";
import { useState } from "react";

function SearchBarContainer() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery("");
  };
  return (
    <SearchBar
      textHandler={handleChange}
      submitHandler={handleSubmit}
      text={searchQuery}
    />
  );
}

export default SearchBarContainer;
