// src/components/Header.js

import styles from "../styles/App.module.css";

function Header() {
  return (
    <header className={styles.siteHeader}>
      <h1 className="ms-3 my-2">Counselling Site</h1>
      {/* <nav className={styles.siteNavbar}>
        <a href="/" className={styles.navLink}>
          Home
        </a>
        <a href="/about" className={styles.navLink}>
          About
        </a>
      </nav> */}
    </header>
  );
}

export default Header;
