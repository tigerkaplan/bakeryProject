import { useState } from "react";
import logo from "/public/lLogo.png";
import { LINKS } from "../constants/index.jsx";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
                <img src={logo} alt="logo" width={80} height={33} />
                <div className="hidden space-x-6 lg:flex">
                    {LINKS.map((link, index) => (
                        <a
                            href={`#${link.targetId}`}
                            key={index}
                            className={`text-sm ${index !== 0 ? "border-l-2 border-stone-400 pl-3" : ""
                                } hover:opacity-50`}
                            onClick={(e) => handleScroll(e, link.targetId)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute w-full h-full lg:hidden flex flex-col items-center p-4 ">
                    <div className="flex w-full justify-between items-center mb-4 backdrop-blur-lg ">
                        <img src={logo} alt="logo" width={80} height={22} />
                        <button onClick={toggleMobileMenu}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="w-full backdrop-blur-lg ">
                        {LINKS.map((link, index) => (
                            <a
                                href={`#${link.targetId}`}
                                key={index}
                                className="block p-4 uppercase tracking-tighter  text-white "
                                onClick={(e) => handleScroll(e, link.targetId)}
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
