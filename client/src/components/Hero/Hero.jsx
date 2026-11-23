import Container from "../Common/Container/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pb-4 pt-28 sm:pt-32 lg:pt-36"
    >
      <div aria-hidden="true" className="surface-grid absolute inset-0 -top-20" />
      <div
        aria-hidden="true"
        className="orb -left-24 top-24 h-[360px] w-[360px] bg-violet-600/25 sm:h-[460px] sm:w-[460px]"
      />
      <div
        aria-hidden="true"
        className="orb -right-24 top-1/3 h-[320px] w-[320px] bg-cyan-500/15 sm:h-[420px] sm:w-[420px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-canvas to-transparent"
      />

      <Container className="relative z-10 flex flex-1 items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-14">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;
