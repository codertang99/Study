console.log("给node传递参数");
console.log(process)

console.clear()

process.argv.forEach(element => {
  console.log(element)
});

console.trace()