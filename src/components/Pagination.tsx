import React from "react";

interface IProps {
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ total, setPage }: IProps) => {
  const totalPage = Array.from({ length: Math.ceil(total / 5) }, (v, i) => i);

  return (
    <ul>
      <li>
        {totalPage.map((i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </li>
    </ul>
  );
};

export default Pagination;
