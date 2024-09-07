"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navy p-4 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 lg:pl-24 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <Container maxWidth="xl" className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 md:text-sm lg:text-base md:font-semibold lg:font-bold items-center hover:text-light-navy transition-colors duration-300"
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

        <div className="xs:flex md:hidden justify-end">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-light-navy transition-colors duration-300 p-1 rounded-full"
          >
            <MenuIcon />
          </IconButton>
        </div>

        <ul
          className={`flex flex-col xs:pt-56 xs:gap-4 md:flex-row md:gap-4 lg:gap-10 text-white absolute md:static right-0 w-full xs:w-auto bg-navy md:bg-transparent p-5 md:p-0 transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
          } md:flex`}
        >
          <li className="relative group">
            <Link
              href="/"
              className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-1 bg-light-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/projects"
              className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-1 bg-light-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/about"
              className="xs:text-sm lg:text-base block py-2 px-4 hover:bg-light-navy transition-colors duration-300 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-1 bg-light-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
