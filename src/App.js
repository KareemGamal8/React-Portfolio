import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    const btnHandler = () => {
      if (window.scrollY <= 10) {
        setBtn(true);
      } else {
        setBtn(false);
      }
    };
    window.addEventListener("scroll", btnHandler);
  });
  const btnScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <button
        className={btn ? "btn-hidden" : "btn-visible"}
        onClick={btnScroll}
      >
        <i className="fa-solid fa-arrow-up-long"></i>
      </button>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
