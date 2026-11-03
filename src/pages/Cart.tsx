import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/Posts";

type CartItem = (typeof posts)[number] & {
  quantity: number;
};

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id: number) => {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    updateCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-whitepx-5 py-10 md:px-16">
      <p className="text-sm font-medium tracking-widest text-red-900"></p>

      <h1 className="mt-2 text-4xl font-bold text-red-900">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Your cart is empty
          </h2>

          <p className="mt-3 text-gray-600">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Button
            asChild
            className="mt-6 rounded-full bg-red-900 text-white hover:bg-red-700"
          >
            <Link to="/posts">Explore Products</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_350px]">
          {/* Cart Items */}
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl bg-white p-4 sm:flex-row sm:items-center"
              >
                <div className="flex h-32 w-full items-center justify-center rounded-xl bg-[#f3e6df] p-4 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="mt-1 font-semibold text-red-900">
                    ${item.price}
                  </p>

                  {/* Quantity */}
                  <div className="mt-3 flex w-fit items-center overflow-hidden rounded-full border border-red-900">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-4 py-1 text-red-900 hover:bg-red-100"
                    >
                      −
                    </button>

                    <span className="min-w-10 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-4 py-1 text-red-900 hover:bg-red-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-red-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-3 text-sm text-gray-500 hover:text-red-900"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6">
            <h2 className="text-xl font-bold text-red-900">
              Order Summary
            </h2>

            <div className="mt-5 flex justify-between text-gray-600">
              <span>Items</span>
              <span>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <div className="mt-4 flex justify-between border-t pt-4">
              <span className="font-semibold text-gray-800">
                Total
              </span>

              <span className="text-xl font-bold text-red-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <Button
              className="mt-6 w-full rounded-full bg-red-900 text-white hover:bg-red-700"
              onClick={() =>
                alert("Checkout feature coming soon!")
              }
            >
              Proceed to Checkout
            </Button>

            <Button
              asChild
              variant="outline"
              className="mt-3 w-full rounded-full border-red-900 text-red-900 hover:bg-red-50"
            >
              <Link to="/posts">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;