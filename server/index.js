import express from "express"
import nunjucks from "nunjucks"

import db from "./db.js"

const PORT = process.env.PORT || 3000
const server = express()

// CONFIG
server.use(express.json())
server.use(express.urlencoded())
server.set('views', './server/views')
server.set('view engine', 'html')
nunjucks.configure('views', {
  autoescape: true,
  express: server
});


server.get("/", (req, res) => {
  res.render("home")
})

//------ Aquí---
server.get("/tasks2", (req, res) => {
  res.render("tasks2", {tasks: db.data.tasks});
});

// server.get("/tasks/:id", (req, res) => {})

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
