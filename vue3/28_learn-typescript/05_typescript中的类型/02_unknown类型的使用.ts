// 对于any类型, 可以赋值给任意类型使用
// 对于unknown类型, 只能赋值给any或unknown类型

// 用于不确定的类型
let tang: unknown

let flag: boolean = true

if(flag) {
  tang = "123"
} else {
  tang = 123
}
