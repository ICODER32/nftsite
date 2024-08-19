import nft_1 from "../../assets/nft-1.png";
import user_1 from "../../assets/user-1.png";
import "./NftCard.css";

const NftCard = () => {
  return (
    <div className="nft-card">
      <div className="nft-card-top">
        
        <img src={nft_1} alt="" className="img-fluid" />
      </div>

      <div className="nft-card-bottom">
        <div className="author">
          <div>
            <img src={user_1} alt="" className="img-fluid" />
          </div>
          <div>
            <h4>Moon fall</h4>
            <p>By @moon_fall</p>
          </div>
        </div>

        <div className="price">
          <div>
            <h5>3.45 ETH</h5>
            <p>Latest Bid</p>
          </div>
          <div>
            <h5>0.004 ETH</h5>
            <p>Price</p>
          </div>
          <div>
            <h5>$5,300</h5>
            <p>USD</p>
          </div>
        </div>

        <button className="btn">
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  );
};

export default NftCard;
