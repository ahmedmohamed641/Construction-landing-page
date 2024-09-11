import { Container } from "@mui/material";
import Image from "next/image";

const ProjectsCards = () => {
  return (
    <section
      id="projects"
      className="bg-white text-center from-gray-100 to-gray-300 xs:pt-16 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 sm:pb-24 md:pb-24 xs:pb-24 lg:pl-24 lg:pt-24 w-full"
    >
      <h2 className="text-navy-text font-bold text-3xl sm:text-4xl lg:text-5xl leading-snug mb-10 lg:mb-24">
        Our Projects
      </h2>
      <Container
        maxWidth="xl"
        className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-10 items-center justify-between"
      >
        {/* First Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/home.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Maple Grove"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy xs:text-md md:text-xl  sm:text-2xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Maple Grove
            </h3>
          </div>
        </section>
        {/* Second Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/home2.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Elmwood Retreat"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy  xs:text-md md:text-xl capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Elm Retreat
            </h3>
          </div>
        </section>
        {/* Third Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/home4.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Pine Hill"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy xs:text-md md:text-xl  capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Pine Hill
            </h3>
          </div>
        </section>

        {/* Fourth Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/home6.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Cedar View"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy xs:text-md md:text-xl  capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Cedar View
            </h3>
          </div>
        </section>
        {/* Fifth Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/home7.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Oak Ridge"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy xs:text-md md:text-xl  capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Oak Ridge
            </h3>
          </div>
        </section>

        {/* Sixth Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/home8.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Willow Springs"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy xs:text-md md:text-xl  capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Willow Springs
            </h3>
          </div>
        </section>
        {/* Seventh Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/home10.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Birchwood Estate"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy xs:text-md md:text-xl  capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Birch Estate
            </h3>
          </div>
        </section>
        {/* Eighth Card */}
        <section className="flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <figure className="relative">
            <Image
              src="/assets/images/home12.png"
              className="w-full h-auto object-cover rounded-t-xl"
              alt="Cherry Blossom"
              width={300}
              height={560}
            />
          </figure>
          <div className="flex flex-col gap-4 pt-6 bg-gray-200 p-4">
            <h3 className="text-navy xs:text-md md:text-xl  capitalize font-semibold transition-colors duration-300 hover:text-blue-600">
              Cherry Ridge
            </h3>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default ProjectsCards;
