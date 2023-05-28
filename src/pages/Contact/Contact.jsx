import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="main-contact">
          <div className="contact-content">
            <h4>Services</h4>
            <li>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Menu</a>
              <a href="">Contact</a>
            </li>
          </div>

          <div className="contact-content">
            <h4>Partner</h4>
            <li>
              <a href="">Food Panda</a>
              <a href="">Foodie</a>
              <a href="">Food Fun</a>
              <a href="">Fresh Food</a>
            </li>
          </div>

          <div className="contact-content">
            <h4>Contact</h4>
            <li>
              <a href="">Contact Us</a>
              <a href="">Press Center</a>
              <a href="">Careers</a>
              <a href="">Faq</a>
            </li>
          </div>

          <div className="contact-content">
            <h4>Follow Us</h4>
            <li>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Pinterest</a>
            </li>
          </div>
        </div>
      </section>

      <div className="last-container">
        <div className="last-text">
          <p>
            <i class="bx bxs-copyright"></i>2023 LeoFood. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
