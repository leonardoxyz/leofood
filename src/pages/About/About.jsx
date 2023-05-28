import React from "react";
import aboutImg from "../../assets/food4.png";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="" />
        </div>

        <div className="about-text">
          <h2>
            The Healthy Food <br /> For walthy Mood
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            ipsum. Magni accusamus consequuntur, ab modi provident non atque ex
            dolor cupiditate quae! Maxime quod atque ullam inventore fugit
            pariatur aperiam.
          </p>
          <a href="#" className="btn">
            Book a Table
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
