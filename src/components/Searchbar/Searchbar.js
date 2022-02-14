import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <header className=''>
      <form className={styles.searchbar}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
