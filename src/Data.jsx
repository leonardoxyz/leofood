import plate1 from "./assets/break2.png";
import plate2 from './assets/break1.png'
import plate3 from './assets/break3.png'
import plate4 from './assets/break4.png'

export const plates = [
  {
    id: 0,
    name: "Steak with french fries and salad.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat alias inventore dolore perspiciatis, quibusdam modi itaque eum sunt tempora veritatis sint voluptates at distinctio debitis autem hic rerum. Culpa!",
    img: plate1,
    price: "19,90",
    stars: (
      <div style={{ color: "#ff9100" }}>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
      </div>
    ),
  },
  {
    id: 1,
    name: "Chicken with fresh vegetables.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat alias inventore dolore perspiciatis, quibusdam modi itaque eum sunt tempora veritatis sint voluptates at distinctio debitis autem hic rerum. Culpa!",
    img: plate2,
    price: "14,90",
    stars: (
      <div style={{ color: "#ff9100" }}>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
      </div>
    ),
  },
  {
    id: 1,
    name: "Sliced ​​chicken with mixed salad.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat alias inventore dolore perspiciatis, quibusdam modi itaque eum sunt tempora veritatis sint voluptates at distinctio debitis autem hic rerum. Culpa!",
    img: plate3,
    price: "9,90",
    stars: (
      <div style={{ color: "#ff9100" }}>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
      </div>
    ),
  },
  {
    id: 1,
    name: "Burger from the house LeoFood.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat alias inventore dolore perspiciatis, quibusdam modi itaque eum sunt tempora veritatis sint voluptates at distinctio debitis autem hic rerum. Culpa!",
    img: plate4,
    price: "9,90",
    stars: (
      <div style={{ color: "#ff9100" }}>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
      </div>
    ),
  },
];
