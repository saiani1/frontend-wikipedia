import { Routes, Route } from "react-router-dom";

import styles from "./route.module.scss";
import WikiDetailPage from "components/WikiDetailPage";
import Main from "./Main";
import Header from "components/Header";

const App = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wiki/:id" element={<WikiDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
