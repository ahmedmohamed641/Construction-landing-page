import { Button, Typography, Container, TextField } from "@mui/material";

const ProjectsSection = () => {
  return (
    <section className="bg-gradient-to-bl from-gray-100 text-center to-gray-300 xs:pt-16 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 sm:pb-24 md:pb-24 xs:pb-24 lg:pl-24 lg:pt-24 w-full">
      <Container
        maxWidth="xl"
        className="flex flex-col items-center text-center justify-center"
      >
        <h1 className="text-navy-text xs:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl leading-normal xs:mb-4 md:mb-6 capitalize">
          Construction Solution <br className="xs:hidden md:block" /> For
          Everyone
        </h1>
        <p className="text-light-navy text-center lg:text-lg max-w-3xl mt-4">
          At ISTAIX, we specialize in delivering high-quality, sustainable
          construction solutions for residential, commercial, and industrial
          projects. Our experienced team manages every aspect from design to
          completion, ensuring exceptional standards and safety. We are
          committed to customer satisfaction, utilizing modern, eco-friendly
          practices to create spaces that are both innovative and enduring. Let
          us turn your vision into reality with our expertise and dedication.
        </p>
      </Container>
    </section>
  );
};

export default ProjectsSection;
