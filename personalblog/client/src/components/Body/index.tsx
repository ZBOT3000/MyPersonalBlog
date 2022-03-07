import React from "react";
import Loop from "../../assets/loop.gif";

const Body = () => {
  return (
    <div>
      <img src={Loop} width="1050" alt="" />

      <div className="ml-2 my-10 mt-50 absolute top-40 left-2/3">
        <div
          className="font-light text-3xl  flex items-end 
    text-gray-800 ml-24"
        >
          Welcome to
        </div>
        <div
          className="font-light text-8xl  flex items-center mt-9
    text-gray-800 "
        >
          The Loop
        </div>
        <ul>
          <li>
            <a
              href="Markdown"
              className="flex items-center justify-center  mt-11 py-2  font-medium text-black-500 whitespace-no-wrap bg-white border-2  rounded-full shadow-sm hover:bg-transparent hover:text-black hover:border-black focus:outline-none"
            >
              Markdown
            </a>
            <a
              href="Blog"
              className="flex items-center justify-center mt-5 px-4 py-2  font-medium text-black-500 whitespace-no-wrap bg-white border-2  rounded-full shadow-sm hover:bg-transparent hover:text-black hover:border-black focus:outline-none"
            >
              Blogs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
