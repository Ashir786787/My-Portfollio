import SkillCard from "./SkillCard";

function SkillCategory({ category, icon: Icon, blurb, items, className = "" }) {
  return (
    <div className={`card card-hover group relative overflow-hidden p-5 sm:p-6 ${className}`}>
      <div className="card-spotlight" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="icon-tile h-11 w-11 shrink-0">
            <Icon className="text-base" />
          </span>
          <div>
            <h3 className="font-display text-base font-semibold text-white sm:text-lg">
              {category}
            </h3>
            <p className="mt-0.5 text-xs text-white/50">{blurb}</p>
          </div>
        </div>
        <span className="mt-1 shrink-0 rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-white/45">
          {items.length} tools
        </span>
      </div>

      <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
