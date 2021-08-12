type Point = {
  x: number,
  y: number,
  z?: number
}

type ID = string | number

const msg: ID = 123

function foo(position: Point) {
  console.log(position.x, position.y, position.z)
}

foo({x: 1, y: 2})

export {}