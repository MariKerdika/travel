import React from "react";
import { Button } from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          you can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              className="footer-input"
              name="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Footer;
