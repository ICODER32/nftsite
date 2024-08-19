import { NavLink } from "react-router-dom";
import icon_1 from "../../assets/category-icon-1.png";
import icon_2 from "../../assets/category-icon-2.png";
import icon_3 from "../../assets/category-icon-3.png";
import icon_4 from "../../assets/category-icon-4.png";
import icon_5 from "../../assets/category-icon-5.png";
import icon_6 from "../../assets/category-icon-6.png";
import icon_7 from "../../assets/category-icon-7.png";
import icon_8 from "../../assets/category-icon-8.png";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-wrapper">
      <div className="categories-container container">
        <div
          className="section-header"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div>
            <h2>
              Browse <span>categories</span>
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

        <div
          className="categories-cards"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-2">
              <div className="icon-container">
                {/* <img src={icon_2} alt="" className="img-fluid" /> */}
                <h3>Opening Soon</h3>
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Gaming</h3>
            </div>
          </div>
          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-3">
              <div className="icon-container">
                {/* <img src={icon_2} alt="" className="img-fluid" /> */}
                <h3>Opening Soon</h3>
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Fashion</h3>
            </div>
          </div>
          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-4">
              <div className="icon-container">
                {/* <img src={icon_2} alt="" className="img-fluid" /> */}
                <h3>Opening Soon</h3>
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Coin</h3>
            </div>
          </div>
          <NavLink to="/characters" className="text-white">
            <div className="categories-card">
              <div className="categories-card-top  categories-card-top-5">
                <div className="icon-container"></div>
              </div>

              <div className="categories-card-bottom ">
                <h3>Character</h3>
              </div>
            </div>
          </NavLink>

          {/* <div className="categories-card">
            <div className="categories-card-top">
              <div className="icon-container">
                <img src={icon_1} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Art</h3>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-2">
              <div className="icon-container">
                <img src={icon_2} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Collectibles</h3>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-3">
              <div className="icon-container">
                <img src={icon_3} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Music</h3>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-4">
              <div className="icon-container">
                <img src={icon_4} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Photography</h3>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-5">
              <div className="icon-container">
                <img src={icon_5} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Video</h3>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-6">
              <div className="icon-container">
                <img src={icon_6} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Utility</h3>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-7">
              <div className="icon-container">
                <img src={icon_7} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Sport</h3>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-top  categories-card-top-8">
              <div className="icon-container">
                <img src={icon_8} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="categories-card-bottom ">
              <h3>Virtual Worlds</h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
