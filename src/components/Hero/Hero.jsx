import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#07070B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;
