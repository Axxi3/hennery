'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How is HenryBrandLabs different from other content agencies?",
    answer: "At HenryBrandLabs, we don't just \"do social media\" — we specialize in personal branding, Instagram marketing, LinkedIn marketing, and building organic ecosystems that turn followers into loyal fans. It's not about posting; it's about positioning you as a true authority."
  },
  {
    question: "Will you help with both Instagram and LinkedIn marketing?",
    answer: "Yes — we manage content creation, content management, and posting across Instagram and LinkedIn. Each platform has its own strategy, and we tailor your personal brand messaging to shine on both, maximizing your organic reach."
  },
  {
    question: "How much time will I need to invest each week?",
    answer: "Just 1–2 hours a week! You'll mainly be sharing your fresh insights, quick stories, or recording from easy-to-use scripts we provide. We handle the heavy lifting — strategy, content design, post-production, and content management — so you can focus on growing your business."
  },
  {
    question: "What if I don't have a big audience yet? Can I still start?",
    answer: "Yes, and you should. Personal branding and organic content marketing are long-term games. Starting early helps you build trust, visibility, and authority before your audience explodes."
  },
  {
    question: "Can you help me create and sell my digital product too?",
    answer: "Yes! If you're ready to turn your expertise into info-products, we guide you through the entire process — ideation, creation, launch strategy, and backend automation to predictably convert your followers into paying customers."
  },
  {
    question: "When can I start seeing results?",
    answer: "Building a strong personal brand is a strategic, compounding process. Clients often start seeing stronger engagement and inbound opportunities within the first 60–90 days of consistent content marketing across Instagram and LinkedIn."
  }
];

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
};

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  toggleOpen,
  index
}) => {
  return (
    <motion.div
      className="border-b border-gray-700 py-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left group"
      >
        <h3 className="text-lg md:text-xl font-medium text-gray-100 group-hover:text-orange-500 transition-colors duration-300">
          {question}
        </h3>
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full ml-4 flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'bg-orange-500 rotate-180' : 'bg-gray-800'
          }`}
        >
          {isOpen ? (
            <Minus size={18} className="text-white" />
          ) : (
            <Plus size={18} className="text-orange-300" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-300 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default

  return (
    <div id='faq' className="w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <motion.div
  className="text-center mb-16"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-[26px] md:text-[36px] lg:text-[42px] font-bold text-white mb-1">
    Frequently Asked Questions
  </h2>
  <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-300">
    Everything you need to know about our services
  </p>
</motion.div>

        <motion.div
          className="space-y-0 rounded-2xl bg-opacity-50 backdrop-blur-sm p-6 md:p-10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggleOpen={() =>
                setOpenIndex(index === openIndex ? -1 : index)
              }
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
