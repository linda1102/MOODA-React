import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Product";
import About from "./pages/About";
import Home from "./pages/Home";
import PostsDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

export function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />

        {/* Product Detail */}
        <Route path="/posts/:id" element={<PostsDetail />} />

        {/* Shopping Cart */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
