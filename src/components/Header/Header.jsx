import React, { useState, useEffect } from "react";
import "../../App.css";
import { motion } from "framer-motion";
import logo from "../../assets/leofood.png";

const Header = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.div>
        <header className={isSticky ? "sticky" : ""}>
          <a href="" className="logo">
          <img className="logo-img" src={logo} alt="" />
            Leo<span>Food</span>
          </a>

          <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="h-icons">
            <a href="">
              <i className="bx bxs-heart"></i>
            </a>
            <a href="">
              <i className="bx bxs-cart"></i>
            </a>
            <a onClick={handleMenuClick}>
              <i
                className={isMenuOpen ? "bx bx-x" : "bx bx-menu"}
                id="menu-icon"
              ></i>
            </a>
          </div>
        </header>
      </motion.div>
    </>
  );
};

export default Header;
