/**
 *  一个类继承另一个类, 又同时需要引用其它类的某个方法的时候可以使用mixin的技巧
 */

class Person {
  studying() {
    console.log("studying");
  }
}

/**
 * 
 * @param {*} MixinClass 需要增强的class
 */
function EatMixin(MixinClass) {
  // 创建出一个新的类, 继承自传入需要增强的class
  class NewClass extends MixinClass {
    // 对新class进行增强
    eating() {
      console.log("eating");
    }
  }

  // 返回增强过后的新类
  return NewClass
}


/**
 * Student类需要mixin其它的方法
 */
class Student extends Person {
}

var NewStudent = EatMixin(Student)
var ns = new NewStudent()

console.log(ns);
ns.eating()
ns.studying()
