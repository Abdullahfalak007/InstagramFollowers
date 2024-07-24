import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";

const Faqs = [
  {
    question: "Does Instagram ban brands for buying followers?",
    answer:
      "Obviously, this is not true. Instagram cannot remove followers or ban you because you have followers.",
  },
  {
    question: "How long will it take for me to receive my followers?",
    answer:
      "That depends on stock conditions and how many followers you wish to get. While typing in the number you want to receive, you will see the estimated time beside it.",
  },
  {
    question: "Is it safe to buy Instagram followers?",
    answer:
      "Yes, as we have stated in the article, we provide a secure environment. We never ask for vital information, and our system is protected by an SSL certificate. ",
  },
  {
    question: "Can I get banned for buying followers?",
    answer:
      "Absolutely not. It's not different than asking for a friend to follow your account. No one of our customers came to us with a complaint regarding their account's status on Instagram.",
  },
];

const CollapseItem = ({ question, answer, index, isOpen, toggleCollapse }) => (
  <div className="relative mb-3 shadow-md rounded-full p-6 text-center transform transition-transform duration-300 hover:scale-105">
    <h6 className="mb-0">
      <button
        className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
        onClick={() => toggleCollapse(index)}
      >
        <span>{question}</span>
        <FaChevronDown
          className={`absolute right-0 pt-1 text-base transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </h6>
    <div
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
      }`}
    >
      <div className="p-4 text-lg leading-normal text-blue-gray-500/80">
        {answer}
      </div>
    </div>
  </div>
);

const ServicesWeOffer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto min-h-screen py-16">
      <h2 className="text-center text-6xl font-bold mb-12">
        Frequently Asked Questions
      </h2>
      <h3 className="flex text-center p-6">
        Find answers to any questions you may have in mind about our products
        and tools. If you can't find your answer at FAQ you can reach us via our
        live support center without a fee.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div>
          {Faqs.filter((_, index) => index % 2 === 0).map((service, index) => (
            <CollapseItem
              key={index}
              question={service.question}
              answer={service.answer}
              index={index * 2}
              isOpen={openIndex === index * 2}
              toggleCollapse={toggleCollapse}
            />
          ))}
        </div>
        <div>
          {Faqs.filter((_, index) => index % 2 !== 0).map((service, index) => (
            <CollapseItem
              key={index}
              question={service.question}
              answer={service.answer}
              index={index * 2 + 1}
              isOpen={openIndex === index * 2 + 1}
              toggleCollapse={toggleCollapse}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWeOffer;
