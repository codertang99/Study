var obj = {
  data: [],
  getData() {
    setTimeout(() => {  // 从上层作用域上面找
      console.log(this);
      this.data = ["a", "v", "c"]
    }, 2000);
  }
}

obj.getData()

console.log(obj);