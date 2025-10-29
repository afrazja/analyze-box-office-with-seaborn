import ProductCard from "./ProductCard.jsx";
import PencilIcon from "./icons/PencilIcon.jsx";
import CrayonIcon from "./icons/CrayonIcon.jsx";
import NotebookIcon from "./icons/NotebookIcon.jsx";
import EraserIcon from "./icons/EraserIcon.jsx";

// ProductGrid: showcases 4 sample items kids would love
export default function ProductGrid() {
  return (
    <section id="products" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-800 text-center">
          Our Favorite Goodies
        </h2>
        <p className="text-sky-700/80 text-center mt-2 max-w-2xl mx-auto">
          Hand‑picked stationery that makes school time bright and fun!
        </p>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            icon={<PencilIcon className="w-16 h-16" />}
            name="Rainbow Pencils"
            description="Smooth writing with a burst of colors."
            price="$4.99"
            accent="from-pink-300 to-rose-400"
          />
          <ProductCard
            icon={<CrayonIcon className="w-16 h-16" />}
            name="Colorful Crayons"
            description="Big, bold colors for little artists."
            price="$5.49"
            accent="from-emerald-300 to-teal-400"
          />
          <ProductCard
            icon={<NotebookIcon className="w-16 h-16" />}
            name="Fun Notebooks"
            description="Doodle‑ready pages with cute covers."
            price="$3.99"
            accent="from-sky-300 to-indigo-400"
          />
          <ProductCard
            icon={<EraserIcon className="w-16 h-16" />}
            name="Magic Erasers"
            description="Soft, smudge‑free oops‑fixers."
            price="$2.49"
            accent="from-amber-300 to-yellow-400"
          />
        </div>
      </div>
    </section>
  );
}
