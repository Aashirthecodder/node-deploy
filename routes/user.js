const express = require("express");

const userController = require("../controller/user");
const router = express.Router();

router
  .get("/", userController.getAllData)

  //read api with id----------------------------------
  .get("/:id", userController.get1Obj)

  //create post /products---------------------------------

  .post("/", userController.addData)

  //update/product/:id------------------------
  .put("/:id", userController.updateData)

  //patch/product/:id---------------------------------------
  .patch("/:id", userController.replaceData)

  //delete/product/:id-------------------------------------------------------------------
  .delete("/:id", userController.deleteData);

exports.routes = router;
