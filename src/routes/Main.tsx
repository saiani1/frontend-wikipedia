import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { totalDataState } from "../store/wikiState";
import Pagination from "components/Pagination";
import AddWikiFormModal from "components/AddWikiFormModal";

const Main = () => {
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const totalData = useRecoilValue(totalDataState);
  const offset = (page - 1) * 5;

  const openModalBtnClickHandler = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, [setOpenModal]);

  return (
    <div>
      {openModal && <AddWikiFormModal setOpenModal={setOpenModal} />}
      <button type="button" onClick={openModalBtnClickHandler}>
        위키 추가
      </button>
      <ul>
        {totalData.slice(offset, offset + 5).map((wiki) => (
          <li key={wiki.id}>
            <Link to={`/wiki/${wiki.id}`}>{wiki.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination total={totalData.length} setPage={setPage} />
    </div>
  );
};

export default Main;
