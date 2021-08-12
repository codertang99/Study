// typeof 类型判断缩小
function foo(message: string | number) {
  if(typeof message === "string") {
    console.log(message.toLocaleUpperCase())
  } else {
    console.log(message)
  }
}

type Direction = "left" | "center" | "right"
// 平等缩小
function turnDirection(direction: Direction) {
  switch(direction) {
    case "left":
      console.log(direction)
      break;
    case "center":
      console.log(direction)
    case "right":
      console.log(direction)
  }
}

// instanceof
function formatDate(date: string | Date) {
  if(date instanceof Date) {
    console.log(date.getUTCDate)
  } else {
    console.log(date)
  }
}

class Student {
  saying() {
    console.log("student saying")
  }
}

class Teacher {
  listening() {
    console.log("teacher listening")
  }
}

function bar(instance: Student | Teacher) {
  if(instance instanceof Student) {
    instance.saying()
  } else {
    instance.listening()
  }
}


type T1 = {
  runing: () => void
}

type T2 = {
  swing: () => void
}

function baz(type: T1 | T2) {
  if("runing" in type) {
    type.runing()
  } else {
    type.swing()
  }
}

export {}