import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "@/styles";
import { github } from "@/assets";
import { SectionWrapper } from "@/hoc";

import magrey from "@/assets/works/mock-magrey.png";
import eliana from "@/assets/works/mock-eliana.png";
import wfs from "@/assets/works/mock-wfs.png";
import visalaw from "@/assets/works/mock-visalaw.png";
import { TbHandClick } from "react-icons/tb";

import { fadeIn, textVariant } from "@/utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      className="cursor-pointer"
      onClick={() => window.open(source_code_link, "_blank")}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />
          {/*   <div className="absolute top-48 inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const projects = [
    {
      name: "Barberia Magrey",
      description:
        "This project is written entirely in HTML, CSS and some JavaScriptThis, basically is a landing page that describes services and benefits of a Premium Barber Shop. ",
      tags: [
        {
          name: "html",
          color: "color-html",
        },
        {
          name: "css",
          color: "color-css",
        },
      ],
      image: magrey,
      source_code_link: "https://github.com/",
    },
    {
      name: "Need Weed",
      description:
        "This project is a prototype of a full stack application, is a shopping cart with custom design and website product management . ",
      tags: [
        {
          name: "react js",
          color: "color-react",
        },
        {
          name: "firebase",
          color: "color-javascript",
        },
        {
          name: "tailwind css",
          color: "color-tailwind",
        },
      ],
      image: eliana,
      source_code_link: "https://github.com/",
    },
    {
      name: "EB-3 Workforce Solutions",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react js",
          color: "color-react",
        },
        {
          name: "framer motion",
          color: "color-motion",
        },
        {
          name: "tailwind css",
          color: "color-tailwind",
        },
      ],
      image: wfs,
      source_code_link: "https://github.com/",
    },
    {
      name: "EB Visa Law",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react js",
          color: "color-react",
        },
        {
          name: "tailwind",
          color: "color-tailwind",
        },
      ],
      image: visalaw,
      source_code_link: "https://github.com/",
    },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubtext}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each projects is briefly described
          with links to live demos in it. It reflects my ability to solve
          complex problems, work with differente technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
