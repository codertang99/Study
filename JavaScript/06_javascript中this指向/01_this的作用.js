// this指向是方便我们更易于操作的, 当然也可以不是使用this, 但是这样会缺少灵活性
// 我们使用this就是便于更加易于操作
var obj = {
  name: "tang",
  eating: function() {
    console.log(this.name + "eating");
  },
  running: function() {
    console.log(this.name + "running");
  },
  sleeping: function() {
    console.log(this.name + "sleeping");
  }
}

var bar = {
  name: "bar",
  eating: function() {
    console.log(this.name + "eating");
  },
  running: function() {
    console.log(this.name + "running");
  },
  sleeping: function() {
    console.log(this.name + "sleeping");
  }
}

console.log(obj, bar);