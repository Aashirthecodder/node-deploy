//password t73I1ak7EmVJBvZ5
// 8FuZHmngX0LOcs4u db cloud
// require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
const path = require("path");

const productRouter = require("./routes/product");
const userController = require("./routes/user");

//body parser
server.use(express.json());
server.use(cors());
server.use("/products", productRouter.routes);
server.use("/user", userController.routes);
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
//db connectioncode
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MongoUrl);
  console.log("database connected");
}

//--------------------------
server.listen(8080, () => {
  console.log("server started");
});

//----------------------for only node js start from here------------------
// const server = http.createServer((req, res) => {
//   if (req.url.startsWith("/product")) {
//     const id = req.url.split("/")[2];
//     const product = products.find((p) => p.id === +id);
//     console.log(product);
//     res.setHeader("Content-Type", "text/html");
//     let modifiedIndex = index
//       .replace("Card title", product.title)
//       .replace("**description**", product.description)
//       .replace("**url**", product.thumbnail)
//       .replace("**price**", product.price)
//       .replace("**rating**", product.rating);

//     res.end(modifiedIndex);
//     return;
//   }
//   console.log("server started");
//   console.log(req.url);
//   const abc = { age: 5 };
//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(abc);
//       break;
//     case "/api":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;
//       // case "/products":
//       //   res.setHeader("Content-Type", "text/html");
//       //   let modifiedIndex = index
//       //     .replace("Card title", product.title)
//       //     .replace("**description**", product.description)
//       //     .replace("**url**", product.thumbnail)
//       //     .replace("**price**", product.price)
//       //     .replace("**rating**", product.rating);

//       //   res.end(modifiedIndex);
//       break;

//     default:
//       res.writeHead(404);
//       res.end();
//   }
//   //   res.setHeader("dummy", "DummyValue");
// });

// server.listen(8080);
