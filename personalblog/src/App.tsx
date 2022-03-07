import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const App = () => {
  const file_name = "example_markdown.md";
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

  //   const app = require("express");
  // const PORT = 8080;
  //   app.listen(PORT, () => console.log(`Its alive on http:localhost:${PORT}`));

  return (
    <div>
      <Markdown>{post}</Markdown>
    </div>
  );
};

export default App;
