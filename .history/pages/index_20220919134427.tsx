import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nuevo Creative Agency." />
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iamjulius.com/" />
        <meta
          property="og:title"
          content="Julius Eghan — Website and Software Developer"
        />
        <meta
          property="og:description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="og:image" content="/Assets/newmemoji.svg" />
        <meta property="twitter:card" content="/Assets/Julius_Eghan.jpg" />
        <meta property="twitter:url" content="https://www.iamjulius.com/" />
        <meta
          property="twitter:title"
          content="Julius Eghan — Website and Software Developer"
        />
        <meta
          property="twitter:description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="twitter:image" content="/Assets/Julius_Eghan.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="0HesePHVymRqGiL70HUKPIq0Zsap0uUIb_Ci0DpImRY"
        />
        <meta
          name="theme-color"
          content="#f7f2f2"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#090c10"
          media="(prefers-color-scheme: dark)"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Welcomme to Nuevo Photography Agency</div>
    </div>
  );
};

export default Home;
