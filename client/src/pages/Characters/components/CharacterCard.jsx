/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

export default function CharacterCard({
  img1,
  nftimg,
  name,
  opensea_url,
  identifier,
}) {
  const [eth_price, setEthPrice] = useState(0);
  const [usd_price, setUsdPrice] = useState(0);
  const getNftPrice = async (id) => {
    try {
      const response = await fetch(`/api/v1/nfts/get-nft/${id}`);
      const data = await response.json();
      console.log(data);
      const price = Number(data.data.price.current.value);
      console.log(price);
      //   convert from wei to eth
      const eth_price = price / 1000000000000000000;
      const usd_price = (eth_price * 3738.7).toFixed(2);
      setUsdPrice(usd_price);
      setEthPrice(eth_price);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNftPrice(identifier);
  }, []);
  return (
    <div className="character-card" data-aos="fade-up" data-aos-duration="2000">
      <div className="character-card-left">
        <img src={img1} alt="" className="img-fluid" />
      </div>
      <div className="character-card-right">
        <p>
          {identifier}:{name}
        </p>
        <div className="upload-nft">
          <img className="nft-image" src={nftimg} />
        </div>

        {/* <div className="author">
                      <div>
                        <img src={user_1} alt="" className="img-fluid" />
                      </div>
                      <div>
                        <h4>Moon fall</h4>
                        <p>By @moon_fall</p>
                      </div>
                    </div> */}

        <div className="price">
          <div>
            <h5>__ ETH</h5>
            <p>Latest Bid</p>
          </div>
          <div>
            <h5>{eth_price} ETH</h5>
            <p>Price</p>
          </div>
          <div>
            <h5>$ {usd_price}</h5>
            <p>USD</p>
          </div>
        </div>

        <a target="_blank" href={opensea_url} className="btn">
          <span>Buy Now</span>
        </a>
      </div>
    </div>
  );
}
