define(function(require,exports,module) {
  const bar = require("./bar")

  console.log(bar.age);
  console.log(bar.name);
  console.log(bar);

})