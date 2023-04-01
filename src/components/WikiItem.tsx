import React from "react";
import { Link } from "react-router-dom";

import styles from "./wikiItem.module.scss";

interface IProps {
  wiki: {
    id: number;
    title: string;
    contents: string;
  };
}

const WikiItem = ({ wiki }: IProps) => {
  return (
    <li key={wiki.id} className={styles.wiki}>
      <Link to={`/wiki/${wiki.id}`}>{wiki.title}</Link>
    </li>
  );
};

export default WikiItem;
