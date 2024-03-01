import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "@/styles";
import { EarthCanvas } from "@/components/canvas";

import { slideIn } from "@/utils/motion";
import { staggerContainer } from "@/utils/motion";

const Contact = ({ language }) => {
  const contactForm = {
    en: {
      title1: "GET IN TOUCH",
      title2: "Contact.",
      name1: "Your Name",
      name2: "What's your name?",
      email1: "Your Email",
      email2: "What's your email?",
      message1: "Your Message",
      message2: "What do you want to say?",
      send: "Send",
    },
    es: {
      title1: "PONTE EN CONTACTO",
      title2: "Contacto.",
      name1: "Tu Nombre",
      name2: "¿Cuál es tu nombre?",
      email1: "Tu Correo Electrónico",
      email2: "¿Cuál es tu correo electrónico?",
      message1: "Tu Mensaje",
      message2: "¿Qué deseas decir?",
      send: "Enviar",
    },
  };
  const contactFormContent = contactForm[language];

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id="contact">
        &nbsp;
      </span>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={`${styles.sectionSubText}`}>
            {contactFormContent.title1}
          </p>
          <h3 className={`${styles.sectionHeadText}`}>
            {contactFormContent.title2}
          </h3>

          <form
            action="https://getform.io/f/pbnroqeb"
            method="POST"
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {contactFormContent.name1}
              </span>
              <input
                type="text"
                name="name"
                placeholder={contactFormContent.name2}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounde-lg outline-none border-nonae font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {contactFormContent.email1}
              </span>
              <input
                type="email"
                name="email"
                placeholder={contactFormContent.email2}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounde-lg outline-none border-nonae font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {contactFormContent.message1}
              </span>
              <textarea
                rows="7"
                name="message"
                placeholder={contactFormContent.message2}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounde-lg outline-none border-nonae font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none  text-white font-bold shadow-md shadow-primary rounded-xl w-full hover:scale-110 duration-700"
            >
              {contactFormContent.send}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
