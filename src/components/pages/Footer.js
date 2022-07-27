import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deal
        </p>

        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              className="footer-input"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              ALPHHS <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">ALPHHS copyrighted 2022</small>
          <div className="social-icons">
            <Link
              to="/"
              target="blank"
              aria-label="facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="/"
              target="blank"
              aria-label="facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-instagram-f"></i>
            </Link>
            <Link
              to="/"
              target="blank"
              aria-label="Instagram"
              className="social-icon-link facebook"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="/"
              target="blank"
              aria-label="Youtube"
              className="social-icon-link youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              to="/"
              target="blank"
              aria-label="Twitter"
              className="social-icon-link twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to="/"
              target="blank"
              aria-label="LinkedIn"
              className="social-icon-link linkedn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
