class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if(activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}


let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

// Map({key: value}): key是一个字符串
// WeakMap(key(对象): value): key 是一个对象, 弱引用

const targetMap = new WeakMap();
function getDep(targe, key) {
  // 1. 根据对象取出对应的Map对象
  let depsMap = targetMap.get(targe)

}

// vue2 对row进行数据劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {

    const dep = new Dep()

    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
      },
      set(newValue) {

      }
    })
  })
}

const info = {
  counter: 100
}

watchEffect(function doubleCounter() {
  console.log(info.counter * 2);
})
info.counter++