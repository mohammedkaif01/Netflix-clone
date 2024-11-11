import React from "react";

export default function log() {
  // document.body.classList.add("backgroundchange");
  return (
    <div className="backgroundchange">
      <nav className="flex justify-around pt-5">
        <h1 className="text-rose-600 text-4xl  font-bold">NETFLIX</h1>
        <div className="flex gap-2">
          <button className="font-bold  rounded-md p-2 border-2 border-white text-white">
            English
          </button>
          <br />
          <button className="bg-red-600 text-white rounded-md p-2 font-bold">
            Signin
          </button>
        </div>
      </nav>

      <div className="flex justify-evenly pt-36">
        <div className="px-6 ">
          <h1 className="text-4xl font-bold text-white">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className=" pt-2 text-lg font-bold text-white">
            Starts at ₹149. Cancel anytime.
          </h3>
          <p className=" pt-2 text-lg text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex justify-center pt-2 gap-2 ">
            <input
              className="pl-3 h-14 w-full bg-transparent text-white border-2 border-white rounded-md"
              type="text"
              placeholder="Email address"
              name=""
              id=""
            />
            <button className="px-2 h-14 w-60 font-bold  bg-red-600 text-white border-2 border-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
