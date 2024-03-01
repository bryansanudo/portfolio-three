import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "@/styles";

import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";

import eb3 from "@/assets/company/eb3.png";
import manager from "@/assets/company/manager.png";
import needweed from "@/assets/company/needweed.png";
import magrey from "@/assets/company/magrey.png";
import vetacademy from "@/assets/company/vetacademy.png";
import { staggerContainer } from "@/utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="h-10 w-10"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ language = "es" }) => {
  const workOne = {
    en: {
      title0: "WHAT I HAVE DONE SO FAR",
      subtitle0: "Work Experience.",
      title1: "Frontend Developer",
      company1: "EB-3 Workforce Solutions",
      date1: "September 2023 - Current",
      point1:
        "Design, Development and maintaining Web Sites using React JS and other related technologies.",
      point2: "Implementation of information architecture.",
      point3: "Implementation of  Responsive Design.",
      point4: "Solving business and UX/UI problems.",
      point5: "Migration Web Sites from React Js to Next Js. ",
      point6: "Integration of third-party applications.",
      point7:
        "Implementation and execute Email Marketing and CRM strategies through ActiveCampaign.",
      point8: "Segmentation and sending of Email Marketing campaigns.",
      point9: "Design of posts and pieces for social networks.",
      point10: "Monitoring of results and preparation of weekly reports.",
    },
    es: {
      title0: "LO QUE HE HECHO HASTA AHORA",
      subtitle0: "Experiencia Laboral.",
      title1: "Desarrollador Frontend",
      company1: "EB-3 Workforce Solutions",
      date1: "Septiembre de 2023 - Actualidad",
      point1:
        "Diseño, desarrollo y mantenimiento de sitios web utilizando React JS y otras tecnologías relacionadas.",
      point2: "Implementación de arquitectura de la información.",
      point3: "Implementación de Diseño Responsivo.",
      point4: "Resolución de problemas comerciales y de UX/UI.",
      point5: "Migración de sitios web de React Js a Next Js.",
      point6: "Integración de aplicaciones de terceros.",
      point7:
        "Implementación y ejecución de estrategias de Email Marketing y CRM a través de ActiveCampaign.",
      point8: "Segmentación y envío de campañas de Email Marketing.",
      point9: "Diseño de publicaciones y piezas para redes sociales.",
      point10: "Monitoreo de resultados y preparación de informes semanales.",
    },
  };
  const workOneContent = workOne[language];

  const workTwo = {
    en: {
      title1: "Freelance Full Stack Developer",
      company1: "Vet Academy",
      date1: "January 2024 - Febraury 2024",
      point1:
        "Design, Development and maintenance of a Web Application using React JS as Frontend and Firebase as Backend service.",
      point2: "Implementation of information architecture.",
      point3: "Implementation of  Responsive Design.",
      point4: "Solving business and UX/UI problems.",
      point5: "Write texts for Web Application. ",
      point6: "Development of functionalities for user enrollment.",
      point7:
        "Development user registration with data validation and security.",
      point8: "Development login system to access protected areas.",
      point9:
        "Developmnet user role management, administrators and normal users.",
      point10:
        "Development Complete administration panel with CRUD operations.",
      point11:
        "Design and development of intuitive and user-friendly interfaces to enhance the user experience at all stages, from registration to enrollment and access to courses content.",
    },
    es: {
      title1: "Desarrollador Full Stack Freelance",
      company1: "Vet Academy",
      date1: "Enero de 2024 - Febrero de 2024",
      point1:
        "Diseño, desarrollo y mantenimiento de una Aplicación Web utilizando React JS como Frontend y Firebase como servicio Backend.",
      point2: "Implementación de arquitectura de la información.",
      point3: "Implementación de Diseño Responsivo.",
      point4: "Resolución de problemas comerciales y de UX/UI.",
      point5: "Escritura de textos para la Aplicación Web.",
      point6: "Desarrollo de funcionalidades para la inscripción de usuarios.",
      point7:
        "Desarrollo de registro de usuario con validación de datos y seguridad.",
      point8:
        "Desarrollo de sistema de inicio de sesión para acceder a áreas protegidas.",
      point9:
        "Desarrollo de gestión de roles de usuario, administradores y usuarios normales.",
      point10:
        "Desarrollo de panel de administración completo con operaciones CRUD.",
      point11:
        "Diseño y desarrollo de interfaces intuitivas y amigables para mejorar la experiencia del usuario en todas las etapas, desde el registro hasta la inscripción y acceso al contenido de los cursos.",
    },
  };
  const workTwoContent = workTwo[language];

  const workThree = {
    en: {
      title1: "Frontend Developer",
      company1: "Manager Asociados S.A.S",
      date1: "March 2021 - September 2023",
      point1:
        "Design, Development and maintaining Web Sites using React JS and other related technologies.",
      point2: "Implementation of information architecture.",
      point3: "Implementation of  Responsive Design.",
      point4: "Solving business and UX/UI problems.",
      point5: "Write texts for Web Application. ",
      point6: "Integration of third-party applications.",
    },
    es: {
      title1: "Desarrollador Frontend ",
      company1: "Manager Asociados S.A.S",
      date1: "Marzo de 2021 - Septiembre de 2023",
      point1:
        "Diseño, desarrollo y mantenimiento de sitios web utilizando React JS y otras tecnologías relacionadas.",
      point2: "Implementación de arquitectura de la información.",
      point3: "Implementación de Diseño Responsivo.",
      point4: "Resolución de problemas comerciales y de UX/UI.",
      point5: "Escritura de textos para la Aplicación Web.",
      point6: "Integración de aplicaciones de terceros.",
    },
  };
  const workThreeContent = workThree[language];

  const workFour = {
    en: {
      title1: "Freelance Frontend Developer",
      company1: "Need Weed",
      date1: "March 2023",
      point1:
        "Design, Development and maintaining Web Site using React JS and other related technologies.",
      point2: "Implementation of information architecture.",
      point3: "Implementation of  Responsive Design.",
      point4: "Solving business and UX/UI problems.",
    },
    es: {
      title1: "Desarrollador Frontend Freelance",
      company1: "Need Weed",
      date1: "Marzo de 2023",
      point1:
        "Diseño, desarrollo y mantenimiento de sitios web utilizando React JS y otras tecnologías relacionadas.",
      point2: "Implementación de arquitectura de la información.",
      point3: "Implementación de Diseño Responsivo.",
      point4: "Resolución de problemas de negocio y de UX/UI.",
    },
  };
  const workFourContent = workFour[language];

  const workFive = {
    en: {
      title1: "Freelance Frontend Developer",
      company1: "Barberia Magrey",
      date1: "February 2021",
      point1:
        "Development an attractive and functional Web Site using HTML and CSS.",
      point2: "Implementation Responsive Design.",
    },
    es: {
      title1: "Desarrollador Frontend Freelance",
      company1: "Barberia Magrey",
      date1: "Febrero de 2021",
      point1:
        "Desarrollo de un sitio web atractivo y funcional utilizando HTML y CSS.",
      point2: "Implementación de Diseño Responsivo.",
    },
  };
  const workFiveContent = workFive[language];

  const experiences = [
    {
      title: workOneContent.title1,
      company_name: workOneContent.company1,
      icon: eb3,
      iconBg: "#E6DEDD",
      date: workOneContent.date1,
      points: [
        workOneContent.point1,
        workOneContent.point2,
        workOneContent.point3,
        workOneContent.point4,
        workOneContent.point5,
        workOneContent.point6,
        workOneContent.point7,
        workOneContent.point8,
        workOneContent.point9,
        workOneContent.point10,
      ],
    },
    {
      title: workTwoContent.title1,
      company_name: workTwoContent.company1,
      icon: vetacademy,
      iconBg: "#E6DEDD",
      date: workTwoContent.date1,
      points: [
        workTwoContent.point1,
        workTwoContent.point2,
        workTwoContent.point3,
        workTwoContent.point4,
        workTwoContent.point5,
        workTwoContent.point6,
        workTwoContent.point7,
        workTwoContent.point8,
        workTwoContent.point9,
        workTwoContent.point10,
        workTwoContent.point11,
      ],
    },
    {
      title: workThreeContent.title1,
      company_name: workThreeContent.company1,
      icon: manager,
      iconBg: "#E6DEDD",
      date: workThreeContent.date1,
      points: [
        workThreeContent.point1,
        workThreeContent.point2,
        workThreeContent.point3,
        workThreeContent.point4,
        workThreeContent.point5,
        workThreeContent.point6,
      ],
    },
    {
      title: workFourContent.title1,
      company_name: workFourContent.company1,
      icon: needweed,
      iconBg: "#E6DEDD",
      date: workFourContent.date1,
      points: [
        workFourContent.point1,
        workFourContent.point2,
        workFourContent.point3,
        workFourContent.point4,
      ],
    },
    {
      title: workFiveContent.title1,
      company_name: workFiveContent.company1,
      icon: magrey,
      iconBg: "#E6DEDD",
      date: workFiveContent.date1,
      points: [workFiveContent.point1, workFiveContent.point2],
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
        <span className="hash-span" id="work">
          &nbsp;
        </span>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>{workOneContent.title0}</p>
          <h2 className={styles.sectionHeadText}>{workOneContent.subtitle0}</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
