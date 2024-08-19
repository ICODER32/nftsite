import icon_1 from "../../assets/how-it-work-icon-1.png";
import icon_2 from "../../assets/how-it-work-icon-2.png";
import icon_3 from "../../assets/how-it-work-icon-3.png";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works-wrapper">
      <div className="how-it-works-container container">
        <div className="section-header">
          <div>
            <h2>
              How it <span>works</span>
            </h2>
            <p>
              Discover the hottest NFTs captivating the digital market's
              attention.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="how-it-works-cards">
          <div className="how-it-works-card">
            <div>
              <img src={icon_1} alt="" className="img-fluid" />
            </div>
            <h5>Upload your best and unique work</h5>
            <p>
              Start upload your work by creating an account and connect the
              crypto wallet.
            </p>
          </div>
          <div className="how-it-works-card">
            <div>
              <img src={icon_2} alt="" className="img-fluid" />
            </div>
            <h5>Fill out product info & price</h5>
            <p>
              Fill out the required info and set for pricing and buying option
            </p>
          </div>
          <div className="how-it-works-card">
            <div>
              <img src={icon_3} alt="" className="img-fluid" />
            </div>
            <h5>Voila!, your product is on the radar</h5>
            <p>
              Let we work on your products, just monitor the traffic on the
              dashboard and waiting for the income, then relax
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
