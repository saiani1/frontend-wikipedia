import { useCallback } from "react";
import classNames from "classnames/bind";
import { useRecoilState } from "recoil";

import styles from "./pagination.module.scss";
import { pageState } from "store/wikiState";

const cx = classNames.bind(styles);

interface Props {
  total: number;
}

const Pagination = ({ total }: Props) => {
  const [page, setPage] = useRecoilState(pageState);
  const totalPage = Array.from({ length: Math.ceil(total / 5) }, (v, i) => i);

  const pageClickHandler = useCallback(
    (e: React.MouseEvent<HTMLUListElement>) => {
      const { name } = e.target as HTMLButtonElement;
      if (name !== undefined) setPage(Number(name) + 1);
    },
    [setPage]
  );

  return (
    <ul className={styles.wrap} onClick={pageClickHandler}>
      <li>
        {totalPage.map((i) => (
          <button
            key={i}
            name={`${i}`}
            className={cx("page", page === i + 1 ? "active" : "")}
          >
            {i + 1}
          </button>
        ))}
      </li>
    </ul>
  );
};

export default Pagination;
