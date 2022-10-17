import "../styles/globals.css";
import type { AppProps } from "next/app";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

function MyApp({ Component, pageProps }: AppProps) {
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    container: document.getElementById("body"),
  });
  return (
    <>
      <Component id="body" {...pageProps} />
    </>
  );
}

export default MyApp;
