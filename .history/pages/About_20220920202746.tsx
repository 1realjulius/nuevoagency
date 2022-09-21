import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainNavbar from "../components/MainNavbar";

const About = () => {
  return (
    <div className="bg-[#161719] min-h-screen min-w-full text-white">
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
                <p className="text-base text-gray-400">Awsome crafts Makings</p>
                <h1 className="text-2xl md:text-4xl">Mind-Blowing Results</h1>
                <div className="h-[2px] w-40 rounded-full bg-yellow-600" />
                <p className="text-xl">
                  Writing result-oriented ad copy is difficult, as it must
                  appeal to, entice, and convince consumers to take action.
                  There is no magic formula to write perfect ad copy; it is
                  based on a number of factors, including ad placement,
                  demographic, even the consumer’s mood.
                </p>
              </div>
              <div className="flex items-center py-6">
                <div className="px-5 py-2 rounded-full border-2 border-white">
                  <p>Request A Quota</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <h1 className="float-left text-7xl  text-yellow-600 pr-2">
                  A{" "}
                </h1>
                <p className="text-xl text-gray-400">
                  successful marketing plan relies heavily on the pulling-power
                  of advertising copy. Writing result-oriented ad copy is
                  difficult, as it must appeal to, entice, and convince
                  consumers to take action. There is no magic formula to write
                  perfect ad copy; it is based on a number of factors, including
                  ad placement, demographic, even the consumer’s mood when they
                  see your ad.
                </p>
              </div>
              <div className="py-4">
                <h1 className="text-2xl py-4">Awsome features:</h1>
                <ul className="text-lg space-y-2">
                  <li>• 7 hard copies </li>
                  <li>• 5 soft copies</li>
                  <li>• Awsome come together Gift</li>
                  <li>• Nice packaged box</li>
                </ul>
              </div>
              <div className="py-4">
                <p className="text-xl text-gray-400">
                  Grabbing the consumer’s attention isn’t enough; you have to
                  keep that attention for at least a few seconds. This is where
                  your benefits come into play or a product description that
                  sets your offer apart from the others. If it’s a billboard ad,
                  you’ll need a super catchy headline and simple design due to
                  the speed at which people will pass.
                </p>
              </div>
              <div className="py-4">
                <p className="text-xl text-gray-400">
                  Grabbing the consumer’s attention isn’t enough; you have to
                  keep that attention for at least a few seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* simple testimonial feature Section */}
        <div className="relative w-full h-[580px] bg-white">
          <div>
            <Image
              src="/Assets/moonrise.png"
              layout="fill"
              alt=""
              className=" absolute object-cover"
            />
          </div>
          <div className="absolute bottom-6 right-6 bg-[#161719] w-[340px] md:w-[580px] p-8 ">
            <div className="flex flex-row items-center space-x-4 py-2">
              <div className="relative w-[60px] h-[60px]">
                <Image
                  src="/Assets/moonrise.png"
                  layout="fill"
                  alt=""
                  className="absolute object-cover rounded-full"
                />
              </div>
              <div className="felx flex-row">
                <h1 className="text-xl">Julius Eghan</h1>
                <p className="text-base text-gray-400">
                  Professional Web developer
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg">
                "Templates by these guys perfectly match our needs and internal
                workflow. I think Webflow is the future of website design and
                front-end, and Elastic Themes helps to shape that future today
                by creating some great templates."
              </p>
            </div>
          </div>
        </div>
        {/* what i do feature Section */}
        <div className="flex flex-col md:flex-row md:px-40 py-20 px-6">
          <div className="flex-1">
            <div className="relative w-full  h-[456px] md:w-[440px] md:h-[556px]">
              <Image
                src="/Assets/moonrise.png"
                layout="fill"
                alt=""
                className="absolute object-cover"
              />
              <div className="absolute bottom-0 h[80px] md:h-[70px] bg-black/50 px-4 py-2">
                <p className="text-start">
                  We create amazing Webflow templates for creative people all
                  around the world and help businesses grow.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 py-10 md:py-0">
            <div>
              <h1 className="text-2xl md:text-4xl py-2">What I do</h1>
              <div className="h-[2px] w-40 rounded-full bg-yellow-600" />
              <p className="py-2 text-xl text-gray-400">
                Writing result-oriented ad copy is difficult, as it must appeal
                to, entice, and convince consumers to take action. There is no
                magic formula to write perfect ad copy; it is based on a number
                of factors, including ad placement, demographic, even the
                consumer’s mood.
              </p>
              <div className="flex flex-col space-y-6">
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
                    <h1 className="group-hover:text-yellow-600 text-lg">
                      Consultation!
                    </h1>
                  </div>
                </Link>
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
                    <h1 className="group-hover:text-yellow-600 text-lg">
                      Photography!
                    </h1>
                  </div>
                </Link>
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
                    <h1 className="group-hover:text-yellow-600 text-lg">
                      Videography!
                    </h1>
                  </div>
                </Link>
              </div>
              <div className="py-4">
                <p className="text-xl">
                  Grabbing the consumer’s attention isn’t enough; you have to
                  keep that attention for at least a few seconds. This is where
                  your benefits come into play.
                </p>
              </div>
              <div className="flex items-center py-6">
                <div className="px-5 py-2 rounded-full border-2 border-white">
                  <p>Request A Quota</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* projects completed and happy clients feature Section */}
        <div className="flex flex-col md:flex-row  items-center justify-center">
          <div className="flex flex-row">
            <div className="border-t border-r border-l border-gray-600 p-6 flex flex-col items-center space-y-2">
              <h1 className="text-6xl">100+</h1>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="border-t border-r border-gray-600 p-6 flex flex-col items-center space-y-2">
              <h1 className="text-6xl">30+</h1>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="border-t border-r border-l  border-gray-600 p-6 flex flex-col items-center space-y-2">
              <h1 className="text-6xl">5</h1>
              <p className="text-gray-400">Awards Won</p>
            </div>
            <div className="border-t border-r  border-gray-600 p-6 flex flex-col items-center space-y-2">
              <h1 className="text-6xl">10+</h1>
              <p className="text-gray-400">Years Experiences</p>
            </div>
          </div>
        </div>
        {/* start contact us feature Section 1 */}
        <div className="flex relative flex-row items-center justify-center min-h-[200px]">
          <div>
            <h1 className="text-[180px] font-bold text-gray-400/10">START</h1>
          </div>
          <div className="absolute items-center justify-center flex flex-col">
            <p className="text-base text-gray-400">
              GET YOUR BEAUTIFUL PICTUES AND AWSOME VIDEOS
            </p>
            <h1 className="text-4xl pb-4 pt-2 text-center">
              Are You Ready to take your <br /> awsome shots with us?
            </h1>
            <div className="px-4 py-2 bg-white rounded-full text-black">
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
        {/* instagram feature Section 1 */}
        <div></div>
      </div>
    </div>
  );
};

export default About;
