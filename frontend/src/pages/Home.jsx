import React, { useEffect } from "react";
import img from "../assets/image0_0 (3).jpg";
import HeroSection from "../components/HeroSection";
import { BsArrowRightSquareFill } from "react-icons/bs";
import Title from "react-vanilla-tilt";
import VanillaTilt from "vanilla-tilt";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-image"), {
      max: 35,
      speed: 300,
      glare: true,
    });
  }, []);
  return (
    <>
      <HeroSection />
      {/* Intro of AI Image Generator  start*/}
      <div className="w-full flex justify-around items-center my-10 p-4">
        <div className="w-[90%] flex  p-4">
          <div className="w-[50%] flex justify-center items-center p-4">
            <div className="bg-primary-blue w-[35%] h-[60%] absolute rounded-xl opacity-40 blur-2xl"></div>
            <img
              src={img}
              alt=""
              className="w-[65%] rounded-lg relative shadow-lg transform transition-transform duration-300 ease-in-out hover:rotate-6"
            />
          </div>
          <div className="w-[60%] p-4  flex flex-col gap-4 justify-center ">
            <h1 className="text-3xl font-bold">
              Introducing AI Image Generator
            </h1>
            <p className="text-text-primary ">
              <span className="text-[#ffb02f] font-bold">
                {" "}
                Ignite Your Words, Illuminate Your Imagination!
              </span>{" "}
              In a digital landscape where words shape worlds, our AI Text
              Generator empowers you to transcend boundaries and turn your
              thoughts into visual masterpieces. Brace yourself for a journey
              where creativity knows no limits
            </p>
            <div className="flex flex-col gap-3  ">
              <div className="flex  items-center gap-4">
                <BsArrowRightSquareFill className="text-primary-blue text-xl" />
                <p>
                  AI-crafted text that is always fresh, relevant, and
                  one-of-a-kind.
                </p>
              </div>

              <div className="flex  items-center gap-4 ">
                <BsArrowRightSquareFill className="text-primary-blue text-xl" />
                <p>
                  Unleash the power of narrative creation, exploring characters
                  and stories that spring to life with every keystroke.
                </p>
              </div>
              <div className="flex  items-center gap-4">
                <BsArrowRightSquareFill className="text-primary-blue text-xl" />
                <p>
                  Transform your ideas into visuals effortlessly, diving into
                  the complexities of storytelling with a user-friendly
                  experience.
                </p>
              </div>
              <div className="flex  items-center gap-4">
                <BsArrowRightSquareFill className="text-primary-blue text-xl" />
                <p>
                  Join us on a journey where words transcend their traditional
                  boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Intro of AI Image Generator  end*/}
      {/* How to generate AI images start */}
      <div className="w-full flex flex-col justify-center items-center p-4 gap-6 mt-28 mb-10">
        <div className="font-bold mb-20 text-3xl">
          How to generate AI Images
        </div>
        <div className="w-[90%] flex flex-col justify-center gap-5 ">
          <div className="flex justify-between flex-col md:flex-row gap-4 md:gap-0">
            <div className="card w-52 bg-base-100 shadow-[0_20px_50px_rgba(255,176,47,0.6)] bg-primary flex justify-center items-center p-5 rounded-lg tilt-image cursor-pointer">
              <div className="card-body flex flex-col  gap-3 justify-center items-center  ">
                <h2 className="card-title font-bold text-center">
                  Open Create Section
                </h2>
                <p className="text-text-primary">
                  In the create section find the AI Image Generator tool and
                  enter your text prompt.
                </p>
              </div>
            </div>

            <div className="card w-52 bg-base-100 shadow-[0_20px_50px_rgba(255,176,47,0.6)] bg-primary flex justify-center items-center p-5 rounded-lg tilt-image cursor-pointer">
              <div className="card-body flex flex-col  gap-3 justify-center items-center  ">
                <h2 className="card-title font-bold text-center">
                  Generate AI Image
                </h2>
                <p className="text-text-primary">
                  Write your desired prompt to generate image.
                </p>
              </div>
            </div>

            <div className="card w-52 bg-base-100 shadow-[0_20px_50px_rgba(255,176,47,0.6)] bg-primary flex justify-center items-center p-5 rounded-lg tilt-image cursor-pointer">
              <div className="card-body flex flex-col  gap-3 justify-center items-center  ">
                <h2 className="card-title font-bold text-center">
                  Share Image
                </h2>
                <p className="text-text-primary">
                  You can share generated images in our communitiy.
                </p>
              </div>
            </div>

            <div className="card w-52 bg-base-100 shadow-[0_20px_50px_rgba(255,176,47,0.6)] bg-primary flex justify-center items-center p-5 rounded-lg tilt-image cursor-pointer">
              <div className="card-body flex flex-col  gap-3 justify-center items-center  ">
                <h2 className="card-title font-bold text-center">
                  Download Images
                </h2>
                <p className="text-text-primary">
                  You can also download your and communities images.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How to generate AI images end */}
      {/* contact us form start */}
      <section className="w-full mt-28">
        <div className="w-[90%] px-6 py-10 mx-auto">
          <div className=" flex justify-center items-center">
            <div className="lg:w-1/2 lg:mx-10 flex flex-col justify-center items-center ">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">
                Let’s talk
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Ask us everything and we would love to hear from you
              </p>

              <form className="mt-12">
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* contact us form end */}
    </>
  );
}

export default Home;
