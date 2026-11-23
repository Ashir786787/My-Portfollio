import { experiences } from "../../data/experience";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ExperienceCard from "./ExperienceCard";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <SectionWrapper id="experience" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="orb right-0 bottom-0 h-[360px] w-[360px] bg-cyan-500/10"
      />

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="self-start lg:sticky lg:top-28">
          <SectionTitle
            align="left"
            subtitle="Experience"
            title="A track record of learning and shipping"
            description="From university projects to production internships and freelance work — every step has been about building better software."
          />

          <div className="card mt-8 p-5">
            <div className="flex items-center gap-3">
              <span className="icon-tile h-10 w-10">
                <FaBriefcase className="text-sm" />
              </span>
              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white/45">
                  Currently
                </p>
                <p className="text-sm font-semibold text-white">
                  MERN Stack Developer Intern
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-6 text-white/50">
              Building production React interfaces and API integrations at ML Bench.
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent sm:left-[9px]"
          />
          <div className="space-y-5">
            {experiences.map((item, index) => (
              <ExperienceCard key={`${item.company}-${item.year}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Experience;
