import express from "express";
//import mediaRoutes from "./routes/mediaRoutes";
//import logRoutes from "./routes/logRoutes";
//import serieRoutes from "./routes/serieRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

//app.use("/api/medias", mediaRoutes);
//app.use("/api/logs", logRoutes);
//app.use("/api/series", serieRoutes);
app.use("/api/users", userRoutes);