import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "@/styles";

import { logo, menu, close } from "@/assets";

import LanguageController from "@/components/LanguageController";

const Navbar = ({ language, setLanguage }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const navbar = {
    en: {
      about: "About",
      work: "Work",
      contact: "Contact",
      developer: "Frontend Developer",
    },
    es: {
      about: "Acerca",
      work: "Trabajos",
      contact: "Contacto",
      developer: "Desarrollador Frontend",
    },
  };
  const navbarContent = navbar[language];
  const navLinks = [
    {
      id: "about",
      name: navbarContent.about,
    },
    {
      id: "work",
      name: navbarContent.work,
    },
    {
      id: "contact",
      name: navbarContent.contact,
    },
  ];
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Bryan &nbsp;
            <span className="sm:block hidden">
              {" "}
              | &nbsp;{navbarContent.developer}
            </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.name)}
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
          <div className="w-[1px] h-6 bg-secondary " />
          <LanguageController language={language} setLanguage={setLanguage} />
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
