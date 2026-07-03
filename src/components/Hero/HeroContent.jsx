import { TypeAnimation } from "react-type-animation";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import { hero } from "../../data/hero";

function HeroContent() {
  return (
    <div>
      <HeroBadge />
      <p className="mt-8 text-violet-400 uppercase tracking-[6px] text-sm">{hero.greeting}</p>
      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight">
        {hero.firstName}
        <br />
        <span className="text-violet-500">{hero.lastName}</span>
      </h1>
      <div className="mt-8 h-10 text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400">
        <TypeAnimation sequence={hero.roles} speed={50} repeat={Infinity} />
      </div>
      <p className="mt-8 max-w-xl text-gray-400 leading-8 text-base sm:text-lg">
        I build modern, scalable, and high-performance web applications using the MERN stack. Passionate about crafting intuitive user experiences, writing clean and maintainable code, and transforming ideas into powerful digital products that make a real impact.
      </p>
      <HeroButtons />
      <HeroSocials />
    </div>
  );
}

export default HeroContent;
