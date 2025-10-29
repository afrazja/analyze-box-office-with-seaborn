import PencilIcon from "./icons/PencilIcon.jsx";

// Header component: contains brand logo and cheerful navigation links
export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-sky-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo: Brand name with a tiny pencil icon */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="scale-75 -mx-2 group-hover:animate-bounce transition-transform">
            <PencilIcon className="w-8 h-8" />
          </div>
          <span className="text-2xl md:text-3xl font-bold text-sky-700 tracking-wide">
            Color<span className="text-pink-500">Pencil</span>
          </span>
        </a>

        {/* Navigation links: simple and cheerful */}
        <nav className="hidden md:flex items-center gap-6 text-sky-700 font-medium">
          <a className="hover:text-pink-500 hover-wiggle" href="#home">Home</a>
          <a className="hover:text-pink-500 hover-wiggle" href="#products">Products</a>
          <a className="hover:text-pink-500 hover-wiggle" href="#about">About</a>
          <a className="hover:text-pink-500 hover-wiggle" href="#contact">Contact</a>
        </nav>

        {/* Mobile: single CTA visible */}
        <a href="#products" className="md:hidden inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-sm font-semibold bubble-shadow hover:scale-105 active:scale-95 transition">
          Shop Now!
        </a>
      </div>
    </header>
  );
}
