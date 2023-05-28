import React from "react";
import food2 from "../../assets/food2.png";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <AnimatePresence>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: "0.2",
            }}
          >
            <div className="home-text">
              <h1>
                <span>Welcome</span> to The world of Tasty & Fresh Food.
              </h1>

              <p>
                Molestie ac feugiat sed lectus. Cursus sit amet <br /> dictum
                sit amet. Egestas diam in arcu.
              </p>
              <a href="#" className="btn">
                Book a Table
              </a>
            </div>
          </motion.h1>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: "0.2",
            }}
          >
            <div className="home-img">
              <img src={food2} alt="" />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Home;
