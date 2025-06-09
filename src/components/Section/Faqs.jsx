import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide SEO, social media marketing, Google Ads, and content creation services.",
  },
  {
    question: "How much do your services cost?",
    answer: "Pricing depends on your project. Contact us for a free quote.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel or pause your subscription at any time without penalty.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Yes, we tailor packages to meet your specific needs and goals.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on the service, but typically you can expect noticeable improvements within 3-6 months.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer ongoing support and consultation for all our services.",
  },
  {
    question: "Are your services suitable for small businesses?",
    answer: "Absolutely! We customize strategies for businesses of all sizes.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across various industries including retail, tech, healthcare, and more.",
  },
  {
    question: "How do I get started?",
    answer: "Contact us via our website or call us to discuss your project needs.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your package anytime with no hassle.",
  },
];

export default function FAQSection() {
  // Control how many items to show initially
  const [visibleCount, setVisibleCount] = useState(4);

  // Load more handler
  const loadMore = () => {
    setVisibleCount((count) => Math.min(count + 4, faqData.length));
  };

  // Whether all items are shown or not
  const allVisible = visibleCount >= faqData.length;

  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.slice(0, visibleCount).map(({ question, answer }, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-lg"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-b-lg px-4 py-3">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Load More Button */}
        {!allVisible && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
