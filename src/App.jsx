import "./App.css";
import logo from "./images/logo.svg"
import earthD from "./images/desktop/image-deep-earth.jpg"
import nightAD from "./images/desktop/image-night-arcade.jpg"
import soccerD from "./images/desktop/image-soccer-team.jpg"
import gridD from "./images/desktop/image-grid.jpg"
import fromUpD from "./images/desktop/image-from-above.jpg"
import curioD from "./images/desktop/image-curiosity.jpg"
import auraD from "./images/desktop/image-pocket-borealis.jpg"

import earthM from "./images/mobile/image-deep-earth.jpg"
import nightAM from "./images/mobile/image-night-arcade.jpg"
import soccerM from "./images/mobile/image-soccer-team.jpg"
import gridM from "./images/mobile/image-grid.jpg"
import fromUpM from "./images/mobile/image-from-above.jpg"
import curioM from "./images/mobile/image-curiosity.jpg"
import auraM from "./images/mobile/image-pocket-borealis.jpg"


import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";

// import ima from "./images/desktop/"
// import ima from "./assets/image.jpg"
// import Newsletter from "./components/Newsletter";
// import ProductCard from "./components/ProductCard";
// import LoginForm from "./components/LoginForm";
import manImg from "./images/desktop/image-interactive.jpg";
function App() {
  return (
    // hero section
    <>
      <section className="hero">
        {/* hero container      */}
        <div className="container max-w-6xl mx-auto px-6 py-12">
          {/* Menu */}
          <nav className="flex items-center justify-between font-bold text-white">
            <img src={logo} alt="logo" />
            {/* menu */}
            <div className="hidden font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
          </nav>

          {/* to do hamburger menu */}
          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0
        md:text-6xl">
            Impressive experiences that deliver
          </div>
        </div>
      </section>
      <section id="feature">
        <div className="relative container flex flex-col max-w-6xl mx-auto md:my-32 my-8 px-6 text-gray-900 md:flex-row md:px-0">
          <img src={manImg} alt="man playing" />
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase
            md:text-5xl md:mt-0 md:text-left">
              The leader in interactive vr
            </h2>
            <p className="max-w-sm text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus soluta doloribus totam placeat cum repellat recusandae fugit dolorum earum.
            </p>
          </div>
        </div>
      </section>
      <section id="creations">
        <div className="container max-w-6 mx-auto md:my-32 my-8 px-6 text-gray-900 md:px-0">
          <div className="flex justify-center md:mb-20  mb-10 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">our Creations</h2>
            <button className="hidden btn md:block">
              See All
            </button>
          </div>
          <div className="item-container">
            <div className="group item">
              <img src={earthD} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              <img src={earthM} alt="" className="w-full md:hidden" />
              <div className="item-gradient "></div>
              <h5>
                Deep Earth
              </h5>
            </div>
            <div className="group item">
              <img src={nightAD} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              <img src={nightAM} alt="" className="w-full md:hidden" />
              <div className="item-gradient "></div>
              <h5>
                night arcade
              </h5>
            </div>
            <div className="group item">
              <img src={soccerD} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              <img src={soccerM} alt="" className="w-full md:hidden" />
              <div className="item-gradient "></div>
              <h5>
                Soccer team
              </h5>
            </div>
            <div className="group item">
              <img src={gridD} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              <img src={gridM} alt="" className="w-full md:hidden" />
              <div className="item-gradient "></div>
              <h5>
                Racing Grid
              </h5>
            </div>

          </div>
          <div className="item-container mt-10">
            <div className="group item">
              <img src={fromUpD} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              <img src={fromUpM} alt="" className="w-full md:hidden" />
              <div className="item-gradient "></div>
              <h5>
                From up above
              </h5>
            </div>
            <div className="group item">
              <img src={curioD} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              <img src={curioM} alt="" className="w-full md:hidden" />
              <div className="item-gradient "></div>
              <h5>
                curiosity
              </h5>
            </div>
            <div className="group item">
              <img src={auraD} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              <img src={auraM} alt="" className="w-full md:hidden" />
              <div className="item-gradient "></div>
              <h5>
                Borealis
              </h5>
            </div>
            <div className="group item">
              <img src={gridD} alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              <img src={gridM} alt="" className="w-full md:hidden" />
              <div className="item-gradient "></div>
              <h5>
                Racing Grid
              </h5>
            </div>
          </div>
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden"> see All</button>
          </div>
        </div>
      </section>
      <footer className="bg-black">
        <div className="container max-w-6xl py-10 mx-auto">
          <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row 
          md:space-y-0 md:justify-between md:items-start">
            <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
              <div className="h-8">
                <img src={logo} alt="" className="w-44 md:ml-3" />
              </div>
              <div className=" flex flex-col items-center space-y-4 font-bolt text-white md:flex-row 
              md:space-y-0 md:space-x-6 md:ml-4">
                <div className="h-10 group">
                  <a href="#">About</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Careers</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Events</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Products</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="h-10 group">
                  <a href="#">Support</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
              <div className="flex items-center justify-center space-x-4 md:justify-end mx-auto md:mx-0">
                <div className="h-8 group">
                  <a href="#">
                    <img src={facebook} className="h-6" alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={pinterest} className="h-6" alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={twitter} className="h-6" alt="" />
                  </a>
                </div>
                <div className="h-8 group">
                  <a href="#">
                    <img src={instagram} className="h-6" alt="" />
                  </a>
                </div>
              </div>
              <div className="font-bold">
                &copy; 2023 Loopstudios. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
