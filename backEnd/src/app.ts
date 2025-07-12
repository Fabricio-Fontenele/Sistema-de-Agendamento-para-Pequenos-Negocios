import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoute";

import businessRoutes from "./routes/businessRoute";
import serviceRoutes from "./routes/serviceRoute";
import providerRoutes from "./routes/providerRoute";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/businesses", businessRoutes);
app.use("/services", serviceRoutes);
app.use("/providers", providerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API de agendamento online está rodando!" });
});

export default app;
