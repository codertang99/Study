function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}

Person.prototype.running = function() {
  console.log(this.name + "running");
}

function Student(name, age, height, sno) {
  // 通过apply方式this调用, 防止重复调用, 本质上还是在this上即调用者放置对象
  Person.apply(this, [name, age, height])
  this.sno = sno
}

Student.prototype = new Person("person", 0, 0)
Student.prototype.constructor = Student

var s = new Student("tang", 19, 1.99, 001);

console.log(s);

function Teacher(name, age, height, ad) {
  Person.apply(this, [name, age, height])
  this.ad = ad
}

Teacher.prototype = new Person()
Teacher.prototype.constructor = Teacher