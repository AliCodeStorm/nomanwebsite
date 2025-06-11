import React from 'react';
import { services } from '@/data/services';
import { useNavigate } from 'react-router-dom';
import Faqs from '@/components/Section/Faqs';
import { SquareArrowOutUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ShineBorder } from '@/components/magicui/shine-border';
import { TextAnimate } from '@/components/magicui/text-animate';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  }),
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen px-6 py-24 bg-white text-black dark:bg-black dark:text-white">
        {/* Heading with fade-up animation */}
        <h1 className="text-4xl font-bold text-center mb-8">
          <TextAnimate
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                rotate: 45,
                scale: 0.5,
              },
              show: (i) => ({
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                transition: {
                  delay: i * 0.1,
                  duration: 0.4,
                  y: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                    mass: 0.8,
                  },
                  rotate: {
                    type: "spring",
                    damping: 8,
                    stiffness: 150,
                  },
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 300,
                  },
                },
              }),
              exit: (i) => ({
                opacity: 0,
                y: 30,
                rotate: 45,
                scale: 0.5,
                transition: {
                  delay: i * 0.1,
                  duration: 0.4,
                },
              }),
            }}
            by="character"
          >
            Services I Offer
          </TextAnimate>
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                onClick={() => navigate(`/services/${service.slug}`)}
                className="relative overflow-hidden cursor-pointer bg-gray-50 dark:bg-gray-900 p-6 rounded-xl hover:-translate-y-2 transition-all hover:shadow-md"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
              >
                <SquareArrowOutUpRight className="absolute top-3 right-3 w-5 h-5 text-gray-500 dark:text-gray-50" />
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300">{service.shortDesc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Section below service cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Faqs />
        </motion.div>
      </div>
    </>
  );
};

export default Services;
