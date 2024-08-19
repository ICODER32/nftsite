import banner from "../../assets/home-banner.png";
import banner_2 from "../../assets/character-1.png";
import CountUp from "react-countup";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-container container">
        <div className="banner-left">
          <h2>
            <span>Discover</span> <br /> digital art & <br />{" "}
            <span>Collect NFTs</span>
          </h2>
          <p>
            Dive into the vibrant realm of digital art and start your journey of
            collecting unique NFTs. Own a piece of the future while exploring a
            world where creativity knows no bounds!
          </p>

          <div className="achievements">
            <div>
              <h3>
                <CountUp
                  start={0}
                  end={10}
                  duration={2.75}
                  delay={0.5}
                ></CountUp>
                k+
              </h3>
              <p>Artworks</p>
            </div>
            <div>
              <h3>
                <CountUp
                  start={0}
                  end={5}
                  duration={2.75}
                  delay={0.5}
                ></CountUp>
                k+
              </h3>
              <p>Artists</p>
            </div>
            <div>
              <h3>
                <CountUp
                  start={0}
                  end={1}
                  duration={2.75}
                  delay={0.5}
                ></CountUp>
                k+
              </h3>
              <p>Auctions</p>
            </div>
          </div>

          <button className="btn">Explore now</button>
        </div>
        <div className="banner-right">
          {/* <div className="banner-card"></div> */}

          <img src={banner} alt="" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
