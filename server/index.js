import express from "express"

import db from "./db.js"

const PORT = process.env.PORT || 3000
const server = express()

// CONFIG
server.use(express.json())
server.use(express.urlencoded())
server.set('views', './server/views')
server.set('view engine', 'ejs')

server.get("/", (req, res) => {
  res.render("home")
})

server.get("/about", (req, res) => {
  res.render("about")
})

server.get("/works", (req, res) => {
  res.render("works")
})

// READ
server.get("/tareas", (req, res) => {
  res.render("tareas", {tasks: db.data.tasks})
})

// server.get("/tasks/:id", (req, res) => {})

// CREATE
server.post("/tareas", (req, res) => {
  const { title } = req.body
  const tasks = db.data.tasks
  const newTask = {
    title: title,
    id: tasks.length,
    completed: fals,
  }

  tasks.push(newTask)
  res.redirect("/tareas")
})

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
