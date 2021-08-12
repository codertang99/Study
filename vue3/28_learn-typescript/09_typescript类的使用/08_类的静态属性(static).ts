// static静态类可以直接通过类名进行访问、通常把类共有的属性设置为static静态属性, 还有static静态方法
class Student {
  static time: string = "2021.8.2"

  static change() {
    console.log("static change")
  }

}

console.log(Student.time)
Student.change()
