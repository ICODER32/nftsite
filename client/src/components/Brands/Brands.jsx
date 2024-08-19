import brand_1 from "../../assets/brand-1.png";
import brand_2 from "../../assets/brand-2.svg";
import brand_3 from "../../assets/brand-3.svg";
import brand_4 from "../../assets/brand-4.svg";
import brand_5 from "../../assets/brand-5.svg";
import "./Brands.css";

const Brands = () => {
  return (
    <div className="brands-container container">
      <div>
        <img src={brand_1} alt="" className="img-fluid" />
      </div>
      <div>
        <img src={brand_2} alt="" className="img-fluid" />
      </div>
      <div>
        <img src={brand_3} alt="" className="img-fluid" />
      </div>
      <div>
        <img src={brand_4} alt="" className="img-fluid" />
      </div>
      <div>
        <img src={brand_5} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default Brands;
