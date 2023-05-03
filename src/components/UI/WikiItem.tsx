import { Link } from "react-router-dom";

import styles from "./wikiItem.module.scss";
import { IWiki } from "types/wiki";

interface IProps {
  wiki: IWiki;
}

const WikiItem = ({ wiki }: IProps) => {
  return (
    <li key={wiki.id} className={styles.wiki}>
      <Link to={`/wiki/${wiki.id}`}>{wiki.title}</Link>
    </li>
  );
};

export default WikiItem;
