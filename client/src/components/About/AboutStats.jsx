import about from "../../data/about";
import StatCard from "../Common/StatCard/StatCard";

function AboutStats() {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
      {about.stats.map((item, index) => (
        <StatCard
          key={item.label}
          number={item.number}
          label={item.label}
          index={index}
        />
      ))}
    </div>
  );
}

export default AboutStats;
