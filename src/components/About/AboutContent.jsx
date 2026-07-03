import about from "../../data/about";
import HeroButtons from "../Hero/HeroButtons";

function AboutContent() {
  return (
    <div>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{about.heading}</h3>
      <p className="mt-8 text-gray-400 leading-8">{about.description}</p>
      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h4 className="text-violet-400 font-semibold">Education</h4>
          <p className="mt-2 text-gray-300">{about.education}</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h4 className="text-violet-400 font-semibold">Experience</h4>
          <p className="mt-2 text-gray-300">{about.experience}</p>
        </div>
      </div>
      <div className="mt-10">
        <HeroButtons />
      </div>
    </div>
  );
}

export default AboutContent;
