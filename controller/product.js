const fs = require("fs");
const mongoose = require("mongoose");

// const index = fs.readFileSync("index.html", "utf-8");
const model = require("../Model/Product");
const products = model.products;
exports.getAllData = async (req, res) => {
  const Products = await products.find();
  res.json(Products);
  // res.staus(201).json();
};
exports.get1Obj = async (req, res) => {
  const id = req.params.id;

  const Products = await products.findById(id);
  res.json(Products);
};
exports.addData = (req, res) => {
  const Products = new products(req.body);
  console.log(Products);
  Products.save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => {
      res.status(400).json(err);
    });

  // Products.save();
};
exports.updateData = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const doc = await products.findOneAndReplace({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.replaceData = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const doc = await products.findOneAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.deleteData = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const doc = await products.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
