import {
  Navigation,
  Banner,
  BannerTwo,
  Brands,
  Trending,
  Auction,
  Creators,
  Categories,
  HowItWorks,
  NewLetter,
  Footer,
} from "../../components/index";
import "./Home";

const Home = () => {
  return (
    <div className="home-page">
      {/* <Banner /> */}
      <BannerTwo />
      {/* <Brands /> */}
      {/* <Trending /> */}
      {/* <Auction /> */}
      {/* <Creators /> */}
      <Categories />
      {/* <HowItWorks /> */}
      {/* <NewLetter /> */}
      <Footer />
    </div>
  );
};

export default Home;
