// create a router for all allProducts
import express from "express";
import {
  allProducts,
  createProduct,
  findProductById,
  deleteProductById,
} from "./controllers/Products.js";
import {
  createUser,
  getNewUser,
  getUserById,
  deleteUserById,
} from "./controllers/users.js";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrderById,
} from "./controllers/orders.js";
import { createToken } from "./controllers/token.js";
import {
  checkHeader,
  checkToken,
  isAdmin,
  isCorrectUser,
} from "./middleware/authentication.js";
//product Router
const Router = express.Router();
Router.get("/api/v1/products", allProducts);
Router.post("/api/v1/products", createProduct);
Router.get("/api/v1/products/:id", findProductById);
Router.delete("/api/v1/products/:id", deleteProductById);

//user Router
Router.get("/api/v1/users", getNewUser);
Router.post("/api/v1/users", createUser);
Router.post(
  "/api/v1/users/:id/payment-methods",
  checkHeader,
  checkToken,
  isCorrectUser,
  createPaymentType,
  getUserById
);
Router.delete("/api/v1/users/:id", deleteUserById);

// order Router
Router.get("/api/v1/orders", getAllOrders);
Router.post("/api/v1/orders", createOrder);
Router.get("/api/v1/orders/:id", getOrderById);
Router.delete("/api/v1/orders/:id", deleteOrderById);

//Router token

Router.post("/auth/token", createToken);
export default Router;
