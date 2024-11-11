import React from "react";

export default function second() {
  return (
    <div className="bg-black   px-9  ">
      <h5 className=" text-white text-2xl  pt-5 font-mono font-black ">
        Trending Now
      </h5>

      <div className=" flex overflow-x-scroll p-7 w-full">
        <div className=" flex gap-4  ">
          <span className=" trendingmovie">
            <img className="photo hover:opacity-45" src="GOT.jpeg" alt="" />
          </span>
          <span className=" trendingmovie">
            <img className="photo hover:opacity-45" src="kalki.jpeg" alt="" />
          </span>
          <span className=" trendingmovie">
            <img className="photo hover:opacity-45" src="avatar.jpeg" alt="" />
          </span>
          <span className=" trendingmovie">
            <img className="photo hover:opacity-45" src="dune.jpeg" alt="" />
          </span>
          <span className="trendingmovie">
            <img className="photo hover:opacity-45" src="fast.jpeg" alt="" />
          </span>
          <span className=" trendingmovie">
            <img className="photo hover:opacity-45" src="one.jpeg" alt="" />
          </span>
          <span className=" trendingmovie">
            <img className="photo hover:opacity-45" src="pathan.jpeg" alt="" />
          </span>
        </div>
      </div>

      <div className="">
        <h4 className="text-white text-2xl font-mono font-black">
          More reason to join
        </h4>
        <div className=" flex   pt-6 xl:flex xl:w-96 ">
          <div className="flex  gap-9 flex-col xl:flex-row ">
            <span className="fourbox card ">
              <h6 className="heading6">Enjoy on your TV</h6>
              <p className=" text-xl pt-4 text-cyan-50">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </span>
            <span className=" fourbox card ">
              <h6 className="heading6">Download your shows to watch offline</h6>
              <p className="offer">
                Save your favourites easily and always have something to watch.
              </p>
            </span>
            <span className=" fourbox card">
              <h6 className="heading6">Watch everywhere</h6>
              <p className="offer">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV.
              </p>
            </span>
            <span className=" fourbox card">
              <h6 className="heading6"> Create profiles for kids</h6>
              <p className="offer">
                Send kids on adventures with their favourite characters in a
                space made just for them — free with your membership.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
