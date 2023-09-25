import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div>
      <header className="h-24 bg-rose-300 flex items-center">
        <div className="relative">
          <a href="/" className="h1 text-7xl font-normal ml-24">
            Plonk
          </a>
        </div>
        <div className="flex items-center w-50">
          <img
            className="w-20 h-20 rounded-full border-2 border-rose-600 ml-64"
            src="/images/navii.png"
            alt=""
          />
          <a href="/" className="ml-20 text-black text-2xl font-medium">
            My Friends
          </a>
          <a href="/" className="ml-20 text-black text-2xl font-medium">
            My Gallery
          </a>
        </div>
        <div className="ml-52 mr-12">
          <div className="flex items-center">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search"
                className="text-black text-2xl placeholder-black bg-rose-300 outline-none pr-8 font-normal"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-1 mt-1">
                <a href="/">
                  <img src="images/search.png" alt="" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-zinc-950"></div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
