import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.sizjgvz.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("Connected to MongoDB");
}
