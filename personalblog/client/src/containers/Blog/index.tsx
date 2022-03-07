import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header";
import Bg from "../../assets/TheAbstract.jpg";

function Blog() {
  const url = "http://localhost:8080/LoopBlog";
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.title);
        setTitle(res.data.title);
        console.log(res.data.paragraph);
        setParagraph(res.data.paragraph);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div
        className="mt-24"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",

          height: "600px",
        }}
      >
        <div className="mt-48 px-24 ">
          <span className="flex flex-col items-center text-7xl font-sans font-semibold track-tight sm:text-4xl">
            {title}
          </span>
        </div>
        <div className="mt-24 flex flex-col items-center px-48 ">
          {paragraph}
        </div>
      </div>
    </>
  );
}

export default Blog;
