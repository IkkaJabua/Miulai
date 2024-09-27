import React, { useEffect, useState, useRef } from "react";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import styles from "./Header.module.scss";
import Image from "next/image";
import axios from "axios";

interface InputTpo {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<InputTpo> = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [searchItems, setSearchItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputValue) {
      axios
        .get(`https://interstellar-1-pdzj.onrender.com/search?search=${inputValue}`)
        .then((r) => {
          setSearchItems(r.data.authors);
          setShowDropdown(true);
        })
        .catch((error) => console.error("Error fetching search results:", error));
    } else {
      setSearchItems([]);
      setShowDropdown(false);
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setShowDropdown(true);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Delay the blur action to allow clicking on dropdown items
    setTimeout(() => {
      if (!searchWrapperRef.current?.contains(document.activeElement)) {
        setIsFocused(false);
        setShowDropdown(false);
        if (isFocused) {
          setInputValue('');
        }
      }
    }, 200);
  };

  const handleItemClick = (item: any) => {
    setInputValue(item.firstName);
    setShowDropdown(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.searchWrapper} ref={searchWrapperRef}>
          <Input
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={inputValue}
            className={styles.input}
          />
          {inputValue !== '' && showDropdown && searchItems.length > 0 && (
            <div className={styles.searchDropdown}>
              {searchItems.map((item: any, index) => (
                <div 
                  key={index} 
                  className={styles.containerInside}
                  onMouseDown={(e) => e.preventDefault()} 
                  onClick={() => handleItemClick(item)}
                >
                  {item.files && item.files[0]?.url ? (
                    <div className={styles.searchItem}>
                      <img
                        className={styles.img}
                        src={item.files[0].url}
                        width={72}
                        height={72}
                        alt={item.firstName || "image"}
                      />
                      <div className={styles.white}>{item.firstName}</div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
        <Image
          src="/icon/userHeaderIcon.svg"
          alt="User icon"
          width={32}
          height={32}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Header;