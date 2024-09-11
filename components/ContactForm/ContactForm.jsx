import { Button, Typography, Container, TextField } from "@mui/material";

const ContactForm = () => {
  return (
    <section className="from-gray-100 to-gray-300 xs:pt-16 xs:pr-8 xs:pl-8 md:pr-14 md:pl-14 lg:pr-24 sm:pb-24 md:pb-24 xs:pb-24 lg:pl-24 lg:pt-24 w-full">
      <Container maxWidth="xl" className="flex items-center justify-between">
        <Container maxWidth="xl" className="mt-12 p-4 lg:p-8">
          <Typography
            variant="h2"
            className="text-navy-text items-center text-3xl md:text-4xl font-bold text-center mb-6"
          >
            Get in Touch
          </Typography>
          <section
            id="contact-form"
            className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
          >
            <form className="flex flex-col gap-4">
              <TextField label="Name" variant="outlined" fullWidth required />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="bg-navy text-white xs:text-xs sm:text-sm md:text-base xl:text-lg font-normal xs:p-2 xs:pr-3 xs:pl-3 md:p-4 md:pr-6 md:pl-6 lg:p-4 lg:pr-8 lg:pl-8 xl:p-6 xl:pr-12 xl:pl-12 transition duration-300"
              >
                Send Message
              </Button>
            </form>
          </section>
        </Container>
      </Container>
    </section>
  );
};

export default ContactForm;
