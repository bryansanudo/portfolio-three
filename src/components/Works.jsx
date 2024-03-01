import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "@/styles";

import magrey from "@/assets/works/mock-magrey.png";
import eliana from "@/assets/works/mock-eliana.png";
import vetacademy from "@/assets/works/mock-vetacademy.png";
import wfs from "@/assets/works/mock-wfs.png";
import visalaw from "@/assets/works/mock-visalaw.png";
import { TbHandClick } from "react-icons/tb";
import react from "@/assets/img/reactjs.svg";
import tailwind from "@/assets/img/tailwind.svg";
import figma from "@/assets/img/figma.svg";
import js from "@/assets/img/js.svg";
import css from "@/assets/img/css.svg";
import html from "@/assets/img/html.svg";
import gitHub from "@/assets/img/gitHub.svg";
import framer from "@/assets/img/motion.svg";
import illustrator from "@/assets/img/illustrator.svg";
import firebase from "@/assets/img/firebase.svg";

import { fadeIn, textVariant } from "@/utils/motion";
import { staggerContainer } from "@/utils/motion";

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
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <div key={tag.name}>
              <img
                src={tag.img}
                className={`w-8 h-8 shadow-sm rounded-full ${tag.shadow}  `}
                alt=""
              />
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({ language }) => {
  const workProjects = {
    en: {
      title0: "MY WORK",
      title1: "Projects.",
      subtitle1:
        "Following projects showcases my skills and experience through real-world examples of my work. Each projects is briefly described with links to live demos in it. It reflects my ability to solve complex problems, work with differente technologies, and manage projects effectively.",
      project1: "EB-3 Workforce Solutions",
      description1:
        "Development of a Website using React JS and Tailwind CSS. The website's design is centered around strategically distributing information to impact different audiences, employees, and employers. Specific sections and visual approaches are used for each type of audience.",
      project2: "EB Visa Law",
      description2:
        "Development of a Website for the EB-3 Workforce Solutions law firm, using React JS and Tailwind CSS. The website is designed to showcase the various legal services and consultations offered by the firm, as well as provide relevant information on the types of visas available for migrating to the United States.",
      project3: "Vet Academy",
      description3:
        "Development of a Full Stack application using React JS and Tailwind CSS for the Frontend, and Firebase as the backend service. The application has two main components: a website displaying the services and courses offered by Vet Academy, and a virtual classroom providing access to all course content for enrolled users.",
      project4: "Need Weed",
      description4:
        "Development of a Website using React JS and Tailwind CSS for a vaping company. The main goal was to convert all the content from an Instagram account into a Website.",
      project5: "Barberia Magrey",
      description5:
        "Development a Landing Page using HTML, CSS, and very little JavaScript. The page aims to present the services and benefits of a premium barbershop in an attractive and persuasive manner.",
    },
    es: {
      title0: "MI TRABAJO",
      title1: "Proyectos.",
      subtitle1:
        "Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos del mundo real de mi trabajo. Cada proyecto se describe brevemente con enlaces a demos en vivo. Refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.",

      project1: "EB-3 Workforce Solutions",
      description1:
        "Desarrollo de una Página Web utilizando React JS y Tailwind CSS. El diseño del sitio web se centra en distribuir la información de manera estratégica para inpactar audiencias diferentes, empleados y empleadores. Se utilizan secciones específicas y enfoques visuales para cada tipo de audiencia.",
      project2: "EB Visa Law",
      description2:
        "Desarrollo de una Página Web para la firma de abogados de EB-3 Workforce Solutions, utilizando React JS y Tailwind CSS. El sitio web está diseñado para mostrar los diferentes servicios legales y asesorías ofrecidas por la firma, así como proporcionar información relevante sobre los tipos de visados que existen para migrar a Estados Unidos.",
      project3: "Vet Academy",
      description3:
        "Desarrollo de una aplicación Full Stack utilizando React JS y Tailwind CSS para el frontend, y Firebase como servicio backend. La aplicación tiene dos componentes principales: una página web que muestra los servicios y cursos ofrecidos por Vet Academy, y un aula virtual que proporciona el acceso a todo contenido de los cursos para los  usuarios matriculados.",

      project4: "Need Weed",
      description4:
        "Desarrollo de una Página Web utilizando React JS y Tailwind CSS para una empresa de vapeadores. El objetivo principal fue convertir todo el contenido de una cuenta de Instagram en una Página Web.",
      project5: "Barberia Magrey",
      description5:
        "Desarrollo de una Landing Page utilizando HTML, CSS y muy poco JavaScript. La página tiene como objetivo presentar los servicios y beneficios de una barberia premium de manera atractiva y persuasiva.",
    },
  };
  const workProjectsContent = workProjects[language];

  const projects = [
    {
      name: workProjectsContent.project1,
      description: workProjectsContent.description1,
      tags: [
        {
          name: "react",
          img: react,
          shadow: "shadow-[#07B6D5]",
        },
        {
          name: "javascript",
          img: js,
          shadow: "shadow-[#FECA2A]",
        },
        {
          name: "tailwind",
          img: tailwind,
          shadow: "shadow-[#07B6D5]",
        },
        {
          name: "html",
          img: html,
          shadow: "shadow-[#F16529]",
        },
      ],
      image: wfs,
      source_code_link: "https://github.com/",
    },
    {
      name: workProjectsContent.project2,
      description: workProjectsContent.description2,
      tags: [
        {
          name: "react",
          img: react,
          shadow: "shadow-[#07B6D5]",
        },
        {
          name: "javascript",
          img: js,
          shadow: "shadow-[#FECA2A]",
        },
        {
          name: "tailwind",
          img: tailwind,
          shadow: "shadow-[#07B6D5]",
        },
        {
          name: "html",
          img: html,
          shadow: "shadow-[#F16529]",
        },
      ],
      image: visalaw,
      source_code_link: "https://github.com/",
    },
    {
      name: workProjectsContent.project3,
      description: workProjectsContent.description3,
      tags: [
        {
          name: "react",
          img: react,
          shadow: "shadow-[#07B6D5]",
        },
        {
          name: "firebase",
          img: firebase,
          shadow: "shadow-[#FECA2A]",
        },
        {
          name: "tailwind",
          img: tailwind,
          shadow: "shadow-[#07B6D5]",
        },
        {
          name: "javascript",
          img: js,
          shadow: "shadow-[#FECA2A]",
        },
        {
          name: "html",
          img: html,
          shadow: "shadow-[#F16529]",
        },
      ],
      image: vetacademy,
      source_code_link: "https://github.com/",
    },
    {
      name: workProjectsContent.project4,
      description: workProjectsContent.description4,
      tags: [
        {
          name: "react",
          img: react,
          shadow: "shadow-[#07B6D5]",
        },

        {
          name: "javascript",
          img: js,
          shadow: "shadow-[#FECA2A]",
        },
        {
          name: "tailwind",
          img: tailwind,
          shadow: "shadow-[#07B6D5]",
        },
        {
          name: "html",
          img: html,
          shadow: "shadow-[#F16529]",
        },
      ],
      image: eliana,
      source_code_link: "https://github.com/",
    },
    {
      name: workProjectsContent.project5,
      description: workProjectsContent.description5,
      tags: [
        {
          name: "html",
          img: html,
          shadow: "shadow-[#F16529]",
        },
        {
          name: "css",
          img: css,
          shadow: "shadow-[#2965F1]",
        },
        {
          name: "javascript",
          img: js,
          shadow: "shadow-[#FECA2A]",
        },
      ],
      image: magrey,
      source_code_link: "https://github.com/",
    },
  ];
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id="worssk">
          &nbsp;
        </span>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>
            {workProjectsContent.title0}
          </p>
          <h2 className={styles.sectionHeadText}>
            {workProjectsContent.title1}
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            {workProjectsContent.subtitle1}
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7 ">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Works;
