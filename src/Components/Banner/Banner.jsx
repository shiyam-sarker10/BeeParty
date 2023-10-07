import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
const TEXTS = ["Child's", "Parents", "Family's", "Friends"];

const Banner = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <div className="">
        <div className="banner-img border-custom ">
          <div className=" text-center space-y-4 h-[85vh] flex flex-col justify-center items-center">
            <h1 className="font-custom text-4xl w-full tracking-wider  md:w-1/3 md:text-5xl text-white">
              Bring your {""}
              {
                <TextTransition inline  springConfig={presets.wobbly}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              }{" "}
              dream event to life
            </h1>
            <h4 className=" font-semibold  w-full md:w-1/3 text-white tracking-wider text-lg">
              Transform birthdays with unforgettable themes, decorations, and
              magical moments for kids.
            </h4>
            <button className="font-custom font-thin bg-[#FEBF05] px-4 py-2 rounded text-amber-100 inline-flex items-center">
              Discover More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ml-1"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.354 4.354a.5.5 0 0 1 0 .708L13.793 8l-3.439 3.438a.5.5 0 1 1-.708-.708L12.293 8l-2.646-2.646a.5.5 0 0 1 .708-.708z"
                />
                <path
                  fillRule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h9.793l-2.646-2.647a.5.5 0 1 1 .708-.708L13.793 8l-3.439 3.439a.5.5 0 1 1-.708-.708L12.293 9.5H2.5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
