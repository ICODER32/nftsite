import NftCard from "../NftCard/NftCard";
import "./Auction.css";

const Auction = () => {
  return (
    <div className="auction-wrapper">
      <div className="auction-container container">
        <div className="section-header">
          <div>
            <h2>
              Live <span>Auction</span> nFTs
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

        <div className="auction-cards">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <NftCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
