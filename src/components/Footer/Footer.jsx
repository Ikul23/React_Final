import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <section className="footer__testimonial-subscribe container">
        <div className="footer__testimonial">
          <img src="../../assets/images/Foot_face.png" alt="Profile" />
          <blockquote>
            "Vestibulum quis porttitor dui! Quisque viverra nunc mi, <br />
            a pulvinar purus condimentum."
          </blockquote>
        </div>
        <div className="footer__subscribe">
          <h3>SUBSCRIBE</h3>
          <p>FOR OUR NEWSLETTER AND PROMOTION</p>
          <form>
            <input type="email" placeholder="Enter Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="navFooter container">
        <div className="navFooter__left-group">
          <p>© 2021 Brand All Rights Reserved.</p>
        </div>
        <div className="navFooter__right-group">
          <Link to="/facebook" className="social-link">
            <img src="../../assets/images/Foot_3_f.svg" alt="Facebook" />
          </Link>
          <Link to="/instagram" className="social-link">
            <img src="../../assets/images/Foot_3_i.png" alt="Instagram" />
          </Link>
          <Link to="/pinterest" className="social-link">
            <img src="../../assets/images/Foot_3_h.png" alt="Pinterest" />
          </Link>
          <Link to="/twitter" className="social-link">
            <img src="../../assets/images/Foot_3_t.png" alt="Twitter" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;