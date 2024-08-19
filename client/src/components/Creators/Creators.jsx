import user_1 from "../../assets/user-1.png";
import eth_icon from "../../assets/eth-icon.png";
import "./Creators.css";

const Creators = () => {
  return (
    <div className="creators-wrapper">
      <div className="creators-container container">
        <div className="section-header">
          <div>
            <h2>
              Top <span>creators</span>
            </h2>
            <p>
              Discover the hottest NFTs captivating the digital market's
              attention.
            </p>
          </div>
          <a href="" className="btn">
            View all
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="creators-cards">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div className="creator-card" key={item}>
              <div className="card-top">
                <div>
                  <img src={user_1} alt="" className="img-fluid" />
                </div>
                <div>
                  <h4>Olivia Rhye</h4>
                  <p>
                    <img src={eth_icon} alt="" className="img-fluid" />{" "}
                    <span>3.45 ETH</span>
                  </p>
                </div>
              </div>
              <button>Follow</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creators;
