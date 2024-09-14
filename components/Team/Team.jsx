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
            <h3 className="text-navy xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              John Brook
            </h3>
            <Typography className="text-gray-600 md:text-sm xs:text-xs">
              Construction Engineer
            </Typography>
          </div>
        </section>

        {/* Second Card */}
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
            <h3 className="text-navy xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Ethan James
            </h3>
            <Typography className="text-gray-600 md:text-sm xs:text-xs">
              Construction Foreman
            </Typography>
          </div>
        </section>

        {/* Third Card */}
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
            <h3 className="text-navy xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Lucas Scott
            </h3>
            <Typography className="text-gray-600 md:text-sm xs:text-xs">
              Estimator
            </Typography>
          </div>
        </section>

        {/* Fourth Card */}
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
            <h3 className="text-navy xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Ella Morgan
            </h3>
            <Typography className="text-gray-600 md:text-sm xs:text-xs">
              Project Manager
            </Typography>
          </div>
        </section>

        {/* Fifth Card */}
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
            <h3 className="text-navy xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Noah Reed
            </h3>
            <Typography className="text-gray-600 md:text-sm xs:text-xs">
              Construction Engineer
            </Typography>
          </div>
        </section>

        {/* Sixth Card */}
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
            <h3 className="text-navy xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Ava Collins
            </h3>
            <Typography className="text-gray-600 md:text-sm xs:text-xs">
              Architect
            </Typography>
          </div>
        </section>

        {/* Seventh Card */}
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
            <h3 className="text-navy xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Mason Cooper
            </h3>
            <Typography className="text-gray-600 md:text-sm xs:text-xs">
              Field Technician
            </Typography>
          </div>
        </section>

        {/* Eighth Card */}
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
            <h3 className="text-navy xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Sophia Stone
            </h3>
            <Typography className="text-gray-600 md:text-sm xs:text-xs">
              Architect
            </Typography>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Team;
