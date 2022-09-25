import Image from "next/image";
import React, { useState } from "react";

const MainHome = () => {
  const PhotographyImages = [
    { id: 1, image: "/Assets/bright-rain.png" },
    { id: 2, image: "/Assets/floss.png" },
    { id: 3, image: "/Assets/moonrise.png" },
    { id: 4, image: "/Assets/landscape.jpg" },
    { id: 5, image: "/Assets/Julius_Eghan.jpg" },
  ];
  const VideographyImages = [
    { id: 1, image: "/Assets/bright-rain.png" },
    { id: 2, image: "/Assets/floss.png" },
    { id: 3, image: "/Assets/moonrise.png" },
    { id: 4, image: "/Assets/landscape.jpg" },
    { id: 5, image: "/Assets/Julius_Eghan.jpg" },
  ];
  const EventsImages = [
    { id: 1, image: "/Assets/bright-rain.png" },
    { id: 2, image: "/Assets/floss.png" },
    { id: 3, image: "/Assets/moonrise.png" },
    { id: 4, image: "/Assets/landscape.jpg" },
    { id: 5, image: "/Assets/Julius_Eghan.jpg" },
  ];
  const MentoringImages = [
    { id: 1, image: "/Assets/bright-rain.png" },
    { id: 2, image: "/Assets/floss.png" },
    { id: 3, image: "/Assets/moonrise.png" },
    { id: 4, image: "/Assets/landscape.jpg" },
    { id: 5, image: "/Assets/Julius_Eghan.jpg" },
  ];

  const HeaderImageTexts = [
    {
      id: 1,
      heroText: "This is for image 1",
      heroSubTitle: "subtitle for hero 1",
    },
    {
      id: 2,
      heroText: "This is for image 2",
      heroSubTitle: "subtitle for hero 2",
    },
    {
      id: 3,
      heroText: "This is for image 3",
      heroSubTitle: "subtitle for hero 3",
    },
    {
      id: 4,
      heroText: "This is for image 4",
      heroSubTitle: "subtitle for hero 4",
    },
  ];

  const [currentP, setCurrentP] = useState(0);
  const [currentV, setCurrentV] = useState(0);
  const [currentE, setCurrentE] = useState(0);
  const [currentM, setCurrentM] = useState(0);
  const [currentHeroText, setHeroTextCurrent] = useState(0);
  const PslideLength = PhotographyImages.length;
  const VslideLength = VideographyImages.length;
  const EslideLength = EventsImages.length;
  const MslideLength = MentoringImages.length;
  const HeroTextLength = HeaderImageTexts.length;

  if (!Array.isArray(PhotographyImages) || PhotographyImages.length <= 0) {
    return null;
  }
  if (!Array.isArray(VideographyImages) || VideographyImages.length <= 0) {
    return null;
  }
  if (!Array.isArray(EventsImages) || EventsImages.length <= 0) {
    return null;
  }
  if (!Array.isArray(MentoringImages) || MentoringImages.length <= 0) {
    return null;
  }
  if (!Array.isArray(HeaderImageTexts) || HeaderImageTexts.length <= 0) {
    return null;
  }

  const nextPSlide = () => {
    setCurrentP(currentP === PslideLength - 1 ? 0 : currentP + 1);
  };
  const prevPSlide = () => {
    setCurrentP(currentP === 0 ? PslideLength - 1 : currentP - 1);
  };
  const nextVSlide = () => {
    setCurrentV(currentV === VslideLength - 1 ? 0 : currentV + 1);
  };
  const prevVSlide = () => {
    setCurrentV(currentV === 0 ? VslideLength - 1 : currentV - 1);
  };
  const nextESlide = () => {
    setCurrentE(currentE === EslideLength - 1 ? 0 : currentE + 1);
  };
  const prevESlide = () => {
    setCurrentE(currentE === 0 ? EslideLength - 1 : currentE - 1);
  };
  const nextMSlide = () => {
    setCurrentM(currentM === MslideLength - 1 ? 0 : currentM + 1);
  };
  const prevMSlide = () => {
    setCurrentM(currentM === 0 ? MslideLength - 1 : currentM - 1);
  };

  return (
    <div>
      {/* photography section */}
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-screen h-screen">
            <Image
              src="/Assets/moonrise.png"
              layout="fill"
              alt=""
              className=" absolute object-cover"
            />
          </div>
          <div className="absolute top-0">
            <h1 className="text-white text-lg">Photography</h1>
          </div>
        </div>
      </div>
      {/* Videography section */}
      <div></div>
      {/* Events section */}
      <div></div>
      {/* Mentoring section */}
      <div></div>
      {/* Call to action */}
      <div></div>
    </div>
  );
};

export default MainHome;
