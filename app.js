import express from "express";
import Router from "./router.js";
import "./mongodb.js";
import bodyparser from "body-parser";
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(Router);
app.listen(8088, function (error) {
  if (error) {
    console.error("error", error);
    process.exit(1);
  }
  console.log("Listening on port 8088");
});
