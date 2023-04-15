import express from "express"

import db from "./data/db.js"

const server = express()

server.use(express.json())

server.get("/", (req, res) => res.json({home: "welcome"}))
server.get("/tasks", (req, res) => {
  res.json({tasks: db.data.tasks})
})
server.post("/tasks", async (req, res) => {
  // save to the db
  const task = req.body
  db.data.tasks.push(task)

  await db.write()

  res.json({ status: "ok" })
})

server.listen(process.env.PORT || 80, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
