function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md">
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
      <span className="text-sm font-medium text-emerald-300">
        Available for Work
      </span>
    </div>
  );
}

export default HeroBadge;
