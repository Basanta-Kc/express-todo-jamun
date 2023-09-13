const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const todos = ["learn html", "learn css"];

app.get("/", (req, res) => {
  res.render("index", {
    todos: todos,
  });
});

app.post("/todos", (req, res) => {
  todos.push(req.body.todoItem);
  res.redirect("/");
});

app.get("/todos/edit/:id", (req, res) => {
  const todo = todos[req.params.id];
  res.render("edit", {
    index: req.params.id,
    todo: todo,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
