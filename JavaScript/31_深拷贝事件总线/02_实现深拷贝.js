function isObject(value) {
  const valueType = typeof value

  return ((value !== null) && (valueType === "object" || valueType === "function"))
}


function deepCopy(raw, weak = new WeakMap()) {

  // 判断值的Map类型
  if(raw instanceof Map) {
    return new Map([...raw])
  }

  // 判断值得Set类型
  if(raw instanceof Set) {
    return new Set([...raw])
  }

  // 判断值的Symbol类型
  if(typeof raw === "symbol") {
    return Symbol(raw.description)
  }
  // 判断是否是对象类型
  if(!isObject(raw)) {
    return raw
  }

  // 判断函数类型
  if(typeof raw === "function") {
    return raw
  }

  // 判断map中是否存在次对象
  if(weak.has(raw)) {
    return weak.get(raw)
  }

  // 判断是否是数组
  const newObject = Array.isArray(raw) ? [] : {}
  weak.set(raw, newObject)

  for(let o in raw) {
    newObject[o] = deepCopy(raw[o], weak)
  }

  const symbols = Object.getOwnPropertySymbols(raw)
  for(let s of symbols) {
    // 如果这里需要创建新的symbol, 用newSymbol即可
    // const newSymbol = Symbol(s.description)
    newObject[s] = deepCopy(raw[s], weak)
  }

  return newObject

}

const s1 = Symbol("ssss")
const s2 = Symbol("cccc")
const obj = {
  name: "hello",
  friends: {
    name: "lucy",
    address: {
      province: "江西",
      city: "赣州"
    }
  },
  arr: ["c", "a", "d"],
  foo: function() {
    console.log("ccc");
  },
  [s1]: "123",
  hh: s2,
  set: new Set(["123", "@34", "@342"]),
  map: new Map([["@34", "343"], ["rrr", "435"]]),
}

obj.own = obj

const news = deepCopy(obj)
console.log(news);