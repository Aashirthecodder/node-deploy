const express = require("express");

const productController = require("../controller/product");
const router = express.Router();

router
  .get("/", productController.getAllData)

  //read api with id----------------------------------
  .get("/:id", productController.get1Obj)

  //create post /products---------------------------------

  .post("/", productController.addData)

  //update/product/:id------------------------
  .put("/:id", productController.updateData)

  //patch/product/:id---------------------------------------
  .patch("/:id", productController.replaceData)

  //delete/product/:id-------------------------------------------------------------------
  .delete("/:id", productController.deleteData);

exports.routes = router;
