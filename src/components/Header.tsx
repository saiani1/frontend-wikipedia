import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrap}>
      <h1>
        <Link to="/">프론트엔드 용어 WIKIPEDIA</Link>
      </h1>
    </header>
  );
};

export default Header;
