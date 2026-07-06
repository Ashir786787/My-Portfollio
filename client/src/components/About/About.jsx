import Container from "../Common/Container/Container";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutStats from "./AboutStats";
import about from "../../data/about";
import { fadeUp } from "../../utils/animations";

function About() {
  return (
    <section id="about" className="py-28 bg-[var(--bg-secondary)]">
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle subtitle={about.subtitle} title={about.title} />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          <AboutImage />
          <div className="space-y-10">
            <AboutContent />
            <AboutStats />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
