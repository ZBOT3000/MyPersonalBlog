const express = require("express");
const app = express();
const PORT = 8080;
app.listen(PORT, () => console.log(`Its alive on http:localhost:${PORT}`));
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/LoopBlog", (req, res) =>
  res.status(200).send({
    title: "Blog #1 : Tracking the future of crypto controversy ",
    paragraph:
      "The backlash to crypto over the past year has been interesting to witness. Viral YouTube videos and tweets paint a crushing portrait of tokens and NFTs with phrases like Ponzi schemes, money laundering, fraud and scams, and there is certainly much of that to be found. But the reality is that many consumers are simply discovering through NFTs and crypto that high finance and the concept of economic value are not the wholly rational institutions they had once imagined them to be. The idea of spending millions of dollars to own a link to an image file in a distributed database should appear wholly non-sensical to most, but if that prospect seems reasonable to enough buyers, then its value is a product of the owners’ collective delusions — but much of the modern economy is built around these same delusions. Getting access to this uncomfortable realization is a gift in and of itself, but there are constructive and destructive places to take it.",
  })
);

// app.post("/LoopBlog", (req, res) => {
//   const { title } = req.body;
//   const { paragraph } = req.body;

//   res.send({
//     //   tshirt: `Black with your ${color} and ID: ${id}`,
//     title: `${title}`,
//     paragraph: `${paragraph}`,
//   });
// });
