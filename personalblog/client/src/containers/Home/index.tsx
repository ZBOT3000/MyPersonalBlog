import React from "react";
import Header from "../../components/Header";
import Body from "../../components/Body";

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-18">
        <Body />
      </div>
    </>
  );
}

export default Home;
