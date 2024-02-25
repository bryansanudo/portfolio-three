import { motion } from "framer-motion";
import { styles } from "@/styles";

import { fadeIn, textVariant } from "@/utils/motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "@/hoc";
import web from "@/assets/web.png";
import mail from "@/assets/mail.png";
import responsivo from "@/assets/responsivo.png";

const ServiceCard = ({ index, title, icon }) => {
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
};

const About = () => {
  const services = [
    {
      title: "Desarrollo Web",
      icon: web,
    },
    {
      title: "Diseño Web",
      icon: responsivo,
    },

    {
      title: "Email Marketing",
      icon: mail,
    },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled Frontend developer with experience in React JS and
        Tailwind CSS. I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life !
      </motion.p>
      <div className="mt-20 flex flex-wrap items-center jc gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
