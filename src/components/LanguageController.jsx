import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";

import enImg from "@/assets/en.svg";
import esImg from "@/assets/es.svg";

const LanguageController = ({ language, setLanguage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false); // Cerrar el menú después de seleccionar un idioma
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-center p-2 text-secondary rounded-lg shadow-card hover:bg-tertiary hover:text-white cursor-pointer"
        onClick={toggleDropdown}
      >
        <IoLanguage className="text-xl" />
        {dropdownOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </div>

      {dropdownOpen && (
        <ul className="absolute top-full right-0 shadow-sm flex flex-col justify-start  rounded-box bg-tertiary p-4 w-40 text-white">
          <li
            onClick={() => handleLanguageSelect("en")}
            className="hover:bg-primary p-1 hover:text-white rounded-lg flex items-center cursor-pointer"
          >
            <img src={enImg} className="h-6 w-6" alt="" />
            <button className="ml-2">English</button>
          </li>
          <li
            onClick={() => handleLanguageSelect("es")}
            className="hover:bg-primary p-1 hover:text-white rounded-lg flex items-center cursor-pointer"
          >
            <img src={esImg} className="h-6 w-6" alt="" />
            <button className="ml-2">Español</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageController;
