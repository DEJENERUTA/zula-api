// create a product controller to handle the products
import Product from "../models/productModel.js";

export async function allProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createProduct(req, res) {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).end();
  }
}

// find products by id
export async function findProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).end();
  }
}

//delete product by id
export async function deleteProductById(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).end();
  }
}
