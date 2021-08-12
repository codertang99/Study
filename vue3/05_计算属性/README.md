# 计算属性

1. computed对象, 直接像编写函数一样fullName(), 用于复杂的逻辑展示(只是默认调用了它的get方法)
```javascript
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
```
2. computed其实是一个对象
```javascript
  format: {
    get() {
      return this.num + 1; 
    },
    set(value) {
      this.num = value
    }
    // 计算属性的set方法调用, 直接给计算属性赋值, 在set方法的参数可以获取
  }
```