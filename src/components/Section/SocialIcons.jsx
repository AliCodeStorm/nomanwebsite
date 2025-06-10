import {
  Facebook,
  Dribbble,
  Linkedin,
  Circle,
} from "lucide-react";
import { FaPinterestP, FaBehance } from "react-icons/fa"; // Install with: npm i react-icons

const SocialIcons = () => {
  return (
    <section className="w-full bg-white dark:bg-zinc-900 py-10 px-4 md:px-8 flex justify-center items-center">
      <div className="text-center">
        {/* Available for Freelance */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Circle className="w-4 h-4 text-primary" />
          <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
            Available for freelance
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-4 items-center mb-6">
          <a href="#" aria-label="Facebook" className="text-blue-600 hover:scale-110 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Dribbble" className="text-pink-500 hover:scale-110 transition">
            <Dribbble className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Pinterest" className="text-red-600 hover:scale-110 transition">
            <FaPinterestP className="w-6 h-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-blue-500 hover:scale-110 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Behance" className="text-indigo-500 hover:scale-110 transition">
            <FaBehance className="w-6 h-6" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-zinc-700 w-3/4 mx-auto" />
      </div>
    </section>
  );
};

export default SocialIcons;
