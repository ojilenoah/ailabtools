import { useState } from "react";
import { Link } from "wouter";
import { ModeToggle } from "@/components/dark-mode-toggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-primary dark:text-blue-400 cursor-pointer">LabSimAI</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="flex space-x-8" />
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400" 
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinks className="flex flex-col space-y-1" isMobile={true} onClick={() => setIsMenuOpen(false)} />
          <div className="py-2 px-3">
            <MobileThemeToggle onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinksProps {
  className?: string;
  isMobile?: boolean;
  onClick?: () => void;
}

function NavLinks({ className, isMobile = false, onClick }: NavLinksProps) {
  const linkClass = isMobile
    ? "block py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
    : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400";

  return (
    <div className={className}>
      <a href="#features" className={linkClass} onClick={onClick}>Features</a>
      <a href="#platforms" className={linkClass} onClick={onClick}>Platforms</a>
      <a href="#benefits" className={linkClass} onClick={onClick}>Benefits</a>
    </div>
  );
}

function MobileThemeToggle({ onClick }: { onClick?: () => void }) {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (onClick) onClick();
  };

  return (
    <button 
      className="w-full text-left py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
      onClick={toggleTheme}
    >
      <span className="dark:hidden">Dark Mode</span>
      <span className="hidden dark:inline">Light Mode</span>
    </button>
  );
}

import { useTheme } from '@/components/dark-mode-toggle';
