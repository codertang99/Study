const events = require('events');
const { emitter } = require("./01_events操作")

emitter.on("add", (args) => {
  console.log(args)
})