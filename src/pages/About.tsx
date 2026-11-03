import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <main className="min-h-screen px-5 py-10 md:px-16">
      {/* Header */}
      <section>

        <h1 className="mt-3 text-4xl font-bold text-red-900 md:text-6xl">
          About Us
        </h1>

        <p className="mt-4 max-w-xl leading-relaxed text-gray-600">
          We believe that every space deserves to feel special.
          M O O D A brings together beautiful furniture and home
          accessories to make everyday living more comfortable,
          personal, and meaningful.
        </p>
      </section>

      {/* About Section */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex h-72 items-center justify-center rounded-2xl p-8 md:h-96">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
            alt="Beautiful home interior"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-red-900">
            Make Yourself at Home
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Our collection combines simple designs, warm colors,
            and timeless pieces. From cozy furniture to small
            decorative details, every product is selected to help
            you create a space that reflects your personality.
          </p>

          <p className="mt-4 leading-relaxed text-gray-600">
            At M O O D A, we believe that a beautiful home doesn't
            have to be complicated. Sometimes, the smallest
            details make the biggest difference.
          </p>

          <Button
            asChild
            className="mt-6 rounded-full bg-red-900 text-white hover:bg-red-700"
          >
            <Link to="/posts">Explore Our Products</Link>
          </Button>
        </div>
      </section>

      {/* Values */}
      <section className="mt-16 rounded-2xl bg-[#f3e6df] px-6 py-10 text-center md:px-12">
        <h2 className="text-3xl font-bold text-red-900">
          Our Philosophy
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-gray-600">
          Simple design, thoughtful details, and comfortable
          living. We want every piece to bring warmth and
          personality into your home.
        </p>
      </section>
    </main>
  );
};

export default About;
