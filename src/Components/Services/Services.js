import React, { useState } from "react";
import "./Services.css";
import Cards from "./Cards";
function Services() {
  const [cardLIst, setCardList] = useState(
    {
      icon: "fa-solid fa-layer-group",
      title: "web development",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "web development",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "web development",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "web development",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "web development",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "web development",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    }
  );
  return (
    <div className="services pd-x" id="Services">
      <div className="pd-y">
        <h4 className="section-title">My Awesome Service</h4>
        <p className="section-desc">
          There are many variations of passages of Lorem Ipsum available, but{" "}
          <br /> the majority have suffered alteration.
        </p>
        <Cards cardLIst={cardLIst} />
      </div>
    </div>
  );
}

export default Services;
