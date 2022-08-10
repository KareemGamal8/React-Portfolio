import React from "react";
import "./Services.css";
export default function Cards({ cardLIst }) {
  const card = cardLIst.map(({ icon, title, desc }, idx) => {
    <div className="card" key={idx}>
      <i className={icon}></i>
      <div className="card-title">{title}</div>
      <div className="card-desc">{desc}</div>
    </div>;
  });
  return <div>{card}</div>;
}
