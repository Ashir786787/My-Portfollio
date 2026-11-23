import about from "../../data/about";

function HeroStats() {
  return (
    <dl className="mt-9 grid max-w-md grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] py-4 backdrop-blur-md">
      {about.stats.map((stat) => (
        <div key={stat.label} className="px-2 text-center sm:px-3">
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="block text-lg font-bold text-white sm:text-2xl">
              {stat.number}
            </span>
            <span className="mt-0.5 block text-[0.6rem] leading-tight text-white/50 sm:text-[0.7rem]">
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default HeroStats;
