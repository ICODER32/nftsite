import { Footer } from "../../components/";
import blaze from "../../assets/blaze.png";
import buff from "../../assets/buff.png";
import jigsaw from "../../assets/jigsaw.png";
import groovy from "../../assets/groovy.png";
import swagger from "../../assets/swagger.png";
import sly from "../../assets/sly.png";

import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../../../public/Earth";
import Monkey from "../../../public/Monkey";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { FaImage } from "react-icons/fa";
import "react-loading-skeleton/dist/skeleton.css";

import "./Characters.css";
import useNfts from "../../hooks/useNfts";
import CharacterCard from "./components/CharacterCard";

const Loading = () => {
  return (
    <>
      <div className="loading-cards">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="loading-card" key={index}>
            <div className="loading-card-left">
              <div className="card-img-box">
                <FaImage className="icon" />
              </div>
            </div>
            <div className="character-card-right">
              <div className="author">
                <div>
                  <div className="avatar"></div>
                </div>
                <div>
                  <div className="avatar-line"></div>
                  <div className="avatar-line"></div>
                </div>
              </div>

              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Characters = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { nfts } = useNfts();

  const characterImages = {
    blaze,
    buff,
    jigsaw,
    groovy,
    swagger,
    sly,
  };
  const [imagePreviews, setImagePreviews] = useState(
    Array.from({ length: 5 }, () => null)
  );

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const previews = [...imagePreviews];
        previews[index] = reader.result;
        setImagePreviews(previews);
      };
      reader.readAsDataURL(file);
    } else {
      const previews = [...imagePreviews];
      previews[index] = null;
      setImagePreviews(previews);
    }
  };

  // Simulate loading effect with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="characters-wrapper">
        <div className="characters-container container">
          <div className="characters-banner">
            <h2 data-aos="fade-up" data-aos-duration="2000">
              Meet the <span>Roohoof Rascals</span>, The Vanguard of Token
              Tycoon Territory’s NFT Revolution!
            </h2>
            <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
              Step into the enchanting world of the Roohoof Rascals, the daring
              pioneers of Token Tycoon Territory’s groundbreaking NFT
              Collection. These whimsical digital creatures are more than just
              collectibles; they’re vibrant avatars of creativity and adventure
              in the dynamic universe of NFTs. Discover their unique
              personalities and boundless charm as they lead the charge into a
              new era of innovation and excitement!
            </p>
          </div>

          <div className="characters-cards">
            {nfts.map((nft, index) => {
              console.log(nft);
              return (
                <>
                  <CharacterCard
                    key={index}
                    name={nft.name}
                    opensea_url={nft.opensea_url}
                    // reverse index to get the correct image
                    img1={characterImages[nft.name.toLowerCase().split(" ")[0]]}
                    identifier={nft.identifier}
                    nftimg={nft.display_image_url}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Characters;
