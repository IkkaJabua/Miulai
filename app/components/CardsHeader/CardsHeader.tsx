import Link from "next/link";
import styles from "./CardsHeader.module.scss";

type Props = {
  title: string;
  subtitle: string;
  onClick?: () => void;
};

const CardsHeader = ({ title, subtitle, onClick }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.firstChild}>{title}</h3>

      <button className={styles.seeAll} onCanPlay={onClick}>
        See All
      </button>
    </div>
  );
};

export default CardsHeader;
