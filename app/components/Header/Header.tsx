import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import styles from "./Header.module.scss";
import Image from "next/image";
import axios from "axios";

interface InputTpo {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = (props: InputTpo) => {
  const [inputValue, setInputValue] = useState();
  const [searchItems, setSearchItems] = useState<any>();
  console.log(searchItems, "searchItems");
  useEffect(() => {
    axios
      .get(
        `https://interstellar-1-pdzj.onrender.com/search?search=${inputValue}`
      )
      .then(async (r) => {
        setSearchItems(r.data.authors);
        console.log(r.data.authors.atristName);
      });
  }, [inputValue]);
  console.log(searchItems, "ss");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.searchWrapper}>
          <Input
            onChange={(e: any) => setInputValue(e.target.value)}
            value={inputValue}
            className={styles.input}
          />

          {searchItems?.map((item: any, index: number) => (
            <div key={index} className={styles.containerInside}>
              {item.files && item.files.length > 0 && item.files[0]?.url ? (
                <div className={styles.searchDropdown}>
                  <img
                    className={styles.img}
                    src={item.files[0].url}
                    width={72}
                    height={72}
                    alt={item.firstName || "image"}
                  />
                  <div className={styles.white}>{item.firstName}</div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>

        <Image
          src={"/icon/userHeaderIcon.svg"}
          alt="image"
          width={32}
          height={32}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Header;
