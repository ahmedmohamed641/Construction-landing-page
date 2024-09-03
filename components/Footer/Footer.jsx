"use client";

import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full footer-background p-6 sm:p-8 lg:p-10">
      <Container maxWidth="xl">
        <section className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left section with links */}
          <section className="grid gap-4 sm:grid-rows-4 lg:text-left">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={30}
                height={30}
                className="w-6 h-6"
              />
              ISTAIX
            </Link>

            <ul className="flex flex-wrap gap-4 sm:gap-6">
              <li>
                <p>Download Now</p>
              </li>
              <li>
                <p>License</p>
              </li>
            </ul>

            <ul className="flex flex-wrap gap-4 sm:gap-6">
              <li>About</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Help</li>
              <li>Privacy Policy</li>
            </ul>

            <p>&copy; 2020 ISTAIX. All rights reserved.</p>
          </section>

          {/* Right section with app download */}
          <section className="flex flex-col gap-4 text-center lg:text-right">
            <p className="text-xl font-thin">Get the App</p>
            <figure>
              <img src="/assets/images/playstore.png" alt="Play Store" />
            </figure>
            <figure>
              <img src="/assets/images/applestore.png" alt="Apple Store" />
            </figure>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Footer;
