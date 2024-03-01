import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
/* import colImg from "@/assets/col.png";
import enImg from "@/assets/en.png"; */
import { styles } from "@/styles";
import { IoLanguage } from "react-icons/io5";

import enImg from "@/assets/en.svg";
import esImg from "@/assets/es.svg";
const LanguageController = ({ language = "en", setLanguage }) => {
  const [dropdown, setDropdown] = useState(true);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const en = () => {
    setLanguage("en");
    setDropdown(true);
  };

  const es = () => {
    setLanguage("es");
    setDropdown(true);
  };

  const closeMenu = () => {
    // Encuentra el elemento del menú de idiomas
    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
      // Elimina el atributo 'open' para cerrar el menú
      dropdown.removeAttribute("open");
    }
  };

  /* let languageText;
  let languageIcon;

  if (language === "en") {
    languageText = "Language";
    languageIcon = enImg;
  } else if (language === "es") {
    languageText = "Lenguaje";
    languageIcon = colImg;
  } */
  return (
    <>
      <details className={`dropdown text-white   ${styles.subtitle}`}>
        <summary
          onClick={handleDropdown}
          className={` flex  items-center justify-center gap-1 cursor-pointer w-full h-full `}
        >
          <div className="flex items-center justify-center p-2  text-secondary rounded-lg shadow-card hover:bg-tertiary hover:text-white  ">
            <IoLanguage className="text-xl " />
            {dropdown ? (
              <IoMdArrowDropdown className="" />
            ) : (
              <IoMdArrowDropup className="" />
            )}
          </div>
        </summary>

        <ul
          className={`shadow-sm 
            flex flex-col justify-start dropdown-content rounded-box w-40 bg-tertiary p-4 `}
        >
          <div
            onClick={() => {
              en();
              closeMenu();
            }}
            className="w-full  hover:bg-primary p-1 hover:text-white rounded-lg flex items-center "
          >
            <div className="flex items-center justify-start gap-4  rounded-box  p-1 cursor-pointer ">
              <img src={enImg} className="h-6 w-6" alt="" />
              <button>English</button>
            </div>
          </div>
          <div
            onClick={() => {
              es();
              closeMenu();
            }}
            className="w-full hover:bg-primary hover:text-white rounded-lg flex p-1 "
          >
            <div className="flex items-center justify-start gap-4  rounded-box  p-1 cursor-pointer ">
              <img src={esImg} className="h-6 w-6" alt="" />
              <button>Español</button>
            </div>
          </div>
        </ul>
      </details>
    </>
  );
};

export default LanguageController;
