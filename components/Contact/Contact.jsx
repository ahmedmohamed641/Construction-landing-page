import { Container } from "@mui/material";

const Contact = () => {
  return (
    <section className="bg-gray-100">
      <Container
        maxWidth="xl"
        className="sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-24"
      >
        <section className="xs:pt-4 rounded-lg md:pt-6 lg:pt-14 xl:pt-20 xl:h-[400px] xs:h-[125px] md:bg-cover md:h-[200px] lg:h-[300px] bg-contact-background flex flex-col items-center text-center">
          <h2 className="text-navy-text xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug">
            Get a Free Quote Now!
          </h2>
          <section className="flex justify-center xs:mt-3 md:mt-6 mb-2 lg:mt-10 w-full px-4 sm:px-10 lg:px-0">
            <span className="rounded-md flex w-full max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md">
              <input
                type="email"
                className="bg-white xs:text-sm xs:placeholder:text-sm md:placeholder:text-base md:text-base capitalize pl-2 w-full placeholder:text-base focus:text-navy h-full rounded-l-md py-2 xs:py-3 lg:py-4"
                placeholder="Your work email address"
              />
              <button className="bg-navy xs:text-sm md:text-base xl:text-lg text-white xs:w-56 md:w-72 xs:py-2 md:py-4 lg:py-5 xl:py-7 lg:w-96 capitalize px-4 xs:px-6 lg:px-10 py-4 rounded-r-md">
                Join the waitlist
              </button>
            </span>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Contact;
