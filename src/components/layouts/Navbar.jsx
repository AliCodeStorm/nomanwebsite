import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../Theme/mode-toggle";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 shadow-md bg-white dark:bg-gray-900 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          <span className="text-black dark:text-white">logo</span>
        </NavLink>

        {/* Navigation Menu */}
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavLink 
                  to="/"
                  className={({ isActive }) => cn(
                    "text-sm font-medium hover:text-blue-500 transition-colors",
                    isActive ? "text-blue-600" : "text-black dark:text-white"
                  )}
                >
                  Home
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink 
                  to="/about"
                  className={({ isActive }) => cn(
                    "text-sm font-medium hover:text-blue-500 transition-colors",
                    isActive ? "text-blue-600" : "text-black dark:text-white"
                  )}
                >
                  About
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink 
                  to="/services"
                  className={({ isActive }) => cn(
                    "text-sm font-medium hover:text-blue-500 transition-colors",
                    isActive ? "text-blue-600" : "text-black dark:text-white"
                  )}
                >
                  Services
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink 
                  to="/contact"
                  className={({ isActive }) => cn(
                    "text-sm font-medium hover:text-blue-500 transition-colors",
                    isActive ? "text-blue-600" : "text-black dark:text-white"
                  )}
                >
                  Contact
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle Button */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}