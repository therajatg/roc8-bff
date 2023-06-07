import express from "express";
import { db } from "../database-setup/db";

const app = express();

export const studentsRouter = express.Router();

studentsRouter
  .get("/", async (req, res) => {
    try {
      const allStudents = await db.selectFrom("students").selectAll().execute();
      res.status(200).json(allStudents);
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Server Error");
    }
  })

  .post("/", async (req, res) => {
    console.log("dcfc", req.body);
    try {
      const result = await db
        .insertInto("students")
        .values(req.body)
        .executeTakeFirst();
      res.status(200).send("Student successfully added");
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Server Error");
    }
  })

  .get("/:id", async (req, res) => {
    try {
      const result = await db
        .selectFrom("students")
        .selectAll()
        .where("id", "=", parseInt(req.params.id))
        .executeTakeFirst();
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).send("student not availabe");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Server Error");
    }
  })

  .put("/:id", async (req, res) => {
    try {
      const result = await db
        .updateTable("students")
        .set(req.body)
        .where("id", "=", parseInt(req.params.id))
        .executeTakeFirst();
      if (result) {
        res.status(200).json({ message: "Student Updated!" });
      } else {
        res.status(400).send("Student unavailable");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send("Internal Server Error");
    }
  })

  .delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const validStudent = await db
        .selectFrom("students")
        .where("id", "=", parseInt(id))
        .executeTakeFirst();
      if (validStudent) {
        await db
          .deleteFrom("students")
          .where("id", "=", parseInt(id))
          .executeTakeFirst();
        res.status(200).json({
          message: "Student has been deleted",
        });
      } else {
        res.status(400).send("Invalid Student");
      }
    } catch (e) {
      console.error(e);
      res.status(500).send("Internal Server Error");
    }
  });
