import newsletter_img from "../../assets/newsletter-img.png";
import "./NewLetter.css";

const NewLetter = () => {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-container container">
        <div className="newsletter-left">
          <img src={newsletter_img} alt="" className="img-fluid w-100" />
        </div>
        <div className="newsletter-right">
          <h2>
            Join our <span>weekly</span> <br /> digest
          </h2>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className="input-box">
            <input type="email" placeholder="Enter your email here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
