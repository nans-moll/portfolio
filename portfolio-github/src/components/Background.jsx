import SynthGrid from "./SynthGrid";
import Cityscape from "./Cityscape";
import SideCables from "./SideCables";

// Rassemble tous les calques de décor fixes : grille synthwave (ciel),
// skyline (bas), et faisceaux de câbles latéraux. Le décor coloré n'apparaît
// qu'en thème sombre ; les câbles suivent le scroll via leftShift/rightShift.
export default function Background({ theme, t, leftShift, rightShift }) {
  return (
    <>
      {theme === "dark" && (
        <>
          {/* Grille synthwave dans le ciel */}
          <div
            aria-hidden
            className="pointer-events-none fixed left-0 right-0 top-0 z-0"
            style={{
              height: "62vh",
              opacity: 0.6,
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 88%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 88%, transparent 100%)",
            }}
          >
            <SynthGrid />
          </div>

          {/* Skyline en bas */}
          <div
            aria-hidden
            className="pointer-events-none fixed bottom-0 left-0 right-0 z-0"
            style={{
              height: "46vh",
              opacity: 0.85,
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 42%, rgba(0,0,0,0))",
              maskImage: "linear-gradient(to top, rgba(0,0,0,1) 42%, rgba(0,0,0,0))",
            }}
          >
            <Cityscape />
          </div>
        </>
      )}

      {/* Câbles latéraux (desktop uniquement) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-y-0 left-0 z-0 hidden md:block"
        style={{ width: 150, opacity: theme === "dark" ? 0.9 : 0.4 }}
      >
        <SideCables t={t} shift={leftShift} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-y-0 right-0 z-0 hidden md:block"
        style={{ width: 150, opacity: theme === "dark" ? 0.9 : 0.4, transform: "scaleX(-1)" }}
      >
        <SideCables t={t} shift={rightShift} />
      </div>
    </>
  );
}
