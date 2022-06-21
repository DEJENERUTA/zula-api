//create a user models to the Users

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required, please!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required, done!"],
  },
});
const User = mongoose.model("User", userSchema);
export default User;
