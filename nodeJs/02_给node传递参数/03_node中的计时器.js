setTimeout(() => {
  console.log("setTimeout")
}, 10);

setInterval(() => {
  console.log("setInterval")
}, 1000);

setImmediate(() => {
  console.log("setImmediate")
})

process.nextTick(() => {
  console.log("nextTick")
})