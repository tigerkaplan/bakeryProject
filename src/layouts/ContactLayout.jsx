// src/layouts/ContactLayout.jsx
import { NavLink, Outlet } from "react-router-dom";

export default function ContactLayout() {
    return (
        <div className="p-6 bg-cream rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-black">Contact with Bakery Office</h2>
            <p className="mb-6 text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut modi esse rem asperiores beatae placeat voluptates delectus molestias ex temporibus sit, iure, provident dolores commodi deleniti quaerat, sequi nemo.
            </p>

            <nav className="mb-6">
                <ul className="flex space-x-4">
                    <li>
                        <NavLink
                            to="form"
                            className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}>
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="hours"
                            className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}>
                            Business Hours
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="address"
                            className={({ isActive }) => isActive ? "text-orange underline" : "text-black hover:text-orange"}>
                            Address
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}
