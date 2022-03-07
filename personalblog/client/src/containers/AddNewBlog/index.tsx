import React, { useState } from "react";
import Header from "../../components/Header";
import axios from "axios";

function AddNewBlog() {
  const url = "http://localhost:8080/LoopBlog";
  const [data, setData] = useState({
    title: "",
    paragraph: "",
  });

  function handle(e: any) {
    const newData: any = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e: any) {
    e.preventDefault();
    axios
      .post(url, {
        title: data.title,
        paragraph: data.paragraph,
      })
      .then((res: { data: any }) => {
        console.log(res.data);
      });
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-48">
        <div className="flex flex-col items-center sm:text-2xl">
          <form className="space-y-5">
            <label className="block mb-1 font-light text-gray-500">Title</label>
            <input
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-black-500"
              type="text"
              onChange={(e) => handle(e)}
              id="title"
              value={data.title}
            ></input>
            <label className="block mb-1 font-light text-gray-500">
              Desciption
            </label>
            <input
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-black-500 "
              onChange={(e) => handle(e)}
              id="paragraph"
              value={data.paragraph}
              type="text"
            ></input>
            <button
              onClick={(e) => submit(e)}
              className="block w-full  p-4 font-medium text-black-500 whitespace-no-wrap bg-white border-2  rounded-full shadow-sm hover:bg-transparent hover:text-black hover:border-black focus:outline-none "
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewBlog;
