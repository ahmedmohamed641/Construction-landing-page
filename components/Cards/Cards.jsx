import { Button, Typography, Container } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import Link from "next/link"; // Import the Link component from next/link

const Cards = () => {
  return (
    <section id="blogs" className="p-6 sm:p-12 lg:p-24 w-full">
      <Container
        maxWidth="xl"
        className="text-left sm:flex sm:gap-12 lg:gap-24 lg:justify-between"
      >
        {/* First Card */}
        <Link
          href="https://www.thespruce.com/best-construction-materials-for-your-home-4177916"
          passHref
        >
          <article className="grid grid-cols-1 rounded-xl xs:mt-10 md:mt-0  cursor-pointer">
            <figure className="flex justify-start">
              <Image
                src="/assets/images/home11.png"
                className="md:w-96 lg:w-full h-auto rounded-t-xl"
                alt="Canadian Construction Branches"
                width={960}
                height={540}
              />
            </figure>
            <div className="flex flex-col gap-4 pt-6">
              <h3 className="text-navy text-xl sm:text-2xl capitalize font-medium">
                Canadian Construction <br className="hidden sm:block" />{" "}
                Branches.
              </h3>
              <Typography className="text-grey text-sm sm:text-base">
                We&apos;ll Supply You With Materials To{" "}
                <br className="hidden sm:block" />
                Create Your Dream Property From{" "}
                <br className="hidden sm:block" />
                Foundation To Finish. Call To Get Started!
              </Typography>
              <span>
                <Button variant="text" className="text-left text-orange -ml-1">
                  Read More
                  <ChevronRightIcon className="ml-1 text-orange text-lg sm:text-2xl" />
                </Button>
              </span>
            </div>
          </article>
        </Link>

        {/* Second Card */}
        <Link
          href="https://www.homeadvisor.com/cost/architects-and-engineers/build-a-house/"
          passHref
        >
          <article className="grid grid-cols-1 rounded-xl cursor-pointer xs:mt-10 md:mt-0">
            <figure className="flex justify-start">
              <Image
                src="/assets/images/home13.png"
                className="md:w-96 lg:w-full h-auto rounded-t-xl"
                alt="Australian Construction Branches"
                width={960}
                height={540}
              />
            </figure>
            <div className="flex flex-col gap-4 pt-6">
              <h3 className="text-navy text-xl sm:text-2xl capitalize font-medium">
                Australian Construction <br className="hidden sm:block" />{" "}
                Branches.
              </h3>
              <Typography className="text-grey text-sm sm:text-base">
                We&apos;ll Supply You With Materials To{" "}
                <br className="hidden sm:block" />
                Create Your Dream Property From{" "}
                <br className="hidden sm:block" />
                Foundation To Finish. Call To Get Started!
              </Typography>
              <span>
                <Button variant="text" className="text-left text-orange -ml-1">
                  Read More
                  <ChevronRightIcon className="ml-1 text-orange text-lg sm:text-2xl" />
                </Button>
              </span>
            </div>
          </article>
        </Link>

        {/* Third Card */}
        <Link
          href="https://www.builderonline.com/building/the-latest-trends-in-home-construction_o"
          passHref
        >
          <article className="grid grid-cols-1 rounded-xl xs:mt-10 md:mt-0  cursor-pointer">
            <figure className="flex justify-start">
              <Image
                src="/assets/images/hpme5.png"
                className="md:w-96 lg:w-full h-auto rounded-t-xl"
                alt="Brazilian Construction Branches"
                width={960}
                height={540}
              />
            </figure>
            <div className="flex flex-col gap-4 pt-6">
              <h3 className="text-navy text-xl sm:text-2xl capitalize font-medium">
                Brazilian Construction <br className="hidden sm:block" />{" "}
                Branches.
              </h3>
              <Typography className="text-grey text-sm sm:text-base">
                We&apos;ll Supply You With Materials To{" "}
                <br className="hidden sm:block" />
                Create Your Dream Property From{" "}
                <br className="hidden sm:block" />
                Foundation To Finish. Call To Get Started!
              </Typography>
              <span>
                <Button variant="text" className="text-left text-orange -ml-1">
                  Read More
                  <ChevronRightIcon className="ml-1 text-orange text-lg sm:text-2xl" />
                </Button>
              </span>
            </div>
          </article>
        </Link>
      </Container>
    </section>
  );
};

export default Cards;
