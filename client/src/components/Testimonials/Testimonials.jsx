import testimonials from "../../data/testimonials";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      className="relative overflow-hidden border-y border-white/[0.05] bg-canvas-2/50"
    >
      <div
        aria-hidden="true"
        className="orb left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 bg-violet-700/10"
      />

      <SectionTitle
        subtitle="Testimonials"
        title="What people say about working with me"
        description="Clear communication, reliable delivery and a genuine care for the details — here's how collaborators describe the experience."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-[0.7rem] text-amber-300" />
          ))}
        </div>
        <p className="text-xs text-white/50">
          <span className="font-semibold text-white/70">5.0 average</span> from client
          and collaborator feedback
        </p>
      </div>
    </SectionWrapper>
  );
}

export default Testimonials;
