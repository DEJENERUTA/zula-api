// create a user controller to handle the users
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export async function createUser(req, res) {
  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User();
  newUser.username = req.body.username;
  newUser.password = password;

  try {
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
}
