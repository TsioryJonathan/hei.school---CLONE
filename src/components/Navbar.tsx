import navLinks from "../constants/navLinks";
import { assets } from "../../public/Images/assets";

import CustomButton from "./CustomButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-screen h-25 bg-primary text-white">
      <div className="mx-auto h-full flex items-center justify-between px-5 md:px-30 py-3">
        <img src={assets.logo} alt="Logo HEI" className="w-24 h-18" />
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 items-center justify-center">
          <ul className="flex gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`font-[500] text-xl hover:text-secondary transition-colors ${
                    label == "Accueil" ? "text-secondary" : ""
                  }`}
                >
                  {label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
          <CustomButton className="w-30 py-5 ">INTRANET</CustomButton>
        </nav>

        {/* Mobile nav */}
        <nav
          className={`fixed top-0 inset-y-0 left-0 w-1/2 bg-primary transform transition-transform 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} z-50`}
        >
          <ul className="flex flex-col items-start justify-center gap-10 text-xl mt-25 px-10">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="inline-block mr-4">
                <a
                  href={href}
                  className={`hover:text-secondary transition-colors duration-300 ease-in-out text-[16px] font-[600] ${
                    label == "Accueil" ? "text-secondary" : ""
                  }`}
                >
                  {label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer "
            >
              <X size={24} />
            </button>
          </div>
        </nav>

        {/* Hamburger menu */}
        <div className="flex items-center justify-self-center gap-10 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <CustomButton>INTRANET</CustomButton>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black opacity-50 z-40"
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
