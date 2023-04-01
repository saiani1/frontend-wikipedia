import { Routes, Route } from "react-router-dom";

import WikiDetailPage from "components/WikiDetailPage";
import Main from "./Main";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wiki/:id" element={<WikiDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
