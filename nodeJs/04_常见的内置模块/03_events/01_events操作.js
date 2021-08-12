const EventEmitter = require("events")
const emitter = new EventEmitter()

emitter.on("add", (args) => {
  console.log(args)
})

emitter.once("add",(args) => {
  console.log(args)
})

emitter.prependListener("add2", () => {
  console.log("add2")
})

setTimeout(() => {
  emitter.removeAllListeners()
  emitter.emit("add2")
  emitter.emit("add",123)
  emitter.emit("add",123)
  console.log(emitter.eventNames())
  console.log(emitter.getMaxListeners())
  console.log(emitter.listenerCount("add"))
  console.log(emitter.listeners("add"))
}, 1000);


module.exports.emitter = emitter

