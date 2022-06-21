// create an order model to the Orders
import Order from "../models/userOrder.js";

export async function createOrder(req, res) {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
}

// get all orders
export async function getAllOrders(req, res) {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).end();
  }
}

// get an order by id
export async function getOrderById(req, res) {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).end();
  }
}

// delete an order by id
export async function deleteOrderById(req, res) {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json(Order);
  } catch (error) {
    res.status(500).end();
  }
}
