import React, { useState } from "react";
import imageMain from "../images/main-img.png";
import "./About.css";
import Main from "./Main";
import Awards from "./Awards";
import Experience from "./Experience";
import Education from "./Education";

function About() {
  const [tab, setNewTab] = useState("tab1");

  return (
    <div className="about pd-x" id="About">
      <div className="about-content pd-y">
        <div className="about-image">
          <img src={imageMain} alt="main" />
        </div>
        <div className="about-text">
          <h3 className="title">about me</h3>
          <p className="about-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered <span>alteration</span> in some form, by
            injected humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,
          </p>
          <div className="about-navbar">
            <button
              onClick={() => {
                setNewTab("tab1");
              }}
            >
              awards
            </button>

            <button
              onClick={() => {
                setNewTab("tab2");
              }}
            >
              main skills
            </button>
            <button
              onClick={() => {
                setNewTab("tab3");
              }}
            >
              experience
            </button>
            <button
              onClick={() => {
                setNewTab("tab4");
              }}
            >
              education & certification
            </button>
          </div>
          {tab === "tab1" && <Main />}
          {tab === "tab2" && <Awards />}
          {tab === "tab3" && <Experience />}
          {tab === "tab4" && <Education />}
        </div>
      </div>
    </div>
  );
}

export default About;