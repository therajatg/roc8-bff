import express, { Response, Request } from "express";
import {
  PostToDoRequestBody,
  ToDo,
  GetToDosResponse,
  PatchToDoParams,
  PatchToDoResponse,
  DeleteToDoParams,
} from "./dataTypes";

const app = express();
app.use(express.json());

let todos: ToDo[] = [];

app.get("/todos", (req, res: Response<GetToDosResponse>) => {
  res.json(todos);
});

app.post("/todos", (req: Request<{}, {}, PostToDoRequestBody>, res) => {
  const todo = {
    id: Date.now(),
    task: req.body.task,
    done: false,
  };

  todos.push(todo);

  res.status(201).json(todo);
});

app.patch(
  "/todos/:id",
  (req: Request<PatchToDoParams>, res: Response<PatchToDoResponse>) => {
    const id = parseInt(req.params.id);

    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos[index].done = !todos[index].done;

    res.json(todos[index]);
  }
);

app.delete("/todos/:id", (req: Request<DeleteToDoParams>, res) => {
  const id = parseInt(req.params.id);

  todos = todos.filter((todo) => todo.id !== id);

  res.status(204).end();
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
