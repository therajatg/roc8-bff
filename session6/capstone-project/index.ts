import express from "express";
import path from "path";
import { create } from "express-handlebars";
import { ifEquality } from "./views/helpers/ifEquality";

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

app.get("/", (req, res) => {
  res.render("home", {
    layout: "hero",
    title: "School Application",
    isAdmin: true,
  });
});
app.get("/students", (req, res) => {
  res.render("students", {
    layout: "navigation",
    title: "Student Details",
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

app.get("admin-login");

app.listen("3000", () => console.log("App is running"));
