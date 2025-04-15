import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-purple-600">
              Harmonic
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#home"
                className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#our-work"
                className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Our Work
              </a>
              <a
                href="#programs"
                className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Programs
              </a>
              <a
                href="#contact"
                className="hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <Button
                variant="default"
                className="bg-purple-600 hover:bg-purple-700"
              >
                Donate
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#our-work"
                className="hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Our Work
              </a>
              <a
                href="#programs"
                className="hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Programs
              </a>
              <a
                href="#contact"
                className="hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <Button
                variant="default"
                className="w-full bg-purple-600 hover:bg-purple-700 mt-4"
              >
                Donate
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
