import React from "react";
import ModernApp from "../assets/portfolio/ModernApp.png";
import Woodmere from "../assets/portfolio/Woodmere.png";
import beats from "../assets/portfolio/beats.png";
import Three from "../assets/portfolio/three.png";
import bkinctube from "../assets/portfolio/bkinctube.png";
import weather from "../assets/portfolio/weather.png";
import Apple from "../assets/portfolio/Apple.png";
import Globe from "../assets/portfolio/Globe.png";

const Portfolio = () => {
  const portfolios = [
    
    {
      id: 1,
      src: ModernApp,
      demo: "https://bk-inc-modern-app.netlify.app/",
      description: "Modern business app built with React and TailwindCSS.",
    },
    {
      id: 2,
      src: Woodmere,
      demo: "https://briankarmo.com/woodmere-party-store/",
      description: "A static site for a local business built with WordPress.",
    },
    {
      id: 3,
      src: Apple,
      demo: "https://briankarmo-appledemo.netlify.app/",
      description: "iPhone advertising landing page created using Three.js with a 3D Model at the foot of the page!",
    },
    {
      id: 4,
      src: weather,
      demo: "https://briankarmo-weathertracker-w-reponsive.netlify.app/",
      description: "A weather tracker app that fetches various measurements of data from OpenWeatherMap API.",
    },
    {
      id: 5,
      src: Three,
      demo: "https://briankarmo-3js-3d.netlify.app/",
      description: "My second portfolio created with JavaScripts 3D library, Three.js.",
    },
    {
      id: 6,
      src: bkinctube,
      demo: "https://bkcodetube.netlify.app/",
      description: "A video player app that uses react-router-dom and the Rapid API to fetch coding channels from Youtube v3.",
    },
     {
    id: 7,
    src: beats,
    demo: "https://bklyriks.netlify.app/",
    description: "A music sharing app that fetches data from the Shazam Core API via Rapid API.",
    },
    {
    id: 8,
    src: Globe,
    demo: "https://earth-3d-3js.netlify.app//",
    description: "A Controllable 3D Globe created using the JavaScript Library three.js with framer motions, orbit controls, and browser routers",
    } 
   ];



return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black pt-40  to-gray-800 w-full pb-20  text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Portfolio
          </p>
          <p className="py-6">I have attached examples below of my previous work!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0">
      {portfolios.map(({ id, src, demo, description }) => (
        <div key={id} className="shadow-lg shadow-blue-800 rounded-lg ">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={description} className="rounded-sm mx-auto pb-2 duration-200 hover:scale-105" />
          </a>
          <div className="flex items-center justify-center">
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <button className="hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold flex justify-items-center px-2 py-3 rounded-full  duration-200 hover:scale-105">
                Demo
              </button>
            </a>
          </div>
          <p className="text-center font-bold mx-auto">{description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Portfolio;
