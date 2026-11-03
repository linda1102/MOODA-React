
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/posts" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="flex items-center justify-between bg-red-900 px-5 py-4 text-white md:px-16">
      {/* Logo */}
      <NavLink to="/" className="text-xl font-bold tracking-[0.2em]">
        M O O D A
      </NavLink>

      {/* Navigation */}
      <div className="flex items-center gap-1 md:gap-3">
        {navItems.map((item) => (
          <Button
            key={item.path}
            asChild
            variant="ghost"
            className="rounded-full px-3 text-white hover:bg-red-800 hover:text-white md:px-5"
          >
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline underline-offset-8"
                  : "font-medium"
              }
            >
              {item.name}
            </NavLink>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
