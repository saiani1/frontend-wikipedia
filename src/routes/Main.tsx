import { useState, useCallback } from "react";
import { useRecoilValue } from "recoil";

import styles from "./main.module.scss";
import { totalDataState, pageState } from "store/wikiState";
import AddWikiFormModal from "components/contents/AddWikiFormModal";
import Pagination from "components/UI/Pagination";
import WikiItem from "components/UI/WikiItem";
import { IWiki } from "types/wiki";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const page = useRecoilValue(pageState);
  const totalData = useRecoilValue(totalDataState);
  const offset = (page - 1) * 5;

  const openModalBtnClickHandler = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, [setOpenModal]);

  return (
    <main className={styles.wrap}>
      {openModal && <AddWikiFormModal setOpenModal={setOpenModal} />}
      <button
        type="button"
        className={styles.addBtn}
        onClick={openModalBtnClickHandler}
      >
        신규 위키피디아 추가
      </button>
      <ul className={styles.wikiWrap}>
        {totalData.slice(offset, offset + 5).map((wiki: IWiki) => (
          <WikiItem key={wiki.id} wiki={wiki} />
        ))}
      </ul>
      <Pagination total={totalData.length} />
    </main>
  );
};

export default Main;
