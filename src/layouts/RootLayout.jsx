// src/layouts/RootLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';

export default function RootLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-off-white">
            <header className="bg-cream text-black shadow-md">
                <nav className="container mx-auto flex justify-between items-center p-4">
                    <h1 className="text-3xl font-bold">Bakery Website</h1>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="about"
                                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="menu"
                                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="team"
                                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}>
                                Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="contact"
                                className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}>
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
