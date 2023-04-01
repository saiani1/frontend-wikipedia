import React from "react";

import styles from "./addWikiFormModal.module.scss";

const AddWikiFormModal = () => {
  return (
    <form>
      <h2>위키 등록</h2>
      <label htmlFor="subject">제목</label>
      <input type="text" id="subject" />
      <label htmlFor="content">내용</label>
      <textarea id="content" />
      <div className={styles.btnWrap}>
        <button type="submit">등록</button>
        <button type="button">취소</button>
      </div>
    </form>
  );
};

export default AddWikiFormModal;
