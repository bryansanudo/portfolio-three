import { SectionWrapper } from "@/hoc";
import { useState } from "react";
import react from "@/assets/img/reactjs.svg";
import tailwind from "@/assets/img/tailwind.svg";
import figma from "@/assets/img/figma.svg";
import js from "@/assets/img/js.svg";
import css from "@/assets/img/css.svg";
import html from "@/assets/img/html.svg";
import gitHub from "@/assets/img/gitHub.svg";
import motion from "@/assets/img/motion.svg";
import illustrator from "@/assets/img/illustrator.svg";
import firebase from "@/assets/img/firebase.svg";
import ac from "@/assets/ac.svg";
import nextjs from "@/assets/nextjs.svg";
import premiere from "@/assets/premiere.svg";

import Tilt from "react-parallax-tilt";

const Tech = () => {
  const [active, setActive] = useState("tec-2");
  const tecs = [
    {
      id: "tec-1",
      imgUrl: react,
      title: "React Js",
    },
    {
      id: "tec-2",
      imgUrl: tailwind,
      title: "Tailwind ",
    },
    {
      id: "tec-3",
      imgUrl: figma,
      title: "Figma",
    },
    {
      id: "tec-4",
      imgUrl: js,
      title: "JavaScript",
    },
    {
      id: "tec-5",
      imgUrl: css,
      title: "CSS",
    },
    {
      id: "tec-6",
      imgUrl: html,
      title: "HTML",
    },
    {
      id: "tec-7",
      imgUrl: gitHub,
      title: "GitHub",
    },
    {
      id: "tec-8",
      imgUrl: motion,
      title: "Framer Motion",
    },
    {
      id: "tec-9",
      imgUrl: illustrator,
      title: "Illustrator",
    },
    {
      id: "tec-11",
      imgUrl: nextjs,
      title: "Next JS",
    },
    {
      id: "tec-10",
      imgUrl: firebase,
      title: "Firebase",
    },
    {
      id: "tec-12",
      imgUrl: ac,
      title: "Active Campaign",
    },
    {
      id: "tec-13",
      imgUrl: premiere,
      title: "Premiere",
    },
  ];
  return (
    <div className="grid grid-cols-5 ">
      {tecs.map(({ id, imgUrl, title }) => (
        <div
          onMouseOver={() => setActive(id)}
          className="w-40 h-40 mb-6 "
          key={id}
        >
          <Tilt
            className={`${
              active !== id ? "" : "shadow-card bg-tertiary rounded-[20px]"
            }`}
          >
            <img src={imgUrl} alt={title} className=" " />
            {active !== id ? (
              ""
            ) : (
              <div className=" flex items-center justify-center p-4  ">
                <h2 className="absolute text-white text-[20px] font-bold text-center mb-4">
                  {title}
                </h2>
              </div>
            )}
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
