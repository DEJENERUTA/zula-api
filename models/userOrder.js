// create a user order model to the Orders
import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // type: String,
    ref: "User",
  },
  products: [
    {
      type: String,
      ref: "product",
    },
  ],
  total: {
    type: String,
  },
});
const Order = mongoose.model("Order", orderSchema); // this variable is used in the router.js file to create a new order model
export default Order;
