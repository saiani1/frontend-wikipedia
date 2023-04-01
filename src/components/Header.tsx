import React from "react";

import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrap}>
      <h1>
        <Link to="/">글로벌 널리지 WIKIPEDIA</Link>
      </h1>
    </header>
  );
};

export default Header;
