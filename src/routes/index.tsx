import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        containerStyle={{
          top: 20,
        }}
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
};

export default App;
