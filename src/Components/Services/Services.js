import React, { useState } from "react";
import "./Services.css";
import Cards from "./Cards";
function Services() {
  const cardList = [
    {
      icon: "fa-solid fa-layer-group",
      title: "web development",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "graphic designer",
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
  ];
  return (
    <div className="services pd-x" id="Services">
      <div className="pd-y">
        <h4 className="section-title">My Awesome Service</h4>
        <p className="section-desc">
          There are many variations of passages of Lorem Ipsum available, but{" "}
          <br /> the majority have suffered alteration.
        </p>
        <div className="cards">
          {cardList.map((cardList) => {
            return (
              <div className="card">
                <i className={cardList.icon}></i>
                <div className="card-title">{cardList.title}</div>
                <div className="card-desc">{cardList.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
