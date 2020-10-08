import React from "react";
import Button from "../Button/Button";
import styles from "./Table.module.css";
// import "./Table.css";

const isSearched = (searchTerm) => (item) => {
  return item.title.toLowerCase().includes(searchTerm.toLowerCase());
};

const Table = ({ list, pattern, onDismiss }) => {
  return (
    <div className={styles.table}>
      {list.filter(isSearched(pattern)).map((item) => (
        <div key={item.objectID} className={styles.row}>
          <span>
            <a className={styles.link} href={item.url}>
              {item.title} +
            </a>
          </span>
          <span>{item.author}</span> <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <div>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className={styles.button}
            >
              Отбросить
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
