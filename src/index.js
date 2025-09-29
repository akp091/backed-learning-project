import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDb();

// import express from "express";

// const app = express();
// (async function connectDb() {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error in DB Connection", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log("App is listening on port 8000");
//     });
//   } catch (error) {
//     console.log("error", error);
//     throw error;
//   }
// })();
