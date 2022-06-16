// create a router for all allProducts
import express from "express";
import {
  allProducts,
  createProduct,
  findProductById,
  deleteProductById,
} from "./controllers/Products.js";

const Router = express.Router();
Router.get("/api/v1/products", allProducts);
Router.post("/api/v1/products", createProduct);
Router.get("/api/v1/products/:id", findProductById);
Router.delete("/api/v1/products/:id", deleteProductById);
export default Router;
