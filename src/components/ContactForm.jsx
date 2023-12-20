import React from "react";

const ContactForm = () => {
  return (
    <div className="h-screen w-full  bg-gradient-to-b from-[#0a0a0a] to-[#070707] flex flex-col items-center justify-center">
      <h1 className="text-[#ebdb04] text-[48px] font-bold">Zapytaj nas</h1>
      <form action="" className="mt-8 flex flex-col w-[35%]">
        <input
          type="text"
          className="bg-white text-black text-[24px] px-4 py-3 rounded-xl shadow-md shadow-gray-500"
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
      </form>
    </div>
  );
};

export default ContactForm;
