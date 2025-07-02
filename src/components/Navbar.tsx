import navLinks from "../constants/navLinks";
import { assets } from "../../public/Images/assets";

import CustomButton from "./CustomButton";
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-screen h-25 bg-primary text-white">
      <div className="mx-auto h-full flex items-center justify-between px-30 py-3">
        <img src={assets.logo} alt="Logo HEI" className="w-20 h-14" />
        {/* Desktop nav */}
        <nav className="flex gap-4 items-center justify-center">
          <ul className="flex gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-bold text-2xl hover:text-secondary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <CustomButton>INTRANET</CustomButton>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
