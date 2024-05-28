import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import rootRouter from "./routes/index.route";
import { apiResponse } from "./interfaces/apiResponse";
import * as middlewares from "./middlewares/index.middleware";

const app = express();

// Middlewares
// Enable CORS with specified origin and credentials
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(helmet());
app.use(express.static("public"));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Default route for the root path
app.get<{}, apiResponse>("/", (req, res) => {
  res.status(200).json({
    message: "API is working properly.",
  });
});
app.use("/api/v1", rootRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export { app };
