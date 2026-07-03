import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get In Touch" subtitle="Let's Build Something Amazing" />
      <div className="grid lg:grid-cols-2 gap-12 mt-16">
        <ContactForm />
        <ContactInfo />
      </div>
    </SectionWrapper>
  );
}

export default Contact;
