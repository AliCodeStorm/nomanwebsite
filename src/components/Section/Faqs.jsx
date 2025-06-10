import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqData } from "@/data/faqs";

export default function FAQSection() {
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMore = () => {
    setVisibleCount((count) => Math.min(count + 4, faqData.length));
  };
  const allVisible = visibleCount >= faqData.length;

  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title animation */}
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Accordion with item animation */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.slice(0, visibleCount).map(({ question, answer }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index + 1}`}
                className="border border-gray-300 dark:border-gray-700 rounded-lg px-3"
              >
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-b-lg px-4 py-3">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Load More Button */}
        {!allVisible && (
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
