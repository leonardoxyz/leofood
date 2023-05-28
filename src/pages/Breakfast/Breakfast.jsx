import React from "react";
import break1 from "../../assets/break1.png";
import break2 from "../../assets/break2.png";
import break3 from "../../assets/break3.png";
import break4 from "../../assets/break4.png";
import { motion, AnimatePresence } from "framer-motion";

const Breakfast = () => {
  return (
    <>
      <section className="container">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: "0.2",
          }}
        >
          <div className="main-text">
            <h2>Breakfast</h2>
            <p>9.00 am - 11.00 am</p>
          </div>
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: "0.2",
          }}
        >
          <div className="container-box">
            <div className="c-mainbx">
              <div className="container-img">
                <img src={break1} alt="" />
              </div>
              <div className="container-text">
                <p>Tasty & Fresh Food</p>
              </div>
            </div>

            <div className="c-mainbx">
              <div className="container-img">
                <img src={break2} alt="" />
              </div>
              <div className="container-text">
                <p>Tasty & Fresh Food</p>
              </div>
            </div>

            <div className="c-mainbx">
              <div className="container-img">
                <img src={break3} alt="" />
              </div>
              <div className="container-text">
                <p>Tasty & Fresh Food</p>
              </div>
            </div>

            <div className="c-mainbx">
              <div className="container-img">
                <img src={break4} alt="" />
              </div>
              <div className="container-text">
                <p>Tasty & Fresh Food</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Breakfast;
