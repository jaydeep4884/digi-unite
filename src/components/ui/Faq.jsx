import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import PageContainer from "../layout/PageContainer";
import { Box } from "@mui/material";

const faqs = [
  {
    question: "How easy can I get resources?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "Are the resources free?",
    answer: "The average cat sleeps 12-16 hours per day.",
  },
  {
    question: "Do we get custom requests?",
    answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years.",
  },
  {
    question: "How discreet can it be?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
];

export default function Faq() {
  const [active, setActive] = useState(null);
  const toggle = (i) => setActive(active === i ? null : i);

  return (
    <Box className="my-10">
      <PageContainer>
        <h2 className="text-4xl font-bold text-white mb-8">Have a question?</h2>
        <Box className="border border-gray-800 rounded-xl bg-[#261a1a]">
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="w-full p-4 border-b border-gray-800 text-left"
            >
              <div className="flex items-center gap-2 text-white">
                <motion.span
                  animate={{ rotate: active === i ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronRight className="w-4 h-4 text-gray-400" />
                </motion.span>
                {faq.question}
              </div>
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm mt-3 pl-6"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          ))}
        </Box>
      </PageContainer>
    </Box>
  );
}
