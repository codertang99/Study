// 自定义一个Classroom类, 使其具有可迭代性

function Classroom(address, name, students) {
  this.address = address
  this.name = name
  this.students = students
}

Classroom.prototype.entry = function(student) {
  this.students.push(student)
}

Classroom.prototype[Symbol.iterator]  = function() {
  let index = 0
  return {
    next: () => {
      if(index < this.students.length) {
        return { done: false, value: this.students[index++] }
      } else {
        return { done: true, value: undefined }
      }
    },
    // 实现return方法 -> 用于监听迭代器停止
    return : function() {
      console.log("迭代器停止了~");
      return { done: true }
    }
  }
}

Classroom.prototype[Symbol.iterator] = function* () {
  // 直接利用yield* 简写后面跟上一个可迭代对象
  yield* this.students
}

var c = new Classroom("5栋506", "实训室", [123, 234, 345, 56])

// 上面类实现的可迭代对象函数, 所以可以进行遍历
for(let cc of c) {
  console.log(cc);
}