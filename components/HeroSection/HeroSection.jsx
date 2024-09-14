import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import Rating from "@mui/material/Rating";

const HeroSection = () => {
  return (
    <section className="background-image  lg:h-[650px] xl:h-[750px] xs:pt-16 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 sm:pb-24 md:pb-24 xs:pb-24 lg:pl-24 lg:pt-24 w-full">
      <Container maxWidth="xl" className="flex-col text-left items-center">
        <h1 className="text-navy-text xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl leading-normal xs:mb-4 md:mb-6">
          Diversified Services. <br className="xs:hidden sm:block" /> Unvarying
          Quality.
        </h1>

        <p className="text-light-navy lg:text-lg">
          We have designed 100+ commercial &amp; residential projects
          <br className="xs:hidden sm:block" /> in the USA &amp;{" "}
          <br className="xs:block sm:hidden" /> across the globe, providing
          design <br className="xs:block sm:hidden" /> &amp; 3D{" "}
          <br className="xs:hidden sm:block" />
          support to architectural firms <br className="xs:block sm:hidden" />{" "}
          worldwide. Award- <br className="xs:hidden sm:block" />
          winning company <br className="xs:block sm:hidden" /> with{" "}
          <span className="text-navy-text">17+ years</span> of experience.
        </p>

        <section className="flex xs:gap-4 md:gap-8 items-center lg:gap-10 xs:mt-10 md:mt-16 lg:mt-20">
          <Link href="/projects#projects">
            <Button
              variant="contained"
              className="bg-navy text-white xs:text-xs sm:text-sm md:text-base xl:text-lg font-normal xs:p-2 xs:pr-3 xs:pl-3 md:p-4 md:pr-6 md:pl-6 lg:p-4 lg:pr-8 lg:pl-8 xl:p-6 xl:pr-12 xl:pl-12"
            >
              See Our Work
            </Button>
          </Link>
          <ul className="flex items-center gap-6">
            <Link
              href="/projects#projects"
              className="flex gap-2 font-bold mr-4"
            >
              <PlayArrowRoundedIcon className="text-navy border-2 border-navy rounded-full xs:text-3xl md:text-4xl lg:text-5xl" />
            </Link>

            <p className="text-navy text-7xl font-thin rotate-90">|</p>

            <p className="text-navy-text text-xl">Explore</p>
          </ul>
        </section>

        <section className=" xs:hidden md:flex lg:w-56 xs:absolute xs:top-80 xs:right-3 md:top-36 md:right-20 lg:top-36 lg:right-20 xl:top-36 xl:right-96 bg-white p-2 flex rounded-md shadow-lg">
          <figure>
            <Image
              src="/assets/images/photo0.png"
              alt="Daniel Jones"
              width={50}
              height={50}
              className="rounded-md"
            />
          </figure>

          <span className="xs:ml-3 md:ml-6">
            <p className="text-navy xs:text-sm md:text-base xl:text-xl font-medium">
              Daniel Jones
            </p>
            <Rating
              name="read-only"
              value={5}
              readOnly
              className="text-yellow-300 xs:text-base md:text-lg"
            />
          </span>
        </section>

        <section className=" xs:hidden md:flex  lg:w-56 xs:absolute md:absolute xs:bottom-72 xs:left-2/4 md:bottom-72 md:left-2/4 lg:bottom-80 lg:left-[600px] lg:right-10 xl:bottom-72 xl:left-2/4 bg-white p-2 flex rounded-md shadow-lg">
          <figure>
            <Image
              src="/assets/images/photo(00).png"
              alt="Martha May"
              width={50}
              height={50}
              className="rounded-md"
            />
          </figure>

          <span className="xs:ml-3 md:ml-6">
            <p className="text-navy xs:text-sm md:text-base xl:text-xl font-medium">
              Martha May
            </p>
            <Rating
              name="read-only"
              value={5}
              readOnly
              className="text-yellow-300 xs:text-base md:text-lg"
            />
          </span>
        </section>
      </Container>
    </section>
  );
};

export default HeroSection;
