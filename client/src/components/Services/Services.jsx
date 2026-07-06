import { services } from "../../data/services";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <SectionWrapper id="services">
      <SectionTitle title="Services" subtitle="What I Can Do" />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Services;
