import { experiences } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#111116]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-violet-500 uppercase tracking-[4px] text-center text-sm">Experience</p>
        <h2 className="text-4xl font-bold text-center mt-2">My Journey</h2>
        <div className="relative mt-20">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-violet-700"></div>
          <div className="space-y-14">
            {experiences.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
