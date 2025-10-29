import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Footer from './components/Footer.jsx'

// App assembles our landing page sections
export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />

      {/* Main content sections */}
      <main className="flex-1">
        <Hero />
        <ProductGrid />

        {/* Simple About blurb for completeness */}
        <section id="about" className="py-14">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-800">About ColorPencil</h2>
            <p className="mt-3 text-sky-700/90 text-lg">
              We curate kid‑friendly stationery with bright colors, soft shapes, and durable materials.
              Everything here is designed to spark creativity and make learning joyful.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
