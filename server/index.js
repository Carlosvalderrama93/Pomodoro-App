import express from "express"

const PORT = process.env.PORT || 3000
const server = express()

server.set('views', './server/views')
server.set('view engine', 'ejs')

// VERBS
// POST   = CREATE
// GET    = READ
// PUT    = UPDATE
// DELETE = DELETE
server.get("/", (req, res) => {
  res.render("home")
})

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
