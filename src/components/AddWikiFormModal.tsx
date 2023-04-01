import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";

import styles from "./addWikiFormModal.module.scss";
import { totalDataState } from "store/wikiState";

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddWikiFormModal = ({ setOpenModal }: IProps) => {
  const [totalData, setTotalData] = useRecoilState(totalDataState);
  const [newData, setNewData] = useState({
    id: totalData.length + 1,
    title: "",
    contents: "",
  });

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      if (e.target.id === "title") setNewData({ ...newData, title: value });
      else setNewData({ ...newData, contents: value });
    },
    [newData]
  );

  const btnClickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { name } = e.target as HTMLButtonElement;
      if (name === "cancel") setOpenModal(false);
    },
    [setOpenModal]
  );

  const submitHandler = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();

      if (newData.title !== "" && newData.contents !== "") {
        const newArr = totalData.concat(newData);
        setTotalData(newArr);
        setOpenModal(false);
      }
    },
    [newData, setOpenModal, setTotalData, totalData]
  );

  return (
    <>
      <div className={styles.background} />
      <form className={styles.formWrap} onSubmit={submitHandler}>
        <h2>위키피디아 추가</h2>
        <div className={styles.inputsWrap}>
          <div className={styles.inputWrap}>
            <label htmlFor="title">제목</label>
            <input type="text" id="title" onChange={inputChangeHandler} />
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="contents">내용</label>
            <textarea id="contents" rows={5} onChange={inputChangeHandler} />
          </div>
        </div>
        <div className={styles.btnWrap} onClick={btnClickHandler}>
          <button type="submit" name="submit" className={styles.submitBtn}>
            등록
          </button>
          <button type="button" name="cancel">
            취소
          </button>
        </div>
      </form>
    </>
  );
};

export default AddWikiFormModal;
