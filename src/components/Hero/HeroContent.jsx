import { TypeAnimation } from "react-type-animation";
import { portfolio } from "../../data/portfolio";

function HeroContent() {
  return (
    <div className="max-w-2xl">
      <p className="text-purple-400 text-lg font-medium mb-4">👋 Hello, I'm</p>
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
        {portfolio.name}
      </h1>
      <div className="mt-6 h-14 text-2xl md:text-3xl font-semibold text-cyan-400">
        <TypeAnimation
          sequence={portfolio.roles.flatMap((role) => [role, 1800])}
          speed={50}
          repeat={Infinity}
        />
      </div>
      <p className="mt-8 text-gray-400 leading-8 text-lg">{portfolio.intro}</p>
      <div className="mt-10 flex flex-wrap gap-5">
        <button className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold">
          Hire Me
        </button>
        <button className="px-8 py-4 rounded-xl border border-purple-500 hover:bg-purple-500 transition-all duration-300 font-semibold">
          View Projects
        </button>
      </div>
    </div>
  );
}

export default HeroContent;
