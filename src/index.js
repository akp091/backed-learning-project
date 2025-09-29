import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});
connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("MongoDB connection Error", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is runing at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed", err);
  });
