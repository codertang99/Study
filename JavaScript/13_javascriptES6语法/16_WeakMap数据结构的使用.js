/**
 * WeakMap用于引用类型存储key
 *  它是不可遍历的, 它的key只能是引用数据类型
 *  它同样是使用弱引用的方式进行存储
 */

const o1 = {name: "tang"}
const o2 = {name: "height"}

const map = new WeakMap()

// WeakMap { <items unknown> }
// 注意它是不可遍历的
console.log(map);

// TypeError: Invalid value used as weak map key
// 注意它的key只能用引用数据类型, 否则报类型错误
// map.set("1", 123)
map.set(o1, "1")
map.set(o2, "2")

// 通过get的方式获取value
console.log(map.get(o1));

// 根据key判断是否存在
console.log(map.has(o2));

// 根据key删除值, 返回boolean
console.log(map.delete(o1));

// 应用场景: 响应式原理, 可以通过weakmap的方式来统一存储
// 创建一个weakmap映射用于放置, 每个对象的map集
const weakMap = new WeakMap()

// 分别每个对象的map集合存储每个对象内的对象关系集
const obj1Map = new Map()
const obj2Map = new Map()

const obj1 = {
  name: "tang",
  age: 19
}

const obj2 = {
  name: "lucy",
  height: 1.99
}

function obj1Name1Fun() {
  console.log("name");
}

function obj1Nmae2Fun() {
  console.log("name");
}

function obj2Hei1Fun() {
  console.log("heig");
}

function obj2Hei2Fun() {
  console.log("heig");
}

// 把一个对象的所有对象函数依赖都存放进一个map关系中, key对象对象的key, 值对应依赖关系的数组
obj1Map.set("name", [obj1Name1Fun, obj1Nmae2Fun])
obj1Map.set("age", [])
// 使用weakMap的方式存储一个个的对象, 把对象作为key, value是Map集合的对象内的依赖关系映射
weakMap.set(obj1, obj1Map)


obj2Map.set("name", [])
obj2Map.set("height", [obj2Hei1Fun, obj2Hei2Fun])
weakMap.map(obj2, obj2Map)