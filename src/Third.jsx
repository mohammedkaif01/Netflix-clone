import React from "react";

export default function third() {
  return (
    <div className="bg-black px-9 ">
      <div className="flex justify-center ">
        <div className=" flex flex-col gap-3 pt-4 ">
          <span className="bg-white h-20 text-4xl  flex items-center pl-4 rounded-md">
            What is Netflix
          </span>
          <span className="bg-white text-4xl  flex items-center pl-4 rounded-md">
            {" "}
            How much does Netflix cost?
          </span>
          <span className="bg-white  h-20 text-4xl  flex items-center pl-4 rounded-md">
            {" "}
            Where can I watch?
          </span>
          <span className="bg-white xl:w-80 h-20 text-4xl  flex items-center pl-4 rounded-md">
            How do I cancel?
          </span>
          <span className="bg-white  h-20 text-4xl  flex items-center pl-4 rounded-md">
            What Is Netflix good for kids?
          </span>
        </div>
      </div>
    </div>
  );
}
