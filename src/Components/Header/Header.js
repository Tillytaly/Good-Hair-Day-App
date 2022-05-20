import React from "react";
import styles from "../../Sass/layout/Header.module.scss"
const Header = () => {
  return (
    <header className= {styles.header}>
      <div className={styles.logoContainer}>
      <h1 className={styles.logo}>
        Good <span className={styles.neon}>Hair </span>
         Day
      </h1>
      </div>
      </header>
  );
};

export default Header;
