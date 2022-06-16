// create a model to the Products
import mongoose from "mongoose";

const priceSchema = new mongoose.Schema({
  amout: {
    type: Number,
    required: [true, "you must provide an amount, duh!"],
  },
  currency: {
    type: String,
    default: "DKK",
  },
});
const productSchema = new mongoose.Schema({
  name: String,
  price: Object,
  description: String,
});

const Product = mongoose.model("product", productSchema);

export default Product;
