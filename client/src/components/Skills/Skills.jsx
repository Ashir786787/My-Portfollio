import skills from "../../data/skills";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SkillCategory from "./SkillCategory";

function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle title="My Skills" subtitle="Technologies I Work With" />
      <div className="space-y-20">
        {skills.map((category, index) => (
          <SkillCategory key={index} title={category.category} items={category.items} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Skills;
