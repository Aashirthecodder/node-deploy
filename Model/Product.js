const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  discountPercentage: Number,
  rating: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

exports.products = mongoose.model("products", productSchema);

// {

//   "title": "iPhone X",
//   "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//   "price": 5,
//   "discountPercentage": 17.94,
//   "rating": 4.44,

//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",

// },
// {

//   "title": "Samsung Universe 9",
//   "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
//   "price": 5,
//   "discountPercentage": 15.46,
//   "rating": 4.09,

//   "brand": "Samsung",
//   "category": "smartphones",
//   "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",

// },
