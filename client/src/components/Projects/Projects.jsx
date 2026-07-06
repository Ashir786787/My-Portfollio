import projects from "../../data/projects";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Featured Projects" subtitle="My Recent Work" />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
