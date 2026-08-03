import { useEffect, useRef, useState } from "react";
import logo from "/public/lLogo.png";
import { LINKS } from "../constants/index.jsx";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useReducedMotion } from "framer-motion";

const MOBILE_NAVIGATION_ID = "primary-mobile-navigation";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuToggleRef = useRef(null);
    const prefersReducedMotion = useReducedMotion();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        if (!isMobileMenuOpen) {
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                closeMobileMenu();
                menuToggleRef.current?.focus();
            }
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isMobileMenuOpen]);

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: prefersReducedMotion ? "auto" : "smooth",
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">

                <img src={logo} alt="Patisserie 4 You" width={80} height={33} />
                <div className="hidden space-x-6 lg:flex">
                    {LINKS.map((link, index) => (
                        <a
                            href={`#${link.targetId}`}
                            key={index}
                            className={`text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${index !== 0 ? "border-l-2 border-stone-400 pl-3" : ""
                                } hover:opacity-50`}
                            onClick={(e) => handleScroll(e, link.targetId)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="lg:hidden">
                    <button
                        ref={menuToggleRef}
                        type="button"
                        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls={MOBILE_NAVIGATION_ID}
                        className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div id={MOBILE_NAVIGATION_ID} className="absolute flex h-full w-full flex-col items-center p-4 lg:hidden">
                    <div className="flex w-full justify-between items-center mb-4 backdrop-blur-lg ">
                        <img src={logo} alt="Patisserie 4 You" width={80} height={22} />
                        <button type="button" aria-label="Close navigation menu" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" onClick={toggleMobileMenu}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="w-full backdrop-blur-lg ">
                        {LINKS.map((link, index) => (
                            <a
                                href={`#${link.targetId}`}
                                key={index}
                                className="block p-4 uppercase tracking-tighter text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
