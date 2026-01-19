import express from "express";
import dotenv from "dotenv";
dotenv.config();
console.log("✓ .env loaded - PORT:", process.env.PORT, "| MONGO_URI:", process.env.MONGO_URI ? "✓" : "✗");
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";



const app = express();
const __dirname = path.resolve();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(
  cors({
    origin: process.env.FRONTEND_URL || true,
    credentials: true,
  })
);


app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

/* ================= FRONTEND SERVING ================= */
app.use(express.static(path.join(__dirname, "../frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend", "dist", "index.html")
  );
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
