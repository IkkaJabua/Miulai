import Link from "next/link";
import styles from "./CardsHeader.module.scss";
import { useRouter } from "next/navigation";


type Props = {
  title: string;
  subtitle?: string;
  addRoute?: string;
};


const CardsHeader = ({ title, subtitle, addRoute }: Props) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h3 className={styles.firstChild}>{title}</h3>

      <button className={styles.seeAll} onClick={() => router?.push(`${addRoute}`)}>
        {subtitle}
      </button>
    </div>
  );
};

export default CardsHeader;
