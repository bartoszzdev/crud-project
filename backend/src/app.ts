import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", routes);

const port = process.env.PORT || 8000;
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    app.listen(port, () => {
      console.log("running");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
