import { Button, Typography, Container, TextField } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className=" about-background  from-gray-100 to-gray-300 xs:pt-16 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 sm:pb-24 md:pb-24 xs:pb-24 lg:pl-24 lg:pt-24 w-full">
      <Container maxWidth="xl" className="flex items-center justify-between">
        <section className="flex-col justify-start text-left w-full lg:w-1/2">
          <h1 className="text-navy-text xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl leading-normal xs:mb-4 md:mb-6 capitalize">
            Who are we? <br className="xs:hidden md:block" /> why us?
          </h1>
          <p className="text-light-navy lg:text-lg max-w-3xl mt-4">
            ISTAIX provides innovative, sustainable construction for
            residential, <br className="xs:hidden lg:block" /> commercial, and
            industrial projects. Our expert team handles{" "}
            <br className="xs:hidden lg:block" /> everything from design to
            completion, ensuring top quality{" "}
            <br className="xs:hidden lg:block" /> and safety. We focus on
            customer satisfaction and modern,{" "}
            <br className="xs:hidden lg:block" /> eco-friendly building methods.
          </p>

          <Link href="#contact-form">
            <Button
              variant="contained"
              className="bg-navy text-white xs:text-xs sm:text-sm md:text-base xl:text-lg font-normal xs:p-2 xs:pr-3 xs:pl-3 md:p-4 md:pr-6 md:pl-6 lg:p-4 lg:pr-8 lg:pl-8 xl:p-6 xl:pr-12 xl:pl-12 transition duration-300 flex items-center xs:mt-10 md:mt-16 lg:mt-20"
            >
              Contact Us
              <ArrowDownwardIcon className="ml-2" />
            </Button>
          </Link>
        </section>

        <figure className="flex justify-center xs:hidden md:block  mt-6 h-full">
          <Image
            src="/assets/images/about-section-2.jpg"
            className="w-full xs:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
            alt="Australian Construction Branches"
            width={1200}
            height={675}
            style={{ boxShadow: "0 10px 15px rgba(38, 54, 64, 0.6)" }}
          />
        </figure>
      </Container>
    </section>
  );
};

export default AboutSection;
