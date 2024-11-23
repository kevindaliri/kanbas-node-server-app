import express from "express";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import Lab5 from "../Lab5/index.js";
import UserRoutes from "./Kanbas/Users/routes.js";  // verify this path
import CourseRoutes from "./src/Kanbas/Courses/routes.js";  // verify this path

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}

app.use(session(sessionOptions));
app.use(express.json());

UserRoutes(app);
CourseRoutes(app);
Lab5(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);