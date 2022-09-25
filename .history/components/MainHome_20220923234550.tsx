import Image from "next/image";
import React, { useState } from "react";

const MainHome = () => {
  const PhotographyImages = [
    {
      id: 1,
      Pimage: "/Assets/bright-rain.png",
      heroText: "This is for Photographyimage 1",
      heroSubTitle: "subtitle for hero 1",
    },
    {
      id: 2,
      Pimage: "/Assets/floss.png",
      heroText: "This is for Photographyimage 2",
      heroSubTitle: "subtitle for hero 2",
    },
  ];
  const VideographyImages = [
    {
      id: 1,
      Vimage: "/Assets/floss.png",
      heroText: "This is for Videographyimage 1",
    },
    {
      id: 2,
      Vimage: "/Assets/bright-rain.png",
      heroText: "This is for Videographyimage 2",
    },
    {
      id: 3,
      Vimage: "/Assets/moonrise.png",
      heroText: "This is for Videographyimage 3",
    },
    {
      id: 4,
      Vimage: "/Assets/moonrise.png",
      heroText: "This is for Videographyimage 3",
    },
    {
      id: 5,
      Vimage: "/Assets/moonrise.png",
      heroText: "This is for Videographyimage 3",
    },
    {
      id: 6,
      Vimage: "/Assets/floss.png",
      heroText: "This is for Videographyimage 3",
    },
  ];
  const EventsImages = [
    {
      id: 1,
      Eimage: "/Assets/moonrise.png",
      heroText: "This is for Eventimage 1",
    },
    {
      id: 2,
      Eimage: "/Assets/floss.png",
      heroText: "This is for Eventimage 2",
    },
    {
      id: 3,
      Eimage: "/Assets/bright-rain.png",
      heroText: "This is for Eventimage 3",
    },
  ];
  const MentoringImages = [
    {
      id: 1,
      Mimage: "/Assets/landscape.jpg",
      heroText: "This is for Mentoringimage 1",
    },
    {
      id: 2,
      Mimage: "/Assets/floss.png",
      heroText: "This is for Mentoringimage 2",
    },
    {
      id: 3,
      Mimage: "/Assets/moonrise.png",
      heroText: "This is for Mentoringimage 3",
    },
    {
      id: 4,
      Mimage: "/Assets/bright-rain.png",
      heroText: "This is for Mentoringimage 4",
    },
    {
      id: 5,
      Mimage: "/Assets/Julius_Eghan.jpg",
      heroText: "This is for Mentoringimage 5",
    },
  ];

  const [currentP, setCurrentP] = useState(0);
  const [currentV, setCurrentV] = useState(0);
  const [currentE, setCurrentE] = useState(0);
  const [currentM, setCurrentM] = useState(0);
  const PslideLength = PhotographyImages.length;
  const VslideLength = VideographyImages.length;
  const EslideLength = EventsImages.length;
  const MslideLength = MentoringImages.length;

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
    <div className="relative min-h-screen min-w-screen">
      <div>
        <Image
          src="/Assets/moonrise.png"
          layout="fill"
          alt=""
          className=" absolute object-cover"
        />
      </div>
      <div className="absolute flex min-h-screen min-w-full items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-8xl font-bold">ABOUT ME</h1>
          <div className="flex flex-row items-center justify-center space-x-4 py-4">
            <div className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
              Home
            </div>
            <div className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
              About
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 px-5 py-2 rounded-full hover:bg-white hover:text-black transition hover:duration-1000 hover:ease-in-out cursor-pointer">
          <h1>Scroll Down</h1>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
