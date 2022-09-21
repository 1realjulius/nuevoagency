import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainNavbar from "../components/MainNavbar";

const About = () => {
  return (
    <div className="bg-black min-h-screen text-white">
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
            <h1 className="text-8xl font-bold">ABOUT ME</h1>
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
        <div className="z-20 min-h-screen min-w-full">
          <div className="ites-center justify-center flex flex-row pt-40 px-4">
            <div className="flex flex-1 items-center justify-center">
              <div className="px-40">
                <h1 className="text-3xl">
                  Welcome to nuevo Agency hereCerte, inquam, pertinax non
                  provident, similique sunt in malis dolor, non intellegamus, tu
                  paulo ante cum soluta nobis est consecutus?
                </h1>
                <div></div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className=" flex flex-col space-y-4 px-40 text-lg">
                <h1>
                  Certe, inquam, pertinax non provident, similique sunt in malis
                  dolor, non intellegamus, tu paulo ante cum soluta nobis est
                  consecutus? laudem et fortibus viris commemorandis eorumque
                  factis non existimant oportere nimium nos causae confidere,
                  sed animo etiam ac ratione.
                </h1>
                <h1>
                  Certe, inquam, pertinax non provident, similique sunt in malis
                  dolor, non intellegamus, tu paulo ante cum soluta nobis est
                  consecutus? laudem et fortibus viris commemorandis eorumque
                  factis non existimant oportere nimium nos causae confidere,
                  sed animo etiam ac ratione.
                </h1>
                <h1>
                  Certe, inquam, pertinax non provident, similique sunt in malis
                  dolor, non intellegamus, tu paulo ante cum soluta nobis est
                  consecutus? laudem et fortibus viris commemorandis eorumque
                  factis non existimant oportere nimium nos causae confidere,
                  sed animo etiam ac ratione.
                </h1>
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
        <div className=" min-h-screen min-w-full flex flex-col items-center justify-center">
          <div>hello</div>
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
