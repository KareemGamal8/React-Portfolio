import React from "react";
import "./Contact.css";
import image from "../images/about-9.jpg";
function Contact() {
  return (
    <div className="contact pd-x" id="Contact">
      <div className="pd-y">
        <div className="contact-content">
          <div className="section-left">
            <div className="section-title">hire me</div>
            <div className="section-desc">
              I am available for freelance work. Connect with me via phone:{" "}
              <br /> <span>01912-123456</span> or email:
              <span> admin@example.com</span>
            </div>
            <form>
              <input type="text" placeholder="Your Name*" />
              <input type="email" placeholder="Your Email*" />
              <input type="text" placeholder="Write a Subject*" />
              <textarea placeholder="Your Message"></textarea>
            </form>
            <button>send message</button>
          </div>
          <div className="section-right">
            <img src={image} alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
