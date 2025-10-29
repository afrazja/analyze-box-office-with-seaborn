// Footer: colorful background and simple contact info
export default function Footer() {
  return (
    <footer id="contact" className="relative mt-10">
      {/* Decorative top wave */}
      <svg className="w-full text-white" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,144C672,117,768,75,864,74.7C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>

      <div className="bg-gradient-to-r from-sky-300 via-pink-200 to-amber-200">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sky-800">
          {/* Brand blurb */}
          <div>
            <h3 className="text-2xl font-extrabold">ColorPencil</h3>
            <p className="mt-1 text-sky-800/80">
              Playful stationery for bright little minds.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-col gap-1 font-semibold">
            <a className="hover:text-pink-600" href="#home">Home</a>
            <a className="hover:text-pink-600" href="#products">Products</a>
            <a className="hover:text-pink-600" href="#about">About</a>
            <a className="hover:text-pink-600" href="#contact">Contact</a>
          </nav>

          {/* Contact info */}
          <div className="font-semibold">
            <p>Email: hello@colorpencil.fun</p>
            <p>Phone: (555) 0123‑456</p>
            <p className="mt-2">© {new Date().getFullYear()} ColorPencil</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
