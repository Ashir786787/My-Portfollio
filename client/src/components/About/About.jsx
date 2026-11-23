import Container from "../Common/Container/Container";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import about from "../../data/about";

function About() {
  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <div
        aria-hidden="true"
        className="orb -left-32 top-1/4 h-[380px] w-[380px] bg-violet-700/15"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent lg:block"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <AboutImage />

          <div>
            <SectionTitle
              align="left"
              subtitle={about.title}
              title={about.heading}
            />
            <AboutContent />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
