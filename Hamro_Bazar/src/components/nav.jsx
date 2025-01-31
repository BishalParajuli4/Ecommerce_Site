import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-red-500 px-4" : "text-white px-4"
        }
      >
        Contact Us
      </NavLink>
    </div>
  );
};
export default Nav;
