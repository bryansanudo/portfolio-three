import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "@/styles";
import { IoMdClose } from "react-icons/io";

import { IoMdMenu } from "react-icons/io";

import { BsFiletypePdf } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";

import LanguageController from "@/components/LanguageController";

const Navbar = ({ language, setLanguage }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const hdv = {
    es: {
      name: "Descargar HDV",
      link: "/Bryan-Es.pdf",
    },
    en: {
      name: "Download Resume",
      link: "/Bryan-Es.pdf",
    },
  };
  const hdvContent = hdv[language];

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
      className={`${styles.paddingX} w-full flex items-center  py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a download={true} href={hdvContent.link}>
          <button className="flex items-center gap-2 text-secondary hover:text-white">
            <div className=" text-[18px] font-medium cursor-pointer">
              {hdvContent.name}
            </div>
            <GrDocumentPdf className="text-2xl md:flex hidden " />
          </button>
        </a>

        <ul className="list-none hidden sm:flex flex-row items-center justify-center gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.name)}
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}

          <LanguageController language={language} setLanguage={setLanguage} />
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <LanguageController language={language} setLanguage={setLanguage} />

          {toggle ? (
            <div
              onClick={() => setToggle(!toggle)}
              className="text-secondary cursor-pointer"
            >
              <IoMdClose className="text-secondary text-2xl" />
            </div>
          ) : (
            <div
              onClick={() => setToggle(!toggle)}
              className="text-white cursor-pointer"
            >
              <IoMdMenu className="text-secondary text-2xl" />
            </div>
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
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
                    setActive(link.name);
                  }}
                >
                  <a href={`#${link.id}`}>{link.name}</a>
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
