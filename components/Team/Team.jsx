import { Typography, Container } from "@mui/material";

import Image from "next/image";

const Team = () => {
  return (
    <section className="bg-gradient-to-bl text-center from-gray-100 to-gray-300 xs:pt-16 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 sm:pb-24 md:pb-24 xs:pb-24 lg:pl-24 lg:pt-24 w-full">
      <h2 className="text-navy-text text-3xl sm:text-4xl lg:text-5xl leading-snug mb-10 lg:mb-24">
        Our Team
      </h2>
      <Container
        maxWidth="xl"
        className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-10 items-center justify-between"
      >
        {/* First Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/team1.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Canadian Construction Branches"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 text-sm sm:text-base">
              Worker
            </Typography>
          </div>
        </section>
        {/* Second card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/team2.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Canadian Construction Branches"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 text-sm sm:text-base">
              Worker
            </Typography>
          </div>
        </section>
        {/* Third card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/team3.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Canadian Construction Branches"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 text-sm sm:text-base">
              Worker
            </Typography>
          </div>
        </section>

        {/* Fourth card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/team4.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Canadian Construction Branches"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 text-sm sm:text-base">
              Worker
            </Typography>
          </div>
        </section>
        {/* fifth card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/team5.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Canadian Construction Branches"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 text-sm sm:text-base">
              Worker
            </Typography>
          </div>
        </section>

        {/* sixth card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/team6.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Canadian Construction Branches"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 text-sm sm:text-base">
              Worker
            </Typography>
          </div>
        </section>
        {/* seventh card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/team7.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Canadian Construction Branches"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 text-sm sm:text-base">
              Worker
            </Typography>
          </div>
        </section>
        {/* eighth card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/team8.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Canadian Construction Branches"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy text-xl sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 text-sm sm:text-base">
              Worker
            </Typography>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Team;
