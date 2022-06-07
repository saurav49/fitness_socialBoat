import React from "react";
import fIcon from "../../Icons/icons8-gymnastics-100.png";
import uIcon from "../../Icons/icons8-male-user-96.png";
import styles from "./Header.module.css";
import { useUserQuery } from "../../Hooks/useUserQuery";
import { ImCancelCircle } from "../../Icons/Icons";

const Header = () => {
  return (
    <div
      className={`${styles.header__wrapper} ${styles.d__flex__r} ${styles.d__flex__center__align} ${styles.d__flex__justify__btn}`}
    >
      <img src={fIcon} alt="fitness" className={styles.brand__icon} />
      <SearchBar />
      <button className={styles.user__btn}>
        <img src={uIcon} alt="user" className={styles.user__icon} />
      </button>
    </div>
  );
};

export { Header };

const SearchBar = () => {
  const { textQuery, setTextQuery, numQuery, setNumQuery } = useUserQuery();

  // function debounce(fn, delay) {
  //   let timer;
  //   return function(...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn(...args)
  //     }, delay);
  //   }
  // }

  return (
    <div
      className={`${styles.d__flex__r} ${styles.d__flex__center__align} ${styles.d__flex__justify__btn} ${styles.input__wrapper}`}
    >
      <div className={`${styles.d__flex__c} `}>
        {/* <label>Count</label> */}
        <input
          type="text"
          name="numRes"
          id="numRes"
          placeholder="Count"
          value={numQuery}
          onChange={(e) => setNumQuery(e.target.value)}
          className={`${styles.input__style} ${styles.input__num__style}`}
        />
      </div>
      <div className={styles.input__wrapper}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          value={textQuery}
          onChange={(e) => setTextQuery(e.target.value)}
          className={styles.input__style}
        />
        {textQuery.length > 0 && (
          <button
            className={styles.del__query__btn}
            onClick={() => setTextQuery("")}
          >
            <ImCancelCircle />
          </button>
        )}
      </div>
    </div>
  );
};
