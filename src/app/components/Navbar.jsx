"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  // Handle scroll direction and blur effect
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      setShowNavbar(currentScrollY <= lastScrollY);
      setIsBlurred(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-90 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isBlurred ? "backdrop-blur-md" : ""}`}
    >
      <div className="flex container items-center justify-between mx-auto px-4 py-2 lg:py-4">
        <Link
          href="/"
          className="flex items-center text-2xl md:text-3xl lg:text-4xl text-white font-semibold"
        >
          <AutoAwesomeTwoToneIcon fontSize="large" className="mr-3" /> {/* Add margin-right here */}
          Digital Hub
        </Link>
        <div className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden flex items-center text-white focus:outline-none"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
          >
            {navbarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="md:hidden bg-[#121212] bg-opacity-90 backdrop-blur-md py-4 px-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.path}
                title={link.title}
                className="text-white hover:bg-gray-700 rounded px-3 py-2 transition duration-200"
                onClick={() => setNavbarOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
