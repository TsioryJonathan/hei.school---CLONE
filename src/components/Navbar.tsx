import navLinks from "../constants/navLinks";
import { assets } from "../../public/Images/assets";
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-screen h-16 bg-primary">
      <div className="mx-auto h-full flex items-center justify-between px-4">
        <img src={assets.logo} alt="Logo HEI" className="w-20 h-14" />
        {/* Desktop nav */}
        <nav>
          <ul>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
