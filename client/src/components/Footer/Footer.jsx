import { FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = async () => {
    if (!email) {
      return alert("Email is required");
    }

    const response = await fetch("/api/v1/mail_col/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      toast.info("Email subscribed successfully");
      document.querySelector("input[type='email']").value = "";
    } else {
      alert("Email already subscribed");
    }
  };
  return (
    <footer>
      <div className="footer-container container">
        <div
          className="footer-left"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="logo">
            <h2>
              Token <span>Tycoon</span> Territory
            </h2>
          </div>
          <p>
            Dive into Token Tycoon Territory: Discover unique NFTs and embrace
            innovation in the digital art space. Join the journey shaping the
            future of blockchain creativity.
          </p>

          <div className="social-links">
            <h4>Join our community</h4>
            <ul>
              {/* <li>
                <a href="">
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube />
                </a>
              </li> */}
              <li>
                <a target="_blank" href="https://x.com/tycoontokenter?s=21">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/tycoonterritory?igsh=MTRjM3p5a3V6ZTFjcQ=="
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-center">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <h5>Explore</h5>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://opensea.io/collection/roohoof-rascals"
                >
                  Open Sea
                </a>
              </li>

              <li>
                <NavLink to="/about-us">Get in Touch</NavLink>
              </li>
            </ul>
          </div>
          {/* <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="">Help & Support</a>
              </li>
              <li>
                <a href="">Item Details</a>
              </li>
              <li>
                <a href="">Author Profile</a>
              </li>
              <li>
                <a href="">Collection</a>
              </li>
            </ul>
          </div> */}
        </div>
        <div
          className="footer-right"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          <h5>Join our weekly digest</h5>
          <p>
            Get exclusive promotions & updates <br /> straight to your inbox.
          </p>
          <div className="input-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email here"
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
      </div>

      <p
        className="copyright"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
      >
        © 2024 Token Tycoon Territory. All rights reserved. Unauthorized use or
        reproduction of content is strictly prohibited.
      </p>
    </footer>
  );
};

export default Footer;
