import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactForm = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgres = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="h-screen w-full  bg-gradient-to-b from-[#0a0a0a] to-[#070707] flex flex-col items-center justify-center">
      <motion.form
        action=""
        className="flex flex-col w-[38%]"
        ref={ref}
        style={{ scale: scaleProgres, opacity: opacityProgres }}
      >
        <h1 className="text-[#ebdb04] text-[48px] font-bold text-center ">
          Zapytaj nas
        </h1>
        <input
          type="text"
          className=" mt-8 bg-white text-black text-[24px] px-4 py-3 rounded-xl shadow-md shadow-gray-500"
          placeholder="E-mail"
        />

        <input
          type="text"
          className="bg-white text-black text-[24px] px-4 py-3 rounded-xl shadow-md shadow-gray-500 mt-4"
          placeholder="Numer telefonu"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Zostaw wiadomość..."
          className="bg-white text-black text-[24px] px-4 py-3 rounded-xl shadow-md shadow-gray-500 mt-4"
        ></textarea>
        <button
          type="submit"
          className="text-black bg-[#ebdb04] text-[24px] py-3 px-4 mt-8 w-[50%] mx-auto rounded-xl shadow-md shadow-gray-500"
        >
          Wyślij
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
