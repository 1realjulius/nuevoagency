import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainNavbar from "../components/MainNavbar";

const About = () => {
  return (
    <div className="bg-black min-h-screen min-w-full text-white">
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <MainNavbar />
      </div>
      {/* header */}
      <div className="z-10 relative min-h-screen min-w-screen">
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
      {/* main */}
      <div>
        {/* feature Section lets chat */}
        <div className=" my-20">
          <div className="flex flex-col md:flex-row px-6">
            <div className="flex flex-1 ">
              <div className="md:px-40 pb-8">
                <h1 className="text-2xl md:text-3xl">
                  Welcome to nuevo Agency hereCerte, inquam, pertinax non
                  provident, similique sunt in malis dolor, non intellegamus, tu
                  paulo ante cum soluta nobis est consecutus?
                </h1>
                <div></div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className=" flex flex-col md:px-40">
                <div className="flex flex-col space-y-4  text-base md:text-lg mb-8">
                  <h1>
                    Certe, inquam, pertinax non provident, similique sunt in
                    malis dolor, non intellegamus, tu paulo ante cum soluta
                    nobis est consecutus? laudem .
                  </h1>
                  <h1>
                    Certe, inquam, pertinax non provident, similique sunt in
                    malis dolor, non intellegamus, tu paulo ante cum soluta
                    nobis est consecutus? laudem et
                  </h1>
                  <h1>
                    Certe, inquam, pertinax non provident, similique sunt in
                    malis dolor, non intellegamus, tu paulo ante cum soluta
                    nobis est consecutus? laudem .
                  </h1>
                  <h1>
                    Certe, inquam, pertinax non provident, similique sunt in
                    malis dolor, non intellegamus, tu paulo ante cum soluta
                    nobis est consecutus? laudem .
                  </h1>
                  <h1>
                    Certe, inquam, pertinax non provident, similique sunt in
                    malis dolor, non intellegamus, tu paulo ante cum soluta
                    nobis est consecutus? laudem .
                  </h1>
                </div>
                <Link href="#">
                  <div className="flex flex-row items-center space-x-3 cursor-pointer group">
                    <span className="p-1 border-2 border-gray-400 group-hover:border-yellow-600 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-yellow-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                    <h1 className="group-hover:text-yellow-600">LET'S CHAT!</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Message from editor feature Section 1 */}
        <div className="flex flex-col py-20">
          <div className="flex flex-col items-center px-6">
            <h1 className="text-xl md:text-3xl text-center md:px-80 py-4">
              “We Take and Edit amazing shoots for creative people all around
              the world and help businesses grow. Get your Legend UI kit today
              and build your perfect website!”
            </h1>
            <h2 className="text-lg md:text-2xl">Mr Theophilus</h2>
            <h2 className="text-base text-gray-500">Lead Photo Editor</h2>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 pt-40  px-6 md:px-40">
            <div className=" flex-1 md:pr-20">
              <div className="flex flex-col space-y-2">
                <p className="text-base text-gray-600">Awsome crafts Makings</p>
                <h1 className="text-2xl md:text-3xl">Mind-Blowing Results</h1>
                <div className="h-1 w-12 bg-white" />
                <p className="text-lg">
                  Writing result-oriented ad copy is difficult, as it must
                  appeal to, entice, and convince consumers to take action.
                  There is no magic formula to write perfect ad copy; it is
                  based on a number of factors, including ad placement,
                  demographic, even the consumer’s mood.
                </p>
              </div>
              <div className="flex items-center py-6">
                <div className="px-3 py-2 rounded-full border-2 border-white">
                  <p>Request A Quota</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <h1 className="float-left text-6xl leading-none text-yellow-600 pr-2">
                  A{" "}
                </h1>
                <p className="text-xl">
                  successful marketing plan relies heavily on the pulling-power
                  of advertising copy. Writing result-oriented ad copy is
                  difficult, as it must appeal to, entice, and convince
                  consumers to take action. There is no magic formula to write
                  perfect ad copy; it is based on a number of factors, including
                  ad placement, demographic, even the consumer’s mood when they
                  see your ad.
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        {/*Request a quota feature Section 1 */}
        <div></div>
        {/* simple testimonial feature Section */}
        <div></div>
        {/* what i do feature Section */}
        <div></div>
        {/* projects completed and happy clients feature Section */}
        <div></div>
        {/* start contact us feature Section 1 */}
        <div></div>
        {/* instagram feature Section 1 */}
        <div></div>
      </div>
    </div>
  );
};

export default About;
