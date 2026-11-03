
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { posts } from "../data/Posts";

const colors = [
  "bg-[#f3e6df]",
  "bg-[#eee4d8]",
  "bg-[#e9d8d0]",
  "bg-[#f1ebe3]",
];

const Home = () => {
  const featuredProducts = [...posts]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  const heroProduct = featuredProducts[0];

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* HERO */}
      <section className="px-5 py-10 md:px-16 md:py-16">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl p-8 md:grid-cols-2 md:p-14">

          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-red-900">

            </p>

            <h1 className="text-4xl font-bold leading-tight text-red-950 md:text-6xl">
              Elevate Your
              <br />
              Everyday Living.
            </h1>

            <p className="mt-5 max-w-md leading-relaxed text-gray-600">
              Thoughtfully designed furniture and home accessories
              to bring comfort, character, and timeless beauty
              into your space.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-red-900 px-7 py-6 text-white hover:bg-red-800"
              >
                <Link to="/posts">Shop Collection</Link>
              </Button>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-red-900">
                  15+
                </p>
                <p className="text-sm text-gray-500">
                  Unique Products
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-red-900">
                  Timeless
                </p>
                <p className="text-sm text-gray-500">
                  Design Collection
                </p>
              </div>
            </div>
          </div>

          {heroProduct && (
            <Link
              to={`/posts/${heroProduct.id}`}
              className="group relative flex h-72 items-center justify-center md:h-[430px]"
            >
              <div className="absolute inset-4 rounded-full bg-[#ead5ca]" />

              <img
                src={heroProduct.image}
                alt={heroProduct.title}
                className="relative h-full w-full scale-110 object-contain transition duration-500 group-hover:scale-125"
              />

              <div className="absolute bottom-4 left-0 rounded-xl bg-white/90 px-5 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-xs text-gray-500">
                  Featured Piece
                </p>

                <p className="font-bold text-red-900">
                  {heroProduct.title}
                </p>

                <p className="text-sm font-semibold">
                  ${heroProduct.price.toFixed(2)}
                </p>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* CATEGORY */}
      <section className="px-5 py-8 md:px-16">
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest text-red-900">
            EXPLORE OUR COLLECTION
          </p>

          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { name: "Furniture", description: "Comfort meets style" },
            { name: "Lighting", description: "Set the right mood" },
            { name: "Decor", description: "Details that matter" },
            { name: "Home Accessories", description: "Personalize your space" },
          ].map((category, index) => (
            <Link
              to="/posts"
              key={category.name}
              className={`rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-md ${
                colors[index]
              }`}
            >
              <p className="text-lg font-bold text-red-950">
                {category.name}
              </p>

              <p className="mt-2 text-sm text-gray-600">
                {category.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-red-900">
                Explore
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-5 py-12 md:px-16">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-red-900">
              CURATED FOR YOUR HOME
            </p>

            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Featured Products
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Discover our standout pieces.
            </p>
          </div>

          <Link
            to="/posts"
            className="text-sm font-semibold text-red-900 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <Link
              to={`/posts/${product.id}`}
              key={product.id}
              className="group"
            >
              <div
                className={`flex h-48 items-center justify-center overflow-hidden rounded-2xl p-5 md:h-64 ${
                  colors[index % colors.length]
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full scale-110 object-contain transition duration-500 group-hover:scale-125"
                />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 transition group-hover:text-red-900">
                  {product.title}
                </h3>

                <p className="mt-1 font-bold text-red-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROMOTION */}
      <section className="px-5 py-8 md:px-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-red-900 p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-red-200">
              MAKE YOUR SPACE YOUR OWN
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A little detail.
              <br />
              A whole new feeling.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-red-100">
              Find the perfect pieces to bring warmth and
              personality into every corner of your home.
            </p>
          </div>

          <Button
            asChild
            className="rounded-full bg-white px-7 py-6 text-red-900 hover:bg-red-100"
          >
            <Link to="/posts">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12 border-t border-[#eaded5] px-5 py-8 md:px-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h2 className="font-bold tracking-[0.2em] text-red-900">
              M O O D A
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Thoughtful pieces for beautiful living.
            </p>
          </div>

          <p className="text-sm text-gray-400">
            © 2026 M O O D A Home Objects. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
