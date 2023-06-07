import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import { create } from "express-handlebars";
import { ifEquality } from "./views/helpers/ifEquality";
import { studentsRouter } from "./routers/studentsRouter";
import { adminRouter } from "./routers/adminRouter";
import cookieParser from "cookie-parser";

import bodyParser from "body-parser";
import { verify } from "./utils/jwtservice";

const app = express();

const hbs = create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: { ifEquality },
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//default view directory
app.set("views", path.join(__dirname, "./views"));

app.use((req, res, next) => {
  const jwtCookie = req.cookies.jwt;
  const payload = verify(jwtCookie);
  if (payload) {
    req.jwt = payload;
    next();
  } else {
    res.redirect("/");
  }
});

app.get("/", (req, res) => {
  res.render("home", {
    layout: "hero",
    title: "School Application",
    // isAdmin: false,
  });
});
app.get("/students", (req, res) => {
  res.render("students", {
    layout: "navigation",
    title: "Student Details",
    data: [{ id: 1, firstName: "rajat", lastName: "Gupta" }],
  });
});

app.get("/add-student", (req, res) => {
  res.status(200).render("addStudents", {
    layout: "navigation",
    title: "Add Student",
    action: "/api/students",
    method: "POST",
  });
});

app.get("/edit-student/:id", (req, res) => {
  res.status(200).render("addStudents.hbs", {
    layout: "navigation",
    title: "Edit Student",
    // TODO: Required Student logic has to be implemented after learning Postgres
    // student: requiredStudent,
    // action: "/api/students/" + requiredStudent.id,
    method: "PUT",
  });
});

app.get("/admin-login", (req, res) => {
  res.status(200).render("adminLogin.hbs", {
    layout: "login",
    title: "Admin",
    submitTarget: "/api/admin/login",
    submitMethod: "POST",
    formTitle: "Admin Login",
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/admin", adminRouter);
app.use("/api/students", studentsRouter);

app.get("admin-login");

app.listen("3000", () => console.log("App is running"));
