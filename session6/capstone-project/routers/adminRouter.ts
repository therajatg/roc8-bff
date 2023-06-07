import express from "express";
import { db } from "../database-setup/db";
import { compareHash } from "../utils/hash";
import { sign } from "../utils/jwtservice";

const app = express();

export const adminRouter = express.Router();

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await db
    .selectFrom("admin")
    .where("admin.email", "=", email)
    .selectAll()
    .executeTakeFirst();

  if (admin) {
    // console.log(admin.password);
    const isPasswordValid = compareHash(password, admin.password);
    if (isPasswordValid) {
      //   res.send("valid user");
      const token = sign({
        sub: "admin",
        email,
      });
      res.cookie("jwt", token, { httpOnly: true });
    } else {
      res.status(400).send("Invalid User");
    }
  } else {
    res.status(400).send("Invalid User");
  }
});
