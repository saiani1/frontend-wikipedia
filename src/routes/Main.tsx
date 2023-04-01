import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DUMMY_DATA } from "assets/datas/dummyData";
import Pagination from "components/Pagination";

const Main = () => {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 5;

  return (
    <div>
      <button type="button">위키 추가</button>
      <ul>
        {DUMMY_DATA.slice(offset, offset + 5).map((wiki) => (
          <li key={wiki.id}>
            <Link to={`/wiki/${wiki.id}`}>{wiki.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination total={DUMMY_DATA.length} page={page} setPage={setPage} />
    </div>
  );
};

export default Main;
