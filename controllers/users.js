// create a user controller to handle the users
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export async function getNewUser(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).end();
  }
}

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
    if (error.message.toLowerCase().includes("user validation failed")) {
      res.status(400).end();
      return;
    }
    if (error.message.toLowerCase().includes("duplicate key error")) {
      res.status(409).end();
      return;
    }
    res.status(500).end();
  }
}

// create a user by id handler
export async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).end();
  }
}

//delete user by id handler
export async function deleteUserById(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json(User);
  } catch (error) {
    res.status(500).end();
  }
}
