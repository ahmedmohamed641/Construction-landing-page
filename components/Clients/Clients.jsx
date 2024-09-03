import Container from "@mui/material/Container";

const Clients = () => {
  return (
    <section className="p-6 sm:p-12 lg:p-24 w-full">
      <Container maxWidth="xl">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 text-left items-center">
          {/* Text Section */}
          <section className="flex flex-col text-left">
            <h2 className="text-navy-text text-3xl sm:text-4xl lg:text-5xl leading-snug mb-4 lg:mb-4">
              Over a Decade of <br className="hidden lg:block" /> Achievements
            </h2>
            <p className="text-navy-text text-base sm:text-lg">
              With our superpowers, we have reached this.
            </p>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-y-10">
            <section className="flex p-2 rounded-md">
              <figure>
                {/* same thing use next image */}
                <img
                  src="/assets/images/icon.png"
                  alt="Satisfied Clients"
                  className="w-16 h-16"
                />
              </figure>
              <span className="ml-4 sm:ml-6">
                <h4 className="text-navy text-lg sm:text-xl font-medium">
                  10,000+
                </h4>
                <p className="text-navy text-sm sm:text-md font-light">
                  Satisfied Clients
                </p>
              </span>
            </section>

            <section className="flex p-2 rounded-md">
              <figure>
                <img
                  src="/assets/images/worker-svgrepo-com 1.png"
                  alt="Skilled Workers"
                  className="w-16 h-16"
                />
              </figure>
              <span className="ml-4 sm:ml-6">
                <h4 className="text-navy text-lg sm:text-xl font-medium">
                  2 Million
                </h4>
                <p className="text-navy text-sm sm:text-md font-light">
                  Skilled Workers
                </p>
              </span>
            </section>

            <section className="flex p-2 rounded-md">
              <figure>
                <img
                  src="/assets/images/icon (2).png"
                  alt="Projects Completed"
                  className="w-16 h-16"
                />
              </figure>
              <span className="ml-4 sm:ml-6">
                <h4 className="text-navy text-lg sm:text-xl font-medium">
                  500+
                </h4>
                <p className="text-navy text-sm sm:text-md font-light">
                  Projects Completed
                </p>
              </span>
            </section>

            <section className="flex p-2 rounded-md">
              <figure>
                <img
                  src="/assets/images/icon (1).png"
                  alt="Countries"
                  className="w-16 h-16"
                />
              </figure>
              <span className="ml-4 sm:ml-6">
                <h4 className="text-navy text-lg sm:text-xl font-medium">
                  140+
                </h4>
                <p className="text-navy text-sm sm:text-md font-light">
                  Countries
                </p>
              </span>
            </section>
          </section>
        </section>

        {/* Trusted Clients Section */}
        <section className="text-center mt-16 lg:mt-24">
          <h3 className="text-navy text-2xl sm:text-3xl lg:text-4xl capitalize font-medium">
            Our Trusted Clients
          </h3>
          <ul className="flex justify-between items-center pt-10 sm:pt-14  sm:gap-4 lg:gap-1 xl:gap-10">
            <span className="shadow-md p-2 sm:p-4 flex-grow sm:flex-grow-0">
              <img
                src="assets/images/client1.png"
                alt="Client 1"
                className="w-full xs:w-auto"
              />
            </span>
            <span className="shadow-md p-2 md:pl-10 sm:p-4 flex-grow sm:flex-grow-0">
              <img
                src="assets/images/client2.png"
                alt="Client 4"
                className="w-full xs:w-auto "
              />
            </span>
            <span className="shadow-md p-2 sm:p-4 flex-grow sm:flex-grow-0">
              <img
                src="assets/images/client3.png"
                alt="Client 3"
                className="w-full xs: xs:w-auto"
              />
            </span>
            <span className="shadow-md p-2 md:pl-10 sm:p-4 flex-grow sm:flex-grow-0">
              <img
                src="assets/images/client4.png"
                alt="Client 4"
                className="w-full xs:w-auto"
              />
            </span>
          </ul>
        </section>
      </Container>
    </section>
  );
};

export default Clients;
