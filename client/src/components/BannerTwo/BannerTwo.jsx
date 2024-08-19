import hero_1 from "../../assets/hero-1.png";
import hero_2 from "../../assets/hero-2.png";
import hero_3 from "../../assets/hero-3.png";
import hero_4 from "../../assets/hero-4.png";
import hero_5 from "../../assets/hero-5.png";
import hero_6 from "../../assets/hero-6.png";

import character_1 from "../../assets/character-1.png";
import character_2 from "../../assets/character-2.png";
import character_3 from "../../assets/character-3.png";
import character_4 from "../../assets/character-4.png";
import character_5 from "../../assets/character-1.png";
import fade_Img from "../../assets/fade-img.png";
import "./BannerTwo.css";

const BannerTwo = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section-container container">
        <div
          className="hero-section-top"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2>
          Token Tycoon Territory<br /> Dive into  <span>the World</span>{" "}
            <span> of Roohoof</span> <br />  <span>Rascals</span>!
          </h2>
        </div>

        <div
          className="hero-section-bottom"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="bottom-left">
            <div className="hero-card">
              
              <img src={character_1} alt="" className="img-fluid" />
            </div>
            <div className="bottom-cards-right">
              <div className="hero-card">
                <img src={character_2} alt="" className="img-fluid" />
              </div>
              <div className="hero-card">
                <img src={character_3} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="bottom-center">
            <div className="hero-card-center">
              <img src={character_4} alt="" className="img-fluid w-100" />
            </div>
          </div>
          <div className="bottom-right">
            <div className="bottom-cards-right">
              <div className="hero-card">
                <img src={hero_1} alt="" className="img-fluid" />
              </div>
              <div className="hero-card">
                <img src={hero_4} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="hero-card">
              <img src={hero_5} alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <p className="sub-heading" data-aos="fade-up" data-aos-duration="2000">
        Token Tycoon Territory is an immersive NFT project featuring 100 unique characters known as the Roohoof Rascals. Each character combines humor, charisma, and a rich backstory, offering more than just digital art—it's an engaging ecosystem valuing creativity, community, and sustainability.
        </p>
      </div>
    </div>
  );
};

export default BannerTwo;
