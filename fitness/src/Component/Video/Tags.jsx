import React from "react";
import styles from "./Video.module.css";

const Tags = ({ tags }) => {
  return (
    <div className={styles.tag__parent__wrapper}>
      <p>Tags:</p>
      {Array.isArray(tags) &&
        tags.length > 0 &&
        tags.map((tagName, idx) => {
          return (
            <ul className={styles.tag__wrapper}>
              <li key={idx}>
                <span>{tagName}</span>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export { Tags };
