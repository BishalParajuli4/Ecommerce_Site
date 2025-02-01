import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import {
  IoIosAddCircleOutline,
  IoMdCloseCircleOutline,
  IoMdMenu,
} from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import LoginForm from "../Forms/login";
import Modal from "./modal";
import AddProductForm from "../Forms/addproduct";

const Navbar = () => {
  const [isAddProductOpen, setAddProductOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="text-xl bg-[#F4FFC3] text-[#f7ad0d] flex justify-between items-center px-6 py-4 lg:px-[10rem]">
        {/* Logo */}
        <a href="" className="font-bold text-3xl mr-18 font-serif underline">
          Bhat#Bhateni
        </a>

        {/* Hamburger Menu for Mobile */}
        <IoMdMenu
          className="text-3xl cursor-pointer lg:hidden font-serif"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />

        {/* Nav Links (Desktop & Mobile) */}
        <div
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent flex-col lg:flex-row lg:flex ${
            isMenuOpen ? "flex" : "hidden"
          } lg:space-x-8 font-bold p-4 lg:p-0 shadow-lg lg:shadow-none font-serif`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block p-2 lg:p-0 ${
                  isActive ? "text-[#f7ad0d]" : "text-[#f79013]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Search Bar */}
          <div className="flex items-center bg-white h-9 rounded-md px-4 mt-2 lg:mt-0 font-serif">
            <input
              type="text"
              placeholder="search here .."
              className="outline-none"
            />
            <CgSearch className="text-2xl cursor-pointer ml-2 font-serif" title="Search" />
          </div>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex space-x-6 items-center">
          <IoIosAddCircleOutline
            onClick={() => setAddProductOpen(true)}
            className="text-4xl cursor-pointer hover:scale-125 transition-transform duration-200 ml-5"
            title="Add Product"
          />
          <IoCart
            className="text-4xl cursor-pointer hover:scale-110 transition-transform duration-200"
            title="Cart"
          />
          <FaRegUserCircle
            onClick={() => setLoginOpen(true)}
            className="text-4xl cursor-pointer hover:scale-110 transition-transform duration-200"
            title="Login"
          />
          
        </div>
      </nav>

      {/* Modals */}
      {isAddProductOpen && (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircleOutline
                onClick={() => setAddProductOpen(false)}
                className="text-[#f7ad0d] text-xl cursor-pointer hover:scale-125 transition-transform duration-200"
              />
            </div>
            <AddProductForm />
          </div>
        </Modal>
      )}

      {isLoginOpen && (
        <Modal>
          <div className="bg-white w-2/6 rounded-md p-4">
            <div className="flex justify-end">
              <IoMdCloseCircleOutline
                onClick={() => setLoginOpen(false)}
                className="text-[#f7ad0d] text-xl cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>
            <LoginForm />
          </div>
        </Modal>
      )}
    </>
  );
};
export default Navbar;
