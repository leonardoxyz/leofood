import React from "react";
import popular from "../../assets/food2.png";
import { plates } from "../../Data";

const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <div className="main-text">
          <h2>Most Popular Dishes</h2>
          <p>
            Consectetur numquam poro nemo viniam <br /> eligendi rem adipisci
            quo modi.
          </p>
        </div>

        <div className="menu-content">
          {plates.map((plate) => (
            <React.Fragment key={plate.id}>
              <div className="row">
                <div className="row-img">
                  <img src={plate.img} alt="" />
                </div>
                <div className="menu-text">
                  <div className="menu-left">
                    <h4>{plate.name}</h4>
                  </div>
                </div>
                <div className="menu-right">
                  <h5>${plate.price}</h5>
                </div>
                <p className="menu-desc">{plate.description}</p>
                <div className="menu-star">{plate.stars}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
