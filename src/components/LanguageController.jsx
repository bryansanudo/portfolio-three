import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import colImg from "@/assets/col.png";
import enImg from "@/assets/en.png";
import { styles } from "@/styles";

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

  let languageText;
  let languageIcon;

  if (language === "en") {
    languageText = "Language";
    languageIcon = enImg;
  } else if (language === "es") {
    languageText = "Lenguaje";
    languageIcon = colImg;
  }
  return (
    <>
      <details className={`dropdown text-white   ${styles.subtitle}`}>
        <summary
          onClick={handleDropdown}
          className={` flex  items-center justify-center gap-1 cursor-pointer `}
        >
          <div className="text-[18px] text-secondary font-medium cursor-pointer flex items-center justify-center gap-1">
            {languageText}
            <img src={languageIcon} className="w-6 h-6" alt="ico" />
            {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          </div>
        </summary>

        <ul
          className={`shadow-sm 
            flex flex-col bg-white items-start dropdown-content    rounded-box w-28 mt-4 `}
        >
          <div
            onClick={() => {
              en();
              closeMenu();
            }}
            className="w-full hover:bg-primary hover:text-white rounded-lg flex items-center justify-center"
          >
            <div className="flex items-center justify-start gap-4  rounded-box  p-1 cursor-pointer ">
              <img src={enImg} className="h-6 w-6" alt="" />
              <button>USD</button>
            </div>
          </div>
          <div
            onClick={() => {
              es();
              closeMenu();
            }}
            className="w-full hover:bg-primary hover:text-white rounded-lg flex items-center justify-center"
          >
            <div className="flex items-center justify-start gap-4  rounded-box  p-1 cursor-pointer ">
              <img src={colImg} className="h-6 w-6" alt="" />
              <button>COP</button>
            </div>
          </div>
        </ul>
      </details>
    </>
  );
};

export default LanguageController;
