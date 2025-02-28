"use client";

import { Container } from "@/components/Container/Container";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

interface IFaq {
  question: string;
  answer: string;
  id: string;
}

interface IFaqData {
  faqs: IFaq[];
}

const FaqSection = ({data}: {data: IFaqData | any}) => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = data.faqs;

  return (
    <div className="min-h-auto lg:pb-36 bg-gradient-to-b from-[#0E1846] to-[#00008B] to-purple-5000 py-16 px-4">
      <Container>
        <h1 className="text-4xl font-bold text-white text-center mb-12 lg:text-5xl">FAQ</h1>

        <div className="space-y-4">
          {faqs.map((faq: IFaq, index: any) => (
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
