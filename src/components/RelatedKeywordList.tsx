import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import styles from "./relatedKeywordList.module.scss";
import { totalDataState } from "store/wikiState";
import { IWiki } from "types/wiki";

interface IProps {
  keyword: string;
}

const RelatedKeywordList = ({ keyword }: IProps) => {
  const navigate = useNavigate();
  const totalData = useRecoilValue(totalDataState);
  const [filteredData, setFilteredData] = useState<IWiki[]>();

  useEffect(() => {
    setFilteredData(
      totalData.filter(
        (wiki) => wiki.contents.includes(keyword) && wiki.title !== keyword
      )
    );
  }, [keyword, totalData]);

  const handleClickWikiTitle = useCallback(
    (e: React.MouseEvent<HTMLUListElement>) => {
      const { name } = e.target as HTMLButtonElement;
      if (name !== undefined) navigate(`/wiki/${name}`);
    },
    [navigate]
  );

  return (
    <div className={styles.wrap}>
      <h3>'{keyword}'(이)가 포함되어 있는 위키리스트</h3>
      <ul className={styles.wikiWrap} onClick={handleClickWikiTitle}>
        {filteredData && filteredData.length !== 0 ? (
          filteredData.map((wiki: IWiki) => (
            <li key={wiki.id}>
              <button type="button" name={String(wiki.id)}>
                {wiki.title}
              </button>
            </li>
          ))
        ) : (
          <span className={styles.notFound}>
            조건에 맞는 위키리스트가 없습니다.
          </span>
        )}
      </ul>
    </div>
  );
};

export default RelatedKeywordList;
