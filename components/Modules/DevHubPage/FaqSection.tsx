"use client";

import { Container } from "@/components/Container/Container";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Whaat services do you provide?",
      answer:
        "At Osmaxin, we're all about creativity and innovation. Our design services include web design, UI/UX design, mobile app design, branding, and eCommerce design. We also offer development services such as software development, CMS, back-end, front-end, and web development. In addition, our marketing services cover everything from SEO and content marketing to pitch deck design and conversion rate optimization.",
    },
    {
      question: "Whaat services do you provide?",
      answer: "At Osmaxin, we're all about creativity and innovation...",
    },
    {
      question: "Whaat services do you provide?",
      answer: "At Osmaxin, we're all about creativity and innovation...",
    },
    {
      question: "Whaat services do you provide?",
      answer: "At Osmaxin, we're all about creativity and innovation...",
    },
  ];

  return (
    <div className="min-h-auto lg:pb-36 bg-gradient-to-b from-[#0E1846] to-[#00008B] to-purple-5000 py-16 px-4">
      <Container>
        <h1 className="text-4xl font-bold text-white text-center mb-12 lg:text-5xl">FAQ</h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                index === openIndex
                  ? "bg-white"
                  : "bg-[#232373] hover:bg-navy-700"
              }`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full px-8 py-6 flex  items-center justify-between"
              >
                <span
                  className={`text-lg lg:text-2xl font-medium ${
                    index === openIndex ? "text-zinc-800" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronUp
                  className={`w-6 h-6 transition-transform duration-300 ${
                    index === openIndex
                      ? "text-blue-600 rotate-0"
                      : "text-white rotate-180"
                  }`}
                />
              </button>

              {index === openIndex && (
                <div className="px-8 pb-6 text-zinc-800 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FaqSection;
