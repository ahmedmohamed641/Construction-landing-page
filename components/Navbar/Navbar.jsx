"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-navy p-4 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 lg:pl-24 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <Container maxWidth="xl" className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 md:text-sm lg:text-base md:font-semibold lg:font-bold items-center hover:text-light-navy transition-colors duration-300"
          aria-label="Home"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={30}
            height={30}
            priority
          />
          ISTAIX
        </Link>

        {/* Hamburger Icon */}
        <div className="xs:flex md:hidden justify-end">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-light-navy transition-colors duration-300 p-1 rounded-full"
          >
            {isMenuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </IconButton>
        </div>

        {/* Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-navy transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden z-50`}
        >
          <ul className="flex flex-col gap-6 p-6 text-white">
            <li className="relative group">
              <Link
                href="/"
                className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
                aria-label="Navigate to Home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/about"
                className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
                aria-label="Navigate to About"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/projects"
                className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
                aria-label="Navigate to Projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:flex-row md:gap-4 lg:gap-10 text-white">
          <li className="relative group">
            <Link
              href="/"
              className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
              aria-label="Navigate to Home"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-1 bg-light-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/about"
              className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
              aria-label="Navigate to About"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-1 bg-light-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/projects"
              className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
              aria-label="Navigate to Projects"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-1 bg-light-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
