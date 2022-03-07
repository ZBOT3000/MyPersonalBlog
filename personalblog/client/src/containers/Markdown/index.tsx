import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Markdown from "markdown-to-jsx";
import Bg from "../../assets/TheAbstract.jpg";

function Mark() {
  const file_name = "ReactMeans.md";
  const [post, setPost] = useState("");
  useEffect(() => {
    import(`./content/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div>
        <Header />
      </div>
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",

          height: "600px",
        }}
      >
        <div className="mt-48 px-24 ">
          <span className="flex flex-col items-center text-7xl font-sans font-semibold track-tight sm:text-4xl">
            {" "}
            What React means for a dev in 2022{" "}
          </span>
        </div>

        <div className="mt-24 flex flex-col items-center px-48 ">
          <Markdown>{post}</Markdown>
        </div>
      </div>
    </>
  );
}

export default Mark;
