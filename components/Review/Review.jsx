import { Container } from "@mui/material";
import Image from "next/image";

const Review = () => {
  return (
    <section className="p-14 pb-24">
      <Container maxWidth="xl" className="text-center">
        <section className="flex flex-col gap-10">
          <h2 className="text-navy-text xs:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug text-center">
            Let us help you build
          </h2>
          <p className="text-navy-text text-lg">
            Over 17 years of experience in creating spaces that positively
            impact people&rsquo;s lives
          </p>
          <figure className="flex justify-center lg:mt-6">
            <Image
              src="/assets/images/contact section.png"
              className="min-w-full"
              alt="Contact Section"
              width={1200}
              height={800}
            />
          </figure>
        </section>

        <section className="flex flex-col mt-24 xs:pl-2 xs:pr-2 md:pl-0 md:pr-0  pt-10 pb-10 gap-10 bg-sky rounded-lg">
          <h2 className="text-navy-text xs:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug text-center">
            Few Words From Our Clients
          </h2>

          <p className="text-navy-text xs:text-sm md:text-lg text-wrap pr-3 pl-3">
            <span className="md:text-5xl lg:text-7xl">“</span> We had an
            incredible experience working with them and were impressed they
            <br className="xs:hidden lg:block" /> made such a big difference in
            only three weeks. Our team is so grateful for the
            <br className="xs:hidden lg:block" />
            wonderful improvements they made and their ability to get familiar
            with the <br className="xs:hidden lg:block" /> product concept so
            quickly. It acted as a catalyst to take our design to the next{" "}
            <br className="xs:hidden lg:block" /> level and get more eyes on our
            product
          </p>

          <ul className="xs:grid md:flex justify-center xs:gap-3 md:gap-3 lg:gap-10 pt-14">
            <figure className="xs:flex xs:justify-end">
              <Image
                src="/assets/images/photo.png"
                className="  h-auto  "
                alt="Jane Cooper"
                width={50}
                height={50}
              />
              <span className="md:flex flex-col text-left ml-3">
                <p className="text-navy xs:text-xs md:text-base">Jane Cooper</p>
                <p className="text-navy xs:text-xs md:text-lg lg:text-xl font-medium">
                  CEO, ABC Corporation
                </p>
              </span>
            </figure>
            <figure className="flex justify-center">
              <Image
                src="/assets/images/Photo (1).png"
                alt="Client Photo 1"
                width={50}
                height={50}
              />
            </figure>
            <figure className="flex justify-center">
              <Image
                src="/assets/images/Photo (2).png"
                alt="Client Photo 2"
                width={50}
                height={50}
              />
            </figure>
            <figure className="flex justify-center">
              <Image
                src="/assets/images/Photo (3).png"
                alt="Client Photo 3"
                width={50}
                height={50}
              />
            </figure>
            <figure className="flex justify-center">
              <Image
                src="/assets/images/Photo (4).png"
                alt="Client Photo 4"
                width={50}
                height={50}
              />
            </figure>
          </ul>
        </section>
      </Container>
    </section>
  );
};

export default Review;
