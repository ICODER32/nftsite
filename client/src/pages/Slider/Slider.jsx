import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import img_5 from "../../assets/img-5.png";
import img_7 from "../../assets/img-7.png";
import img_6 from "../../assets/img-6.png";
import img_8 from "../../assets/img-8.png";
import img_9 from "../../assets/img-9.png";
import img_10 from "../../assets/img-10.png";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import SplitType from "split-type";
import "./Slider.css";

const sliderData = [
  {
    img: img_7,
    name: "Blaze",
    desc: "Blaze is the fiery leader of the Roohoof Rascals...",
  },
  {
    img: img_9,
    name: "Groovy",
    desc: "Groovy is the fun-loving, energetic member of the Roohool Rascals...",
  },
  {
    img: img_10,
    name: "BUFF",
    desc: "Buff is the strong and dependable powerhouse of the Roohool Rascals...",
  },
  {
    img: img_5,
    name: "SLY",
    desc: "Sly is the confident and witty member of Roohool Rascals...",
  },
  {
    img: img_6,
    name: "SWAGGER",
    desc: "Swagger is the stylish and trendy member of the Roohool Rascals...",
  },
  {
    img: img_8,
    name: "JIGSAW",
    desc: "Swagger is the stylish and trendy member of the Roohool Rascals...",
  },
];

const Slider = () => {
  const bg = ["#611967", "#611967", "#611967", "#611967", "#611967"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);
  const containerRef = useRef(null);

  const slideIn = (index) => {
    const slide = slidesRef.current[index];
    const title = slide.querySelector(".title");
    const title2 = slide.querySelector(".title-2");
    const button = slide.querySelector(".buy-btn span");
    const fadeName = slide.querySelector(".fade-name");
    const imgBox = slide.querySelector(".img-box img");
    const overlayTitle = slide.querySelector(".overlay-title");
    const overlayTitle2 = slide.querySelector(".overlay-title-2");
    const overlay2Title = slide.querySelector(".overlay-2-title");
    const overlay2Title2 = slide.querySelector(".overlay-2-title-2");

    const splitTitle = new SplitType(title);
    const splitTitle2 = new SplitType(title2);
    const splitButton = new SplitType(button);
    const splitFadeName = new SplitType(fadeName);

    const tl = gsap.timeline();

    tl.fromTo(
      slide,
      { autoAlpha: 0, x: "100%" },
      { autoAlpha: 1, x: "0%", duration: 0.8, ease: "power4.out" }
    )
      .from(
        splitFadeName.chars,
        {
          opacity: 0,
          stagger: 0.3,
          duration: 0.88,
        },
        "-=0.3"
      )
      .fromTo(
        imgBox,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.88,
        },
        "-=0.3"
      )
      .from(
        splitTitle.chars,
        {
          opacity: 0,
          scaleY: 0,
          y: 50,
          transformOrigin: "bottom",
          stagger: 0.3,
          duration: 0.88,
          delay: 0.2,
        },
        "-=0.3"
      )
      .fromTo(
        overlayTitle,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 0.3,
          y: 0,
          duration: 0.88,
        },
        "-=0.3"
      )
      .fromTo(
        overlayTitle2,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 0.3,
          y: 0,
          duration: 0.88,
        },
        "-=0.3"
      )
      .from(
        splitTitle2.chars,
        {
          opacity: 0,
          scaleY: 0,
          y: 50,
          transformOrigin: "bottom",
          stagger: 0.3,
          duration: 0.88,
          delay: 0.2,
        },
        "-=0.3"
      )
      .fromTo(
        overlay2Title,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 0.3,
          y: 0,
          duration: 0.88,
        },
        "-=0.3"
      )
      .fromTo(
        overlay2Title2,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 0.3,
          y: 0,
          duration: 0.88,
        },
        "-=0.3"
      );
  };

  const slideOut = (index) => {
    const tl = gsap.timeline();
    tl.to(slidesRef.current[index], {
      autoAlpha: 0,
      x: "-100%",
      duration: 0.8,
      ease: "power4.in",
    });
  };

  const handleNext = () => {
    slideOut(currentSlide);
    const nextSlide = (currentSlide + 1) % sliderData.length;
    setCurrentSlide(nextSlide);
    slideIn(nextSlide);
  };

  const handlePrev = () => {
    slideOut(currentSlide);
    const prevSlide =
      (currentSlide - 1 + sliderData.length) % sliderData.length;
    setCurrentSlide(prevSlide);
    slideIn(prevSlide);
  };

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    gsap.to(".title, .title-2", {
      x: x * 25,
      y: y * 25,
      rotateY: x * 25,
      rotateX: y * 25,
      ease: "power2.out",
    });

    gsap.to(".img-box img", {
      x: x * 55,
      y: y * 55,
      ease: "power2.out",
    });

    gsap.to(".fade-name", {
      x: x * 40,
      y: y * 40,
      rotateY: x * 25,
      rotateX: y * 25,
      ease: "power2.out",
    });

    gsap.to(".overlay-title", {
      x: x * 50,
      y: y * 50,
      ease: "power2.out",
    });

    gsap.to(".overlay-title-2", {
      x: x * 60,
      y: y * 60,
      ease: "power2.out",
    });

    gsap.to(".overlay-2-title", {
      x: x * 70,
      y: y * 70,
      ease: "power2.out",
    });

    gsap.to(".overlay-2-title-2", {
      x: x * 80,
      y: y * 80,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    slideIn(currentSlide);
    containerRef.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentSlide]);

  return (
    <div className="carousel" ref={containerRef}>
      <div className="list">
        {sliderData.map((item, idx) => (
          <div
            className="item"
            key={idx}
            ref={(el) => (slidesRef.current[idx] = el)}
            style={{ visibility: idx === currentSlide ? "visible" : "hidden" }}
          >
            <div className="bg-box" style={{ background: bg[idx] }}></div>
            <div className="img-box">
              <img src={item?.img} />
            </div>
            <div className="content">
              <div className="title title-anim">{item?.name}</div>
              <div className="overlay-title overlay-title-anim">
                {item?.name}
              </div>
              <div className="overlay-title-2 overlay-title-anim">
                {item?.name}
              </div>
              <div className="title-2 title-anim">{item?.name}</div>
              <div className="overlay-2-title overlay-title-anim">
                {item?.name}
              </div>
              <div className="overlay-2-title-2 overlay-title-anim">
                {item?.name}
              </div>
            </div>
            <div
              className={
                item?.name.length >= 7
                  ? "fade-name large-fade-name"
                  : "fade-name"
              }
            >
              {item?.name}
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={handlePrev}>
          <HiOutlineArrowNarrowLeft className="icon" />
        </button>
        <button onClick={handleNext}>
          <HiOutlineArrowNarrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
