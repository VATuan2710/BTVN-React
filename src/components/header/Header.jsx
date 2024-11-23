import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className={styles.header}>
      <div>
        <a href="">Logo</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <button onClick={toggleDarkMode} className={styles.toggleBtn}>
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} style={{ color: "white" }} />
            ) : (
              <FontAwesomeIcon icon={faMoon} style={{ color: "black" }} />
            )}
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
