function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] py-1.5 pl-2.5 pr-4 backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-xs font-medium tracking-wide text-emerald-200/90 sm:text-[0.8rem]">
        Available for new opportunities
      </span>
    </div>
  );
}

export default HeroBadge;
