import testimonials from "../../data/testimonials";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionTitle title="Testimonials" subtitle="What People Say" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Testimonials;
