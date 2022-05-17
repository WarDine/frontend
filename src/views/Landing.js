import React from "react";
import { Link } from "react-router-dom";

// components

import Footer from "components/Footers/Footer.js";

import backgroung_image from "assets/img/messHall.jpg";
export function callbackMy() {
  console.log("Here")
}
export default function Landing() {
  return (
    <>
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
              `url(${backgroung_image})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Daca nu mai ai casa, hai aici la masa.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    This is a web application designed to help refugees find mess halls that serve
                    free of charge warm meals, when fleeing to foreign countries. Come grab a bite!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        {<section className="pb-20 bg-blueGray-200 -mt-24 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified By Trusted Agencies</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Login in you Agency account to have fine controll over all mess halls in the area.
                    </p>
                    <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                      <a href="/mainadmin" className = "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">  
                      <span>Login as Regulatory Body</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
                
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">See Nearby Mess Halls</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      You can check out where is the closest place you can find a hot meal. No account required.
                    </p>
                    <button class="bg-lightBlue-400 hover:bg-lightBlue-400 text-white font-bold py-2 px-4 border-b-4 border-lightBlue-700 hover:border-lightBlue-500 rounded">
                      <a href="/user" className = "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">  
                        <span>Get a Hot Meal</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Register New Mass Hall</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      You can register as a mess hall owner. By creating an account you will be able to register a new mess hall for those in need in no time.
                    </p>
                    <button class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded">
                      <a href="/admin" className = "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">  
                        <span>Login as Mess Hall Admin</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> }
        <Footer></Footer>
      </main>
    </>
  );
}
