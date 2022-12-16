import { useEffect, useRef, useState } from "react";

import vectorOne from "./assets/images/vector-one.svg";
import vectorTwo from "./assets/images/vector-two.svg";
import vectorThree from "./assets/images/vector-three.svg";
import mackbook from "./assets/images/mackbook-img.png";
import sectionThreeImg from "./assets/images/section-three-img.png";

function App() {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  const [isSectionOneVisible, setIsSectionOneVisible] = useState(false);
  const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
  const [isSectionThreeVisible, setIsSectionThreeVisible] = useState(false);

  useEffect(() => {
    const sectionOneObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSectionOneVisible((prevState) => (!prevState ? entry.isIntersecting : true));
      },
      {
        threshold: 0.3,
      }
    );

    const sectionTwoObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSectionTwoVisible((prevState) => (!prevState ? entry.isIntersecting : true));
      },
      {
        threshold: 0.5,
      }
    );

    const sectionThreeObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsSectionThreeVisible((prevState) => (!prevState ? entry.isIntersecting : true));
      },
      {
        threshold: 0.5,
      }
    );

    sectionOneObserver.observe(sectionOneRef.current!);
    sectionTwoObserver.observe(sectionTwoRef.current!);
    sectionThreeObserver.observe(sectionThreeRef.current!);

    return () => {
      sectionOneObserver.unobserve(sectionOneRef.current!);
      sectionTwoObserver.unobserve(sectionTwoRef.current!);
      sectionThreeObserver.unobserve(sectionThreeRef.current!);
    };
  }, []);

  return (
    <div className="">
      <header className="w-screen fixed z-50 py-12">
        <nav className="container flex items-center justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <a className="p-3">Home</a>
            </li>
            <li>
              <a className="p-3">Contact</a>
            </li>
            <li>
              <a className="p-3">Pricing</a>
            </li>
            <li>
              <a className="p-3">About</a>
            </li>
            <li>
              <a className="p-3">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>F</a>
            </li>
            <li>
              <a>T</a>
            </li>
            <li>
              <a>I</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="h-screen bg-hero bg-center bg-cover hero-clip pt-44">
        <div className="hero-content-animation max-w-md mt-20 sm:max-w-2xl px-4 mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl sm:font-bold leading-tight">
            The best products start with Figma
          </h1>
          <p className="text-xl font-normal mt-4">
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
          <button className="mt-16 bg-primary rounded-full py-4 px-16 text-xl">Try for free</button>
        </div>
      </section>
      <section className="container text-center" ref={sectionOneRef}>
        <div
          className={`duration-700 ${
            isSectionOneVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/3"
          }`}
        >
          <div className="max-w-xl mx-auto">
            <h2 className="text-base-title text-5xl">Features</h2>
            <p className="mt-2 text-base-text text-[1.75rem]">
              Most calendars are designed for teams. Slate is designed for freelancers
            </p>
          </div>
          <div className="max-w-sm md:max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto py-20">
            <div
              className={`flex flex-col items-center gap-4 duration-300 delay-500 ${
                isSectionOneVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1/2"
              }`}
            >
              <div className="w-11 h-11 flex items-center justify-center">
                <img src={vectorOne} alt="" />
              </div>
              <h3 className="text-base-title font-bold flex-grow">
                OpenType features Variable fonts
              </h3>
              <p className="text-base-text">
                Slate helps you see how many more days you need to work to reach your financial
                goal.
              </p>
            </div>
            <div
              className={`flex flex-col items-center gap-4 duration-300 delay-700 ${
                isSectionOneVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1/2"
              }`}
            >
              <div className="w-11 h-11 flex items-center justify-center">
                <img src={vectorTwo} alt="" />
              </div>
              <h3 className="text-base-title font-bold flex-grow">Design with real data</h3>
              <p className="text-base-text">
                Slate helps you see how many more days you need to work to reach your financial
                goal.
              </p>
            </div>
            <div
              className={`flex flex-col items-center gap-4 duration-300 delay-[850ms] ${
                isSectionOneVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1/2"
              }`}
            >
              <div className="w-11 h-11 flex items-center justify-center">
                <img src={vectorThree} alt="" />
              </div>
              <h3 className="text-base-title font-bold flex-grow">Fastest way to take action</h3>
              <p className="text-base-text">
                Slate helps you see how many more days you need to work to reach your financial
                goal.
              </p>
            </div>
          </div>
        </div>
        <div className="py-12">
          <div className="mx-auto relative h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube-nocookie.com/embed/zlRl8sJU_4I"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section
        className="container py-56 grid grid-cols-1 items-center lg:grid-cols-2 gap-x-12 duration-700"
        ref={sectionTwoRef}
      >
        <div
          className={`h-full text-center lg:text-left flex flex-col gap-y-4 duration-700 ${
            isSectionTwoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"
          }`}
        >
          <h2 className="text-base-title text-5xl">
            Fastest way to <br />
            organize
          </h2>
          <p className="text-base-text text-xl">
            Most calendars are designed for teams. Slate is designed for freelancers
          </p>
          <button className="mt-auto self-center lg:self-start rounded-full bg-primary py-3 px-12">
            Try for free
          </button>
        </div>
        <div
          className={`mt-14 lg:mt-0 duration-700 ${
            isSectionTwoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1/2"
          }`}
        >
          <img className="mx-auto" src={mackbook} alt="" />
        </div>
      </section>
      <section
        className="container flex flex-col text-center items-center gap-12 py-11 lg:text-start lg:flex-row "
        ref={sectionThreeRef}
      >
        <div
          className={`duration-700 order-2 lg:order-1 ${
            isSectionThreeVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"
          }`}
        >
          <img src={sectionThreeImg} alt="" />
        </div>
        <div
          className={`lg:ml-12 duration-700 order-1 lg:order-2 ${
            isSectionThreeVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1/2"
          }`}
        >
          <span className="font-bold text-base-title">At your fingertips</span>
          <h2 className="mt-4 text-5xl text-base-title">Lightning fast prototyping </h2>
          <span className="mt-8 block font-bold text-base-title">Subscribe to our Newsletter</span>
          <span className="text-base-title">Available exclusivery on Figmaland</span>
          <div className="mt-8 flex items-center flex-col lg:flex-row gap-3">
            <input
              className="bg-base-input rounded-full py-3 px-8 text-base-title"
              type="text"
              name="text"
              placeholder="Your Email"
            />
            <button className="rounded-full bg-primary py-3 px-8">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
