import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="orb -left-24 bottom-0 h-[380px] w-[380px] bg-violet-700/15"
      />
      <div
        aria-hidden="true"
        className="orb -right-24 top-10 h-[300px] w-[300px] bg-cyan-500/10"
      />

      <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <SectionTitle
            align="left"
            subtitle="Contact"
            title="Let's build something great together"
            description="Have a project, a role or an idea you want to bring to life? Tell me a little about it — I usually reply within 24 hours."
          />
          <ContactInfo />
        </div>

        <ContactForm />
      </div>
    </SectionWrapper>
  );
}

export default Contact;
