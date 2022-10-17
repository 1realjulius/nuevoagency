import "../styles/globals.css";
import type { AppProps } from "next/app";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

function MyApp({ Component, pageProps }: AppProps) {
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    container: "body", // container to attach
    speed: 0.7, // default speed
    ease: "expo.out", // default ease (gsap)
    // visibleTimeout: 300 // disappear timeout
  });
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
