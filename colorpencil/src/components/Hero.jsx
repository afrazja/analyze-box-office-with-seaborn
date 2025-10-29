import PencilIcon from "./icons/PencilIcon.jsx";
import CrayonIcon from "./icons/CrayonIcon.jsx";
import NotebookIcon from "./icons/NotebookIcon.jsx";
import EraserIcon from "./icons/EraserIcon.jsx";

// Hero section: friendly headline, supporting text, CTA, and a playful illustration
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-sky-800 leading-tight">
            Colorful Stationery for <span className="text-pink-500">Creative Kids</span>
          </h1>
          <p className="mt-4 text-sky-700/90 text-lg md:text-xl">
            Pencils, crayons, notebooks, and more — all in playful, kid‑approved
            designs. Make homework and doodles extra fun!
          </p>

          {/* CTA: Bubble style button */}
          <div className="mt-8 flex gap-4 items-center">
            <a
              href="#products"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-yellow-400 text-white text-lg font-extrabold bubble-shadow hover:scale-105 active:scale-95 transition shadow-lg"
            >
              Shop Now!
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-5 py-3 rounded-full bg-white/70 text-sky-700 font-semibold border border-sky-200 hover:bg-white transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Cartoon-like big illustration using simple SVG icons */}
        <div className="relative h-[320px] md:h-[420px]">
          {/* Floating shapes background */}
          <div className="absolute -top-8 -left-10 w-40 h-40 rounded-full bg-pink-200/70 blur-2xl" />
          <div className="absolute bottom-0 -right-8 w-48 h-48 rounded-full bg-yellow-200/70 blur-2xl" />

          {/* Icons cluster */}
          <div className="relative h-full w-full grid place-items-center">
            <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
              <div className="absolute left-2 top-12 rotate-[-20deg] hover:animate-bounce transition">
                <PencilIcon className="w-24 h-24 md:w-28 md:h-28" />
              </div>
              <div className="absolute right-4 top-0 rotate-[12deg] hover:animate-bounce transition">
                <CrayonIcon className="w-24 h-24 md:w-28 md:h-28" />
              </div>
              <div className="absolute left-8 bottom-2 rotate-[10deg] hover:animate-bounce transition">
                <NotebookIcon className="w-28 h-28 md:w-32 md:h-32" />
              </div>
              <div className="absolute right-8 bottom-6 -rotate-12 hover:animate-bounce transition">
                <EraserIcon className="w-20 h-20 md:w-24 md:h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave divider into product section */}
      <svg className="w-full text-white" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,85.3C672,85,768,107,864,112C960,117,1056,107,1152,85.3C1248,64,1344,32,1392,16L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
      </svg>
    </section>
  );
}
