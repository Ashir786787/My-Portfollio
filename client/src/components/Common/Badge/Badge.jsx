function Badge({ children, dot = false, color = "emerald" }) {
  const colors = {
    emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  };
  return (
    <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border backdrop-blur-md ${colors[color]}`}>
      {dot && <span className="w-2.5 h-2.5 rounded-full bg-current animate-pulse"></span>}
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
}

export default Badge;
