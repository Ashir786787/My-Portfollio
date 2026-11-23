import ScrollProgress from "./Common/ScrollProgress/ScrollProgress";
import BackToTop from "./Common/BackToTop/BackToTop";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-white">
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(124,92,255,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_85%_45%,rgba(34,211,238,0.06),transparent_60%)]" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet-600 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <ScrollProgress />

      <div className="relative z-10">{children}</div>

      <BackToTop />
    </div>
  );
}

export default Layout;
