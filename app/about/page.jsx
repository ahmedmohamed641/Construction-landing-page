import AboutSection from "@components/AboutSection/AboutSection";
import ContactForm from "@components/ContactForm/ContactForm";
import Team from "@components/Team/Team";

AboutSection;

const AboutPage = () => {
  return (
    <>
      <AboutSection />;
      <Team />
      <ContactForm />;
    </>
  );
};

export default AboutPage;
