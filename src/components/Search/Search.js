import React from "react";
import styles from "./Search.module.css";

const Search = ({ value, onChange, children }) => {
  return (
    <form>
      {children}{" "}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </form>
  );
};

export default Search;
