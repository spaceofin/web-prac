import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import { corsMiddleware } from "./middlewares/corsMiddleware.js";
import testCorsRouter from "./routes/test-cors.js";

dotenv.config();

const app = express();

// app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(corsMiddleware);
app.use(express.json());
app.use("/test-cors", testCorsRouter);

app.get("/", (req, res) => {
  res.status(200).send("hello, express");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
