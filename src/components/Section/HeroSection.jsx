import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import {
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

const HeroSection = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/Animation.json',
    });

    return () => anim.destroy();
  }, []);

  return (
    <section id="heroSection" className="min-h-screen flex items-center bg-white dark:bg-black  md:pt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Left */}
          <div className="w-full md:w-1/2 text-center md:text-left order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-black dark:text-white">Muhammad Noman,</span>
            </h1>
            <p className="text-lg mb-4">
              A passionate Digital Marketer with real experience in running Google and Meta (Facebook/Instagram) ads.
            </p>
            <p className="mb-4">
              I help businesses grow through smart, data-driven strategies that deliver actual results. Whether it's lead generation,
              brand promotion, or boosting sales — I make sure your money isn't wasted but invested to grow.
            </p>
            <p className="mb-4">Let's work together to take your business to the next level!</p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/pages/contact.html"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
              >
                Get in Touch
              </a>
              
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="#" className="text-black dark:text-white hover:text-blue-600 transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-black dark:text-white hover:text-pink-600 transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-black dark:text-white hover:text-blue-700 transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Lottie Right */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:mt-0">
            <div ref={lottieContainer} className="w-[400px] h-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;