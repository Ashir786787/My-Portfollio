import Container from "../Common/Container/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[var(--bg-primary)] overflow-hidden pt-16 lg:pt-20"
    >
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
      <div className="absolute top-24 left-10 w-[450px] h-[450px] bg-violet-700/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/20 blur-[180px] rounded-full" />

      <Container className="relative z-10 min-h-[calc(100vh-90px)] flex items-center">
        <div className="grid lg:grid-cols-[46%_54%] items-center gap-6 xl:gap-2 w-full">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;
