import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import styles from "./main.module.scss";
import { totalDataState, pageState } from "../store/wikiState";
import Pagination from "components/Pagination";
import AddWikiFormModal from "components/AddWikiFormModal";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const page = useRecoilValue(pageState);
  const totalData = useRecoilValue(totalDataState);
  const offset = (page - 1) * 5;

  const openModalBtnClickHandler = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, [setOpenModal]);

  return (
    <div className={styles.wrap}>
      {openModal && <AddWikiFormModal setOpenModal={setOpenModal} />}
      <button
        type="button"
        className={styles.addBtn}
        onClick={openModalBtnClickHandler}
      >
        신규 위키피디아 추가
      </button>
      <ul className={styles.wikiWrap}>
        {totalData.slice(offset, offset + 5).map((wiki) => (
          <li key={wiki.id} className={styles.wiki}>
            <Link to={`/wiki/${wiki.id}`}>{wiki.title}</Link>
          </li>
        ))}
      </ul>
      <Pagination total={totalData.length} />
    </div>
  );
};

export default Main;
