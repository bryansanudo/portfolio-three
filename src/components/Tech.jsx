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
      title: "Motion",
    },
    {
      id: "tec-9",
      imgUrl: illustrator,
      title: "Illustrator",
    },
    {
      id: "tec-10",
      imgUrl: firebase,
      title: "Firebase",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap  justify-center   gap-10">
      {tecs.map(({ id, imgUrl, title }) => (
        <div onMouseOver={() => setActive(id)} className=" w-40 h-40 " key={id}>
          <img src={imgUrl} alt={title} className=" " />
          {active !== id ? (
            ""
          ) : (
            <div className=" flex items-center justify-center p-4  ">
              <h2 className="absolute">{title}</h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
