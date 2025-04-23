import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import index from './routes'
import routes from "./routes";
// import { registerRouter } from "./controllers/register";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/",routes);

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.error("MongoDB error:", err));

export default app;
