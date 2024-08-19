import NftCard from "../NftCard/NftCard";
import "./Trending.css";

const Trending = () => {
  return (
    <div className="trending-wrapper">
      <div className="trending-container container">
        <div className="section-header">
          <div>
            <h2>
              hot <span>trending</span> NFTs{" "}
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

        <div className="trending-cards">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <NftCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
