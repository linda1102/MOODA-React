import { Button } from "@/components/ui/button";
import { posts } from "@/data/Posts";
import { Link } from "react-router-dom";

const colors = [
  "bg-[#f5eee9]",
  "bg-[#f1ece6]",
  "bg-[#f3e8e3]",
  "bg-[#f5f1eb]",
];

const Posts = () => {
  return (
    <main className="min-h-screen bg-white px-5 py-10 md:px-16 md:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-900">
            MODОA COLLECTION
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-red-950 md:text-6xl">
            Our Products
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500 md:text-base">
            Discover timeless furniture and home accessories
            designed to bring comfort and character to your space.
          </p>
        </section>

        {/* Product List */}
        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              All Products
            </h2>

            <p className="text-sm text-gray-500">
              {posts.length} Products
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((product, index) => (
              <Link
                to={`/posts/${product.id}`}
                key={product.id}
                className="group"
              >
                {/* Product Image */}
                <div
                  className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl ${
                    colors[index % colors.length]
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[85%] w-[85%] object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4">
                  <h3 className="line-clamp-2 min-h-[3rem] text-sm font-semibold text-gray-800 transition-colors group-hover:text-red-900 md:text-base">
                    {product.title}
                  </h3>

                  <p className="mt-1 font-bold text-red-950">
                    ${product.price}
                  </p>

                  <Button
                    className="mt-3 w-full rounded-full bg-red-900 text-sm text-white transition-colors hover:bg-red-800"
                  >
                    View Product
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Posts;