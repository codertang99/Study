// 通过enum枚举类型定义标识量
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM = "BOTTOM"
}
// 默认情况下枚举类型是以0递增的数值
// 可以自己指定对应变量的值只赋值开头数值则依次递增


function bar(direction: Direction) {
  switch(direction) {
    case Direction.LEFT:
      console.log("left", Direction.LEFT)
      break;
    case Direction.RIGHT:
      console.log("right", Direction.RIGHT)
      break;
    case Direction.TOP:
      console.log("top", Direction.TOP)
      break;
    case Direction.BOTTOM:
      console.log("bottom", Direction.BOTTOM)
      break;
    default:
      const info: never = direction
      throw new Error(info)
  }
}

bar(Direction.LEFT)
bar(Direction.RIGHT)
bar(Direction.TOP)
bar(Direction.BOTTOM)

export {}