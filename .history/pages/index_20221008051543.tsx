import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import NewHome from "../components/NewHome";

const Home: NextPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (movement: any) => {
      console.log(movement);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="min-w-full font-FredokaOneRegular min-h-screen bg-black">
      <Head>
        <title>Nuevo Agency</title>
        <meta name="description" content="Nuevo Creative Agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen min-w-screen">
        {/* Navbar */}
        <div className=" top-0 z-50 ">
          <NavBar />
        </div>
        <div>
          <NewHome />
        </div>
        <div className="bg-black h-5 w-5 rounded-full fixed top-0 left-0" />
      </div>
    </div>
  );
};

export default Home;
