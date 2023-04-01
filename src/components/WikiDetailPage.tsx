import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import styles from "./wikiDetailPage.module.scss";
import { totalDataState } from "../store/wikiState";
import RelatedKeywordList from "./RelatedKeywordList";

const WikiDetailPage = () => {
  const params = useParams();
  const [totalData, setTotalData] = useRecoilState(totalDataState);
  const [mode, setMode] = useState("read");
  const [data, setData] = useState({
    id: 0,
    title: "",
    contents: "",
  });
  const [modifyContents, setModifyContents] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(false);
    const filterData = totalData.find((wiki) => wiki.id === Number(params.id));
    if (filterData) {
      setData(filterData);
      setModifyContents(filterData.contents);
      setIsFetching(true);
    }
  }, [params, totalData]);

  const btnClickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { name } = e.target as HTMLButtonElement;
      if (name === "modify") setMode(name);
      else if (name === "save") {
        setTotalData(
          totalData.map((wiki) =>
            wiki.id === data.id ? { ...wiki, contents: modifyContents } : wiki
          )
        );
        setMode("read");
      } else if (name === "cancel") setMode("read");
    },
    [data.id, modifyContents, setTotalData, totalData]
  );

  const contentChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setModifyContents(value);
    },
    []
  );

  return (
    <div className={styles.wrap}>
      {isFetching && (
        <>
          <h2>{data.title}</h2>
          {mode === "read" ? (
            <p>{data.contents}</p>
          ) : (
            <textarea
              value={modifyContents}
              rows={5}
              onChange={contentChangeHandler}
            />
          )}
          <div className={styles.btnWrap} onClick={btnClickHandler}>
            {mode === "read" ? (
              <button type="button" name="modify">
                수정
              </button>
            ) : (
              <div className={styles.modifyBtnWrap}>
                <button type="button" name="save">
                  저장
                </button>
                <button
                  type="button"
                  name="cancel"
                  className={styles.cancelBtn}
                >
                  취소
                </button>
              </div>
            )}
          </div>
        </>
      )}
      <RelatedKeywordList keyword={data.title} />
    </div>
  );
};

export default WikiDetailPage;
