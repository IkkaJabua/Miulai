"use client";
import Input from "@/app/components/Input/Input";
import styles from "./page.module.scss";
import Header from "@/app/components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "@/app/components/ MusicCard/ MusicCard";

const search = () => {
  const [inputValue, setInputValue] = useState();

  const inputChange = (e: any) => {
    // const newValue = e.target.value;
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const [searchItems, setSearchItems] = useState<any>();

  useEffect(() => {
    axios.get(`https://interstellar-1-pdzj.onrender.com/search?search=${inputValue}`
      )
      .then(async (r) => {
        setSearchItems(r.data.authors);
        console.log(r.data.authors);
      });
  }, [inputValue]);
  console.log(searchItems, "ss");

  return (
    <div className={styles.container}>
      <Header value={inputValue} onChange={inputChange} />
      <div className={styles.insideContainer}>
        {searchItems?.map((item: any) => (
          <div className={styles.containerInside}>
            {/* Safely check if item.files exists and has a valid file */}
            {item.files && item.files.length > 0 && item.files[0]?.url ? (
              <div className={styles.containerInside}>
                <img
                  src={item.files[0]?.url}
                  width={100}
                  height={100}
                  alt="image"
                />
                <div className={styles.white}>{item.firstName}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default search;
