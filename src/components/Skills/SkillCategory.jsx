import SkillCard from "./SkillCard";

function SkillCategory({ title, items }) {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold mb-8 text-white">
        {title}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;