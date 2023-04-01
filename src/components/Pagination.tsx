import { useState, useCallback } from "react";
import classNames from "classnames/bind";
import styles from "./pagination.module.scss";

const cx = classNames.bind(styles);

interface IProps {
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ total, page, setPage }: IProps) => {
  const totalPage = Array.from({ length: Math.ceil(total / 5) }, (v, i) => i);

  const pageClickHandler = useCallback(
    (e: React.MouseEvent<HTMLUListElement>) => {
      const { name } = e.target as HTMLButtonElement;
      setPage(Number(name) + 1);
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
