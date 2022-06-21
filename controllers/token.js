// create a token for the user to login and get the token from the header of the request

import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export async function createToken(req, res) {
  try {
    const result = await User.findOne({ username: req.body.username });
    if (!result) {
      res.status(401).json().end();
      return;
    }
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      result.password
    );
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    if (!bcrypt.compareSync(req.body.password, result.password)) {
      response.status(401).end();
      return;
    }
    const expire = Math.floor(Date.now() / 1000) + 60 * 60;
    const token = jwt.sign(
      {
        exp: expire,
        data: {
          id: result._id,
          username: result.username,
          role: result.role || "customer",
        },
      },
      process.env.TOKEN_SECRET
    );
    res.status(201).json({
      access_token: token,
      expire,
    });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
}
