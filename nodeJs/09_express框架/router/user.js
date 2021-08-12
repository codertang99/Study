const express = require('express');

const userRouter = express.Router()


userRouter.get("/login", (req ,res ,next) => {
  res.end("get login")
})

userRouter.post("/login", (req, res, next) => {
  res.end("post login")
})

userRouter.delete("/login", (req, res, next) => {
  res.end("delete login")
})

module.exports = userRouter