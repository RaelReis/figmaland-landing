import { useEffect, useRef, useState } from "react";

import vectorOne from "./assets/images/vector-one.svg";
import vectorTwo from "./assets/images/vector-two.svg";
import vectorThree from "./assets/images/vector-three.svg";
import mackbook from "./assets/images/mackbook-img.png";
import sectionThreeImg from "./assets/images/section-three-img.png";

import partnerOne from "./assets/images/partner-one.svg";
import partnerTwo from "./assets/images/partner-two.svg";
import partnerThree from "./assets/images/partner-three.svg";
import ibmBrand from "./assets/images/ibm-brand.svg";
import uiImge from "./assets/images/ui-img.png";

import socialIconOne from "./assets/images/ant-design_facebook-filled.svg";
import socialIconTwo from "./assets/images/ant-design_linkedin-filled.svg";
import socialIconThree from "./assets/images/ant-design_twitter-outlined.svg";

import mapIcon from "./assets/images/map-icon.svg";
import phoneIcon from "./assets/images/phone-icon.svg";

function App() {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  const [isSectionOneVisible, setIsSectionOneVisible] = useState(false);
  const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
  const [isSectionThreeVisible, setIsSectionThreeVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    window.addEventListener("scroll", handleScroll);

    return () => {
      sectionOneObserver.unobserve(sectionOneRef.current!);
      sectionTwoObserver.unobserve(sectionTwoRef.current!);
      sectionThreeObserver.unobserve(sectionThreeRef.current!);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  const headerAfterScrolledClasses = scrolled ? "py-4 bg-slate-800 shadow" : "py-12";

  return (
    <div className="">
      <header className={`w-screen fixed z-50 duration-300 ${headerAfterScrolledClasses}`}>
        <nav className="container flex items-center justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <a href="#home" className="p-3">
                Home
              </a>
            </li>

            <li>
              <a href="#product" className="p-3">
                Product
              </a>
            </li>

            <li>
              <a href="#pricing" className="p-3">
                Pricing
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-x-6">
            <li>
              <img src={socialIconOne} alt="" />
            </li>
            <li>
              <img src={socialIconTwo} alt="" />
            </li>
            <li>
              <img src={socialIconThree} alt="" />
            </li>
          </ul>
        </nav>
      </header>
      <section id="home" className="h-screen bg-hero bg-center bg-cover hero-clip pt-44">
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
      <section id="product" className="py-24 container text-center" ref={sectionOneRef}>
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
        <div className="rounded-xl shadow-video">
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
          <div className="hidden lg:flex lg:flex-col">
            <span className="mt-8 block font-bold text-base-title">
              Subscribe to our Newsletter
            </span>
            <span className="text-base-title">Available exclusivery on Figmaland</span>
            <div className="flex mt-8 items-center flex-col lg:flex-row gap-3">
              <input
                className="bg-base-input rounded-full py-3 px-8 text-base-title"
                type="text"
                name="text"
                placeholder="Your Email"
              />
              <button className="rounded-full bg-primary py-3 px-8">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="lg:hidden order-last mt-8 flex flex-col lg:flex-row gap-3">
          <span className="mt-8 block font-bold text-base-title">Subscribe to our Newsletter</span>
          <span className="text-base-title">Available exclusivery on Figmaland</span>
          <input
            className="mt-4 bg-base-input rounded-full py-3 px-8 text-base-title"
            type="text"
            name="text"
            placeholder="Your Email"
          />
          <button className="rounded-full bg-primary py-3 px-8">Subscribe</button>
        </div>
      </section>
      <section className="container text-center">
        <h2 className="text-base-title text-5xl">Partners</h2>
        <p className="mt-4 text-base-text">
          Most calendars are designed for teams. Slate is designed for freelancers
        </p>

        <ul className="mt-16 flex flex-col gap-y-10">
          <li className="border border-gray-400 w-[192px] px-8 py-2 mx-auto">
            <img src={partnerOne} alt="partner-logo" />
          </li>
          <li className="border border-gray-400 w-[192px] px-8 py-2 mx-auto">
            <img src={partnerTwo} alt="partner-logo" />
          </li>
          <li className="border border-gray-400 w-[192px] px-8 py-2 mx-auto">
            <img src={partnerThree} alt="partner-logo" />
          </li>
        </ul>

        <button className="mt-16 font-bold bg-primary rounded-full py-4 px-16 text-base">
          Try for free
        </button>
      </section>
      <section className="container my-20 text-center">
        <h2 className="text-5xl text-base-title">Testimonials</h2>

        <div className="mt-20 flex flex-col items-center gap-y-20">
          <div>
            <img src={ibmBrand} alt="logo da IBM" />
          </div>
          <p className="text-base-text font-bold lg:text-2xl lg:font-normal">
            Most calendars are designed for teams. Slate is designed for freelancers who want a
            simple way to plan their schedule.
          </p>
          <div className="flex gap-x-2 items-center">
            <div className="w-14">
              <img src={uiImge} alt="" />
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-base-text font-semibold text-sm">Organize across</h4>
              <span className="text-base-text">Ui designer</span>
            </div>
          </div>
        </div>

        <button className="font-medium mt-16 bg-primary rounded-full py-4 px-16 text-base">
          More Testimonials
        </button>
      </section>

      <section id="pricing" className="py-20 bg-slate-800 text-white text-center">
        <div className="container">
          <h2 className="text-5xl">Pricing</h2>
          <p className="mt-6 text-2xl">Most calendars are designed for teams. </p>

          <ul className="my-20 flex flex-col gap-y-12 items-center lg:flex-row lg:gap-x-10 lg:justify-center lg:my-28">
            <li className="max-w-[336px] p-10 bg-white flex flex-col gap-y-7 items-center rounded-xl">
              <div className="flex flex-col">
                <h3 className="text-base-title font-bold text-xl uppercase">free</h3>
                <span className="mt-2 text-base-text max-w-[144px]">
                  Organize across all apps by hand
                </span>
              </div>

              <div className="flex gap-x-2 items-center">
                <span className="font-bold text-7xl text-base-title">0</span>
                <div className="text-start">
                  <span className="block font-bold text-xl text-base-title">$</span>
                  <span className="text-base-text text-base">Per Month</span>
                </div>
              </div>

              <ul className="flex flex-col items-center text-base-text">
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
              </ul>

              <button className="bg-primary rounded-full py-4 px-16 text-xl">Order now</button>
            </li>

            <li className="max-w-[336px] p-10 bg-primary text-white flex flex-col gap-y-7 items-center rounded-xl lg:py-20">
              <div className="flex flex-col">
                <h3 className=" font-bold text-xl uppercase">standard</h3>
                <span className="mt-2  max-w-[144px]">Organize across all apps by hand</span>
              </div>

              <div className="flex gap-x-2 items-center">
                <span className="font-bold text-7xl ">10</span>
                <div className="text-start">
                  <span className="block font-bold text-xl ">$</span>
                  <span className=" text-base">Per Month</span>
                </div>
              </div>

              <ul className="flex flex-col items-center ">
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
              </ul>

              <button className="bg-white rounded-full py-4 px-16 text-xl text-primary">
                Order now
              </button>
            </li>

            <li className="max-w-[336px] p-10 bg-white flex flex-col gap-y-7 items-center rounded-xl">
              <div className="flex flex-col">
                <h3 className="text-base-title font-bold text-xl uppercase">business</h3>
                <span className="mt-2 text-base-text max-w-[144px]">
                  Organize across all apps by hand
                </span>
              </div>

              <div className="flex gap-x-2 items-center">
                <span className="font-bold text-7xl text-base-title">99</span>
                <div className="text-start">
                  <span className="block font-bold text-xl text-base-title">$</span>
                  <span className="text-base-text text-base">Per Month</span>
                </div>
              </div>

              <ul className="flex flex-col items-center text-base-text">
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
                <li className="p-2">Pricing Feature</li>
              </ul>

              <button className="bg-primary rounded-full py-4 px-16 text-xl">Order now</button>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-24 bg-slate-800">
        <div className="container">
          <ul className="flex flex-col gap-y-16 text-center lg:flex-row lg:text-start lg:justify-between">
            <li>
              <h4 className="text-xl font-bold">Annette Steward</h4>
              <ul className="mt-6 flex flex-col gap-y-4 text-sm font-light">
                <li className="">Jennie Cooper</li>
                <li className="">Julie Henry</li>
                <li className="">Johnny Murphy</li>
                <li className="">Gregory Mccoy</li>
                <li className="">Marvin Mckinney</li>
              </ul>
            </li>
            <li>
              <h4 className="text-xl font-bold">Annette Steward</h4>
              <ul className="mt-6 flex flex-col gap-y-4 text-sm font-light">
                <li>Jennie Cooper</li>
                <li>Julie Henry</li>
                <li>Johnny Murphy</li>
                <li>Gregory Mccoy</li>
                <li>Marvin Mckinney</li>
              </ul>
            </li>
            <li>
              <h4 className="text-xl font-bold">Annette Steward</h4>
              <ul className="mt-6 flex flex-col gap-y-4 text-sm font-light">
                <li>Jennie Cooper</li>
                <li>Julie Henry</li>
                <li>Johnny Murphy</li>
                <li>Gregory Mccoy</li>
                <li>Marvin Mckinney</li>
              </ul>
            </li>

            <li className="flex flex-col gap-y-3 max-w-[288px] mx-auto text-start lg:ml-12 lg:mr-0">
              <div className="flex items-center">
                <span>
                  <img src={mapIcon} alt="" />
                </span>
                <span className="ml-2">7480 Mockingbird Hill undefined </span>
              </div>
              <div className="flex items-center">
                <span>
                  <img src={phoneIcon} alt="" />
                </span>
                <span className="ml-2">(239) 555-0108</span>
              </div>
              <div className="self-center flex items-center gap-x-6 py-5 lg:self-start">
                <div>
                  <img src={socialIconOne} alt="" />
                </div>
                <div>
                  <img src={socialIconTwo} alt="" />
                </div>
                <div>
                  <img src={socialIconThree} alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
