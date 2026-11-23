import { services } from "../../data/services";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const process = [
  { step: "01", title: "Discover", text: "Understand goals, users and constraints." },
  { step: "02", title: "Design", text: "Map flows and shape the interface." },
  { step: "03", title: "Build", text: "Develop clean, tested, scalable code." },
  { step: "04", title: "Ship", text: "Deploy, measure and keep improving." },
];

function Services() {
  return (
    <SectionWrapper id="services" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="orb -right-28 top-1/3 h-[400px] w-[400px] bg-violet-700/15"
      />

      <SectionTitle
        subtitle="What I do"
        title="Services built around your product"
        description="From idea to launch, I cover the design and engineering work needed to ship a product that looks sharp and performs under real usage."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>

      <div className="mt-16">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">How I work</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
              A simple, transparent process
            </h3>
          </div>
          <p className="max-w-sm text-xs leading-6 text-white/50 sm:text-right sm:text-sm">
            No black boxes — clear milestones and communication from kickoff to launch.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <span className="font-display text-sm font-bold text-violet-400/70">
                {item.step}
              </span>
              <h4 className="mt-3 font-display text-base font-semibold text-white">
                {item.title}
              </h4>
              <p className="mt-1.5 text-xs leading-6 text-white/50">{item.text}</p>
              {index < process.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-white/20 to-transparent lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}

export default Services;
