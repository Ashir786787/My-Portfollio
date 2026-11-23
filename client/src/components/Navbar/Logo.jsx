function Logo({ onClick }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      aria-label="Muhammad Ashir — home"
      className="group inline-flex min-h-[2.75rem] items-center gap-2.5"
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/30 to-cyan-400/20 sm:h-10 sm:w-10">
        <span className="font-display text-sm font-bold tracking-tight text-white">
          MA
        </span>
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-300/70 to-transparent" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-semibold tracking-tight text-white sm:text-base">
          Muhammad Ashir
        </span>
        <span className="mt-1 hidden text-[0.6rem] font-medium uppercase tracking-[0.22em] text-white/50 sm:block lg:hidden xl:block">
          Full Stack Developer
        </span>
      </span>
    </a>
  );
}

export default Logo;
