import skills from "../../data/skills";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SkillCategory from "./SkillCategory";
import { FaCheckCircle } from "react-icons/fa";

const strengths = [
  "Problem solving",
  "Clear communication",
  "Ownership",
  "Attention to detail",
];

function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="relative overflow-hidden border-y border-white/[0.05] bg-canvas-2/50"
    >
      <div
        aria-hidden="true"
        className="orb right-0 top-20 h-[360px] w-[360px] bg-cyan-500/10"
      />

      <SectionTitle
        subtitle="My toolkit"
        title="Skills built through real projects"
        description="A practical stack for designing, building and shipping web and mobile products — from the first wireframe to production deployment."
      />

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-12">
        {skills.map((category, index) => (
          <SkillCategory
            key={category.category}
            {...category}
            className={index < 2 ? "lg:col-span-6" : "lg:col-span-4"}
          />
        ))}
      </div>

      <div className="card mt-5 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold text-white">
            Beyond the code
          </p>
          <p className="mt-1 text-xs text-white/50">
            The habits that make collaboration effortless.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
          {strengths.map((strength) => (
            <li
              key={strength}
              className="flex items-center gap-2 text-xs font-medium text-white/65"
            >
              <FaCheckCircle className="text-[0.65rem] text-violet-400" />
              {strength}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
