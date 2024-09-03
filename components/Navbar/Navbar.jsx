"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navy p-3 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 lg:pl-24">
      <Container maxWidth="xl" className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 md:text-sm lg:text-base md:font-semibold lg:font-bold items-center"
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

        {/* Hamburger Menu Icon for XS Screens */}
        <div className="xs:flex md:hidden justify-end ">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon />
          </IconButton>
        </div>

        {/* Menu Items */}
        <ul
          className={`flex flex-col sm:h-auto xs:pt-56 xs:gap-4 md:flex-row md:gap-4 lg:gap-10 text-white absolute md:static  right-0 w-full xs:w-auto bg-navy md:bg-transparent p-5 md:p-0 transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
          } md:flex `}
        >
          <Link
            href="/"
            className="xs:text-sm lg:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="xs:text-sm lg:text-base "
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/jobs"
            className="xs:text-sm lg:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Jobs
          </Link>
          <Link
            href="/pricing"
            className="xs:text-sm lg:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="xs:text-sm lg:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </ul>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <Button className="bg-light-navy md" variant="contained">
            Get Started
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
