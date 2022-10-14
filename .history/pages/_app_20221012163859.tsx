import "../styles/globals.css";
import type { AppProps } from "next/app";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

function MyApp({ Component, pageProps }: AppProps) {
  MouseFollower.registerGSAP(gsap);

  const cursor = new MouseFollower({
    container: ".mf-container",
    speed: 0.3,
  });
  return (
    <>
      <div className=" cursor" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
