import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import toast from "react-hot-toast";

import styles from "./wikiDetailPage.module.scss";
import { totalDataState } from "../store/wikiState";
import RelatedKeywordList from "./RelatedKeywordList";
import { IWiki } from "types/wiki";
import NotFound from "./NotFound";

const WikiDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [totalData, setTotalData] = useRecoilState(totalDataState);
  const [transformContents, setTransformContents] = useState("");
  const [mode, setMode] = useState("read");
  const [data, setData] = useState({
    id: 0,
    title: "",
    contents: "",
  });
  const [modifyContents, setModifyContents] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const transformContentsHandler = useCallback(
    (filterData: IWiki) => {
      const tmpArr = totalData.filter(
        (wiki) =>
          filterData.contents.includes(wiki.title) &&
          wiki.title !== filterData.title
      );
      tmpArr.sort((a, b) => {
        if (a.title.length > b.title.length) return -1;
        if (a.title.length < b.title.length) return 1;
        return 0;
      });
      if (tmpArr.length !== 0) {
        let filtered: string;
        tmpArr.forEach((wiki) => {
          if (filtered === undefined) filtered = filterData.contents;
          filtered = filtered.replaceAll(
            wiki.title,
            `<button type='button' name=${wiki.id}>${wiki.title}</button>`
          );
          setTransformContents(filtered);
        });
      } else setTransformContents(filterData.contents);
    },
    [totalData]
  );

  const btnClickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { name } = e.target as HTMLButtonElement;
      if (name === "modify") setMode(name);
      else if (name === "save") {
        if (modifyContents === data.contents)
          toast.error("위키 내용이 변경되지 않았습니다.");
        else {
          setTotalData(
            totalData.map((wiki) =>
              wiki.id === data.id ? { ...wiki, contents: modifyContents } : wiki
            )
          );
          toast.success("위키 내용이 수정되었습니다.");
          setMode("read");
        }
      } else if (name === "cancel") setMode("read");
    },
    [data.contents, data.id, modifyContents, setTotalData, totalData]
  );

  const contentChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setModifyContents(value);
    },
    []
  );

  const keywordBtnClickHandler = useCallback(
    (e: React.MouseEvent<HTMLParagraphElement>) => {
      const { name } = e.target as HTMLButtonElement;
      if (name !== undefined) {
        navigate(`/wiki/${name}`);
      }
    },
    [navigate]
  );

  useEffect(() => {
    setIsFetching(false);
    const filterData = totalData.find((wiki) => wiki.id === Number(params.id));
    if (filterData) {
      transformContentsHandler(filterData);
      setData(filterData);
      setModifyContents(filterData.contents);
      setIsFetching(true);
    }
  }, [params, totalData, setModifyContents, transformContentsHandler]);

  return (
    <div className={styles.wrap}>
      {isFetching && (
        <>
          <h2>{data.title}</h2>
          {mode === "read" ? (
            <p
              dangerouslySetInnerHTML={{ __html: transformContents }}
              onClick={keywordBtnClickHandler}
              className={styles.contents}
            ></p>
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
      {data.title ? <RelatedKeywordList keyword={data.title} /> : <NotFound />}
    </div>
  );
};

export default WikiDetailPage;
