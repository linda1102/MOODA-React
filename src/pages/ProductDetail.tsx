import { Button } from "@/components/ui/button"
import { posts } from "@/data/Posts"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"

const PostsDetail = () => {
  const { id } = useParams()
  const post = posts.find((item) => item.id === Number(id))

  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState("")

  if (!post) {
    return <h1 className="p-10 text-center text-red-900">Product not found</h1>
  }

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")

    const existingProduct = existingCart.find(
      (item: any) => item.id === post.id
    )

    if (existingProduct) {
      existingProduct.quantity += quantity
    } else {
      existingCart.push({
        ...post,
        quantity,
      })
    }

    localStorage.setItem("cart", JSON.stringify(existingCart))

    setMessage(`${post.title} added to cart!`)
  }

  const totalPrice = post.price * quantity

  return (
    <main className="min-h-screen bg-white px-5 py-10 md:px-16">
      <p className="mb-3 text-sm font-medium tracking-widest text-red-900">
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex h-[350px] items-center justify-center rounded-2xl bg-[#f3e6df] p-8 md:h-[500px]">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-red-900">{post.title}</h1>

          <p className="mt-4 text-2xl font-extrabold text-red-900">
            ${post.price}
          </p>

          <p className="mt-6 leading-relaxed text-gray-600">{post.content}</p>

          {/* Quantity */}
          <div className="mt-8">
            <p className="mb-3 font-semibold text-gray-800">Quantity</p>

            <div className="flex w-fit items-center overflow-hidden rounded-full border border-red-900">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-5 py-2 text-lg text-red-900 hover:bg-red-100"
              >
                −
              </button>

              <span className="min-w-12 text-center font-semibold">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-5 py-2 text-lg text-red-900 hover:bg-red-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="mt-6 flex items-center justify-between border-t border-red-200 pt-4">
            <span className="font-medium text-gray-600">Total Price</span>

            <span className="text-xl font-bold text-red-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <Button
            onClick={handleAddToCart}
            className="mt-6 w-full rounded-full bg-red-900 py-6 text-white hover:bg-red-700 md:w-64"
          >
            Add to Cart
          </Button>

          {message && (
            <p className="mt-3 text-sm font-medium text-green-700">{message}</p>
          )}

          <Link
            to="/posts"
            className="mt-5 text-sm text-red-900 hover:underline"
          >
            Back to Products
          </Link>
        </div>
      </div>

      {/* Recommended Products */}
      <section className="mt-20">
        <div className="mb-6">
          <p className="text-sm font-medium tracking-widest text-red-900">
            MORE TO LOVE
          </p>

          <h2 className="mt-2 text-3xl font-bold text-red-900">
            You May Also Like
          </h2>
        </div>

        {(() => {
          const getCategory = (title: string) => {
            const name = title.toLowerCase()

            if (
              name.includes("chair") ||
              name.includes("sofa") ||
              name.includes("stool")
            ) {
              return "seating"
            }
            if (name.includes("lamp")) return "lamp"
            if (name.includes("table")) return "table"
            if (name.includes("vase")) return "vase"
            if (name.includes("shelf")) return "shelf"
            if (name.includes("mirror")) return "mirror"
            if (name.includes("cushion")) return "cushion"
            if (name.includes("bowl")) return "bowl"
            if (name.includes("radio")) return "radio"

            return "other"
          }

          const recommendedProducts = posts
            .filter(
              (item) =>
                item.id !== post.id &&
                getCategory(item.title) === getCategory(post.title)
            )
            .slice(0, 4)

          return recommendedProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {recommendedProducts.map((product, index) => (
                <Link
                  to={`/posts/${product.id}`}
                  key={product.id}
                  className="group"
                >
                  <div
                    className={`flex h-48 items-center justify-center overflow-hidden rounded-2xl p-5 md:h-60 ${
                      [
                        "bg-[#f3e6df]",
                        "bg-[#eee4d8]",
                        "bg-[#e9d8d0]",
                        "bg-[#f1ebe3]",
                      ][index % 4]
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full scale-125 object-contain transition duration-300 group-hover:scale-150"
                    />
                  </div>

                  <h3 className="mt-3 font-bold text-gray-800">
                    {product.title}
                  </h3>

                  <p className="mt-1 font-extrabold text-red-900">
                    ${product.price}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No similar products available yet.</p>
          )
        })()}
      </section>
    </main>
  )
}

export default PostsDetail
