import { Button, Typography, Container } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Cards = () => {
  return (
    <section className="p-6 sm:p-12 lg:p-24 w-full">
      <Container
        maxWidth="xl"
        className="text-left sm:flex   gap-12 lg:gap-24 lg:justify-between"
      >
        {/* First Card */}
        <section className="grid grid-cols-1 rounded-xl">
          <figure className="flex justify-start">
            {/* do not use img tag, use Next Image component because it is more efficient {@link https://nextjs.org/docs/api-reference/next/image} */}
            <img
              src="assets/images/Image (2).png"
              className="md:w-96 lg:w-full h-auto rounded-t-xl"
              alt="Canadian Construction Branches"
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-medium">
              Canadian Construction <br className="hidden sm:block" /> Branches.
            </h3>
            <Typography className="text-grey text-sm sm:text-base">
              We'll Supply You With Materials To{" "}
              <br className="hidden sm:block" />
              Create Your Dream Property From <br className="hidden sm:block" />
              Foundation To Finish. Call To Get Started!
            </Typography>
            <span>
              <Button variant="text" className="text-left text-orange -ml-1">
                Read More
                <ChevronRightIcon className="ml-1 text-orange text-lg sm:text-2xl" />
              </Button>
            </span>
          </div>
        </section>

        {/* Second Card */}
        <section className="grid grid-cols-1 rounded-xl">
          <figure className="flex justify-start">
            <img
              src="assets/images/Image (2).png"
              className="md:w-96 lg:w-full h-auto rounded-t-xl"
              alt="Australian Construction Branches"
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-medium">
              Australian Construction <br className="hidden sm:block" />{" "}
              Branches.
            </h3>
            <Typography className="text-grey text-sm sm:text-base">
              We'll Supply You With Materials To{" "}
              <br className="hidden sm:block" />
              Create Your Dream Property From <br className="hidden sm:block" />
              Foundation To Finish. Call To Get Started!
            </Typography>
            <span>
              <Button variant="text" className="text-left text-orange -ml-1">
                Read More
                <ChevronRightIcon className="ml-1 text-orange text-lg sm:text-2xl" />
              </Button>
            </span>
          </div>
        </section>

        {/* Third Card */}
        <section className="grid grid-cols-1 rounded-xl">
          <figure className="flex justify-start">
            <img
              src="assets/images/Image (2).png"
              className=" md:w-96 lg:w-full h-auto rounded-t-xl"
              alt="Brazilian Construction Branches"
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-medium">
              Brazilian Construction <br className="hidden sm:block" />{" "}
              Branches.
            </h3>
            <Typography className="text-grey text-sm sm:text-base">
              We'll Supply You With Materials To{" "}
              <br className="hidden sm:block" />
              Create Your Dream Property From <br className="hidden sm:block" />
              Foundation To Finish. Call To Get Started!
            </Typography>
            <span>
              <Button variant="text" className="text-left text-orange -ml-1">
                Read More
                <ChevronRightIcon className="ml-1 text-orange text-lg sm:text-2xl" />
              </Button>
            </span>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Cards;
