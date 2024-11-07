import React, { useRef, useState } from "react";

const SearchableList = ({ items, children, itemKeyFn }) => {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handdleChange = (e) => {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
    // debouncing implementations
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(e.target.value);
    }, 500);
  };
  return (
    <div className="searchable-list">
      <input type="search" placeholder="search" onChange={handdleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
