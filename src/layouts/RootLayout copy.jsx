// src/layouts/RootLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import Socials from '../components/Socials';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-off-white">
      <header className="bg-cream text-black shadow-md">
        <nav className="flex justify-between p-5 bg-[#e7e7e761]">
          <h1 className="text-3xl font-bold">Bakery Website</h1>
          <ul className="flex space-x-4">
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
          <div>
            <Socials />
          </div>
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
