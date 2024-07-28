import { NavLink, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Footer from '../pages/Footer';
import { useState } from 'react';

export default function RootLayout() {
  // State to manage the visibility of the mobile menu
  const [nav, setNav] = useState(false);

  // Toggle function for the mobile menu
  const handleClick = () => setNav(!nav);

  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <header className="bg-[#e7e7e7] text-black shadow-md">
        <nav className="flex justify-between p-5 items-center border-b">
          <h1 className="text-4xl font-bold">Bakery Website</h1>
          <ul className="hidden md:flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="menu"
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="team"
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="faq"
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden" onClick={handleClick}>
            {nav ? <FaTimes size={25} /> : <GiHamburgerMenu size={25} />}
          </div>

          {/* Mobile Menu */}
          <ul className={`${nav ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-cream text-black shadow-md flex flex-col items-center space-y-4 py-4 z-50`}>
            <li>
              <NavLink
                to="/"
                onClick={handleClick}
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                onClick={handleClick}
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="menu"
                onClick={handleClick}
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="team"
                onClick={handleClick}
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="faq"
                onClick={handleClick}
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                onClick={handleClick}
                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>

      <footer className="bg-cream text-black p-4 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
