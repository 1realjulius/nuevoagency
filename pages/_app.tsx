import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);
  return (
    <>
      {/* <div className=" fixed top-5 z-50">
        <NavBar />
      </div> */}
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          mobile: {
            smooth: true,
          },
          tablet: {
            breakpoint: 0, // <---- Fixes The Issue 🎉
          },
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          {/* ...your app */}
          <Component {...pageProps} />
          <Analytics />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default MyApp;
