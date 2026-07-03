import { experiences } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

function Timeline() {
  return (
    <div className="relative max-w-2xl mx-auto">
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} index={i} {...exp} />
      ))}
    </div>
  );
}

export default Timeline;
