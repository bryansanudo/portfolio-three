import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "@/styles";

import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import meta from "@/assets/company/meta.png";
import eb3 from "@/assets/company/eb3.png";
import manager from "@/assets/company/manager.png";
import needweed from "@/assets/company/needweed.png";
import magrey from "@/assets/company/magrey.png";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="p-1 object-cover"
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

const Experience = () => {
  const experiences = [
    {
      title: "React JS Developer",
      company_name: "EB-3 Workforce Solutions",
      icon: eb3,
      iconBg: "#E6DEDD",
      date: "March 2020 - April 2021",
      points: [
        "Design, Developing and maintaining web applications using React JS and other related technologies",
        "Implementing responsive design",
        "third-party application integrations",
        "Collaborating with cross-functional members of team to create high-quality products",
        "Implement and execute email marketing strategies through ActiveCampaign",
        "Design of pieces for social media",
      ],
    },
    {
      title: "React JS Developer",
      company_name: "Manager asociados S.A.S",
      icon: manager,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Design, Developing and maintaining web applications using React JS and other related technologies",
        "Implementing responsive design",
        "third-party application integrations",
      ],
    },
    {
      title: "React JS Developer",
      company_name: "Need Weed",
      icon: needweed,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Design, Developing and maintaining web applications using React JS and other related technologies",
        "Implementing responsive design",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Barberia Magrey",
      icon: magrey,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Develop an attractive and functional user interface using HTML and CSS",
        "Implement responsive  ",
        "Create a contact form to facilitate user interaction and receive comments",
        "Design interactive and attractive sections using CSS to improve site aesthetics",
      ],
    },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubtext}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
