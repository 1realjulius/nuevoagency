import "../styles/globals.css";
import type { AppProps } from "next/app";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

function MyApp({ Component, pageProps }: AppProps) {
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    container: document.body,
  });
  return (
    <>
      <Component data-cursor {...pageProps} />
    </>
  );
}

export default MyApp;
