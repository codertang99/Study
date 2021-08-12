interface IInfoNumber {
  [index: number]: string,
  Java: string
}

interface IInfoString {
  [name: string]: string
}

const infos: IInfoNumber = {
  0: "!23",
  1: "Java",
  Java: "hello Java"
}

const inf: IInfoString = {
  "1": "hello"
}