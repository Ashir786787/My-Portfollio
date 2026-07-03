import about from "../../data/about";
import StatCard from "../Common/StatCard/StatCard";

function AboutStats() {
  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      {about.stats.map((item, index) => (
        <StatCard
          key={index}
          number={item.number}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default AboutStats;