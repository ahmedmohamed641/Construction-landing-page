"use client";

import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="w-full footer-background p-6 sm:p-8 lg:p-10">
      <Container maxWidth="xl">
        <section className="flex flex-col lg:flex-row justify-between gap-8">
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
              <Link href="/about">
                <li>About</li>
              </Link>

              <Link href="/projects">
                <li>Projects</li>
              </Link>
              <Link href="/#blogs">
                <li>Blogs</li>
              </Link>
              <Link href="/about#contact-form">
                <li>Contact Us</li>
              </Link>
            </ul>

            <p>&copy; 2020 ISTAIX. All rights reserved.</p>
          </section>

          <section className="flex flex-col gap-4 text-center lg:text-right">
            <p className="text-xl text-left font-thin">Get the App</p>

            {/* Play Store Image */}
            <figure>
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/playstore.png"
                  alt="Play Store"
                  width={150} // Adjusted size for image
                  height={100} // Adjusted size for image
                  className="w-auto h-12"
                />
              </a>
            </figure>

            {/* Apple Store Image */}
            <figure>
              <a
                href="https://apps.apple.com/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/applestore.png"
                  alt="Apple Store"
                  width={150} // Adjusted size for image
                  height={100} // Adjusted size for image
                  className="w-auto h-12"
                />
              </a>
            </figure>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Footer;
