// ProductCard: small card with icon, name, description and a cheerful button
export default function ProductCard({ icon, name, description, price, accent = "from-sky-400 to-indigo-400" }) {
  return (
    <div className="group bg-white/90 border border-sky-100 rounded-3xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition">
      {/* Icon area */}
      <div className="relative mb-4">
        <div className={`absolute inset-0 blur-xl rounded-full bg-gradient-to-r ${accent} opacity-40`} />
        <div className="relative grid place-items-center">
          <div className="group-hover:animate-bounce transition-transform">{icon}</div>
        </div>
      </div>

      {/* Name & description */}
      <h3 className="text-xl font-extrabold text-sky-800">{name}</h3>
      <p className="mt-1 text-sky-700/80 text-sm">{description}</p>
      <div className="mt-3 text-pink-600 font-extrabold">{price}</div>

      {/* Action */}
      <button className="mt-5 inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-bold bubble-shadow hover:scale-105 active:scale-95 transition">
        Add to Cart
      </button>
    </div>
  );
}
