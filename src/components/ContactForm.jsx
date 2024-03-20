import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgres = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+?\d{9,15}$/;

  const sendEmail = (e) => {
    e.preventDefault();

    if (emailRegex.test(email) && phoneRegex.test(phoneNumber)) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          ref.current,
          {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setEmail("");
            setPhoneNumber("");
            setMessage("");
            setError("");
          },
          (error) => {
            console.log("An error happened", error.text);
          }
        );
    } else {
      setError("Nieprawidłowy email lub numer telefonu!");
    }
  };

  return (
    <div className="h-screen w-full  bg-gradient-to-b from-[#0a0a0a] to-[#070707] flex flex-col items-center justify-center md:pb-[150px]">
      <motion.form
        onSubmit={sendEmail}
        className="flex flex-col md:w-[38%] w-[90%] mx-auto"
        ref={ref}
        style={{ scale: scaleProgres, opacity: opacityProgres }}
      >
        <h1 className="text-[#ebdb04] text-[48px] font-bold text-center ">
          Zapytaj nas
        </h1>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" mt-8 bg-gray-800 text-gray-100 text-[24px] px-4 py-3 rounded-2xl shadow-sm shadow-gray-700 focus:outline-none"
          placeholder="E-mail"
        />

        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-gray-800 text-gray-100 text-[24px] px-4 py-3 rounded-2xl shadow-sm shadow-gray-700 mt-4 focus:outline-none"
          placeholder="Numer telefonu"
        />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="5"
          placeholder="Zostaw wiadomość..."
          className="bg-gray-800 text-gray-100 text-[24px] px-4 py-3 rounded-2xl shadow-sm shadow-gray-700 mt-4 focus:outline-none"
        ></textarea>
        {error && (
          <p className="text-[20px] text-gray-300 text-center mt-4 font-bold">
            {error}
          </p>
        )}
        <button className="mt-8 relative hidden md:inline-flex items-center justify-center w-[300px] h-[60px] text-[20px] bg-[#ebdb04] opacity-85 p-4 px-6 py-3 overflow-hidden font-semibold  transition duration-300 ease-out rounded-full  border-gray-300 group mx-auto">
          <span class="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-black opacity-100 font-semibold transition-all duration-300 transform group-hover:translate-x-full ease">
            Wyślij
          </span>
        </button>
        <button className="md:hidden mx-auto w-[225px] text-[20px] mt-10 bg-[#ebdb04] py-3 px-7 rounded-full text-black font-semibold">
          Wyślij
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
