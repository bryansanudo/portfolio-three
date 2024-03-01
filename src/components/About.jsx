import { motion } from "framer-motion";
import { styles } from "@/styles";

import { fadeIn, textVariant } from "@/utils/motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "@/hoc";

import { staggerContainer } from "@/utils/motion";
import { FaCode } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
/* const ServiceCard = ({ index, title, icon, language }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-ping-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-40 h-40 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}; */

const About = ({ language }) => {
  const skills = {
    en: {
      develop: "Web Develelopment",
      design: "Web Design",
      email: "Email Marketing",
    },
    es: {
      develop: "Desarrollo Web",
      design: "Diseño Web",
      email: "Email Marketing",
    },
  };
  const skillsContent = skills[language];

  const services = [
    {
      id: 1,
      title: skillsContent.develop,
      icon: <FaCode />,
    },
    {
      id: 2,
      title: skillsContent.design,
      icon: <SiAdobe />,
    },

    {
      id: 3,
      title: skillsContent.email,
      icon: <MdOutlineMail />,
    },
  ];

  const introduction = {
    en: {
      title1: "Introduction",
      title2: "Overview.",
      p: "I'm a Frontend developer with experience in React JS and Tailwind CSS! I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
    },
    es: {
      title1: "Introducción",
      title2: "Visión general.",
      p: "Soy un desarrollador Frontend con experiencia en React JS y Tailwind CSS! Aprendo rápido y colaboro estrechamente con los clientes para crear soluciones eficientes, escalables y fáciles de usar que resuelven problemas del mundo real. ¡Trabajemos juntos para dar vida a tus ideas!",
    },
  };
  const introductionContent = introduction[language];
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id="about">
          &nbsp;
        </span>
        <motion.div variants={textVariant(0.5)}>
          <p className={`${styles.sectionSubText}`}>
            {introductionContent.title1}
          </p>
          <h2 className={styles.sectionHeadText}>
            {introductionContent.title2}
          </h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {introductionContent.p}
          </p>
        </motion.div>
        {/*  <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled Frontend developer with experience in React JS and
          Tailwind CSS. I'm a quick learner and collaborate closely with clients
          to create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life !
        </motion.p> */}
        <div className="mt-20 flex flex-wrap items-center jc gap-10 ">
          {services.map(({ icon, title, id }) => (
            <Tilt key={id} className="xs:w-[250px] w-full">
              <motion.div
                variants={fadeIn("right", "spring", 0.5 * id, 0.75)}
                className="w-full  p-[1px] rounded-[20px] shadow-card "
              >
                <div
                  options={{ max: 45, scale: 1, speed: 450 }}
                  className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                  <span className="text-white text-6xl">{icon}</span>

                  {/* <img
                    src={icon}
                    alt={title}
                    className="w-40 h-40 object-contain"
                  /> */}
                  <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                  </h3>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About;
