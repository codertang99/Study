class Animal {
  action() {
    console.log("animal run")
  }
}

class Dog extends Animal {
  action() {
    console.log("dog run")
  }
}

class Fish extends Animal {
  action() {
    console.log("fish swing")
  }
}

// 多态使其代码更具有通用性, 父类的引用指向子类的对象
function actionFun(animals: Animal[]) {
  animals.forEach(item => {
    item.action()
  })
}

actionFun([new Fish(), new Dog])