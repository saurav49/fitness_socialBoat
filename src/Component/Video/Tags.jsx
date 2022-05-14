import React from "react";
import styles from "./Video.module.css";

const Tags = ({ tags }) => {
  return (
    <div className={styles.tag__parent__wrapper}>
      <p className={styles.tag__heading}>Tags: </p>
      {Array.isArray(tags) &&
        tags.length > 0 &&
        tags.map((tagName, idx) => {
          return (
            <ul className={styles.tag__wrapper} key={idx}>
              <li>
                <span>{tagName}</span>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export { Tags };
