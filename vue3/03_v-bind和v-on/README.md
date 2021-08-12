# v-bind和v-on的用法

## v-bind的用法

1. v-bind绑定基本属性
2. v-bind绑定class对象和数组语法
3. v-bind绑定style对象和数组语法
4. v-bind动态绑定属性和值  v-bind[属性名] = "属性值"
5. v-bind直接绑定对象,用于封装高阶组件, 直接传入对象

## v-on的用法

1. v-on:click监听事件, @click的是事件的语法糖
2. v-on传递参数, 默认会传递event参数, 如果要自己传递参数, 则需要($event, 参数)
3. v-on修饰符
  - .stop - 调用 event.stopPropagation()。
  - .prevent - 调用 event.preventDefault()。
  - .capture - 添加事件侦听器时使用 capture 模式。
  - .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
  - .{keyAlias} - 仅当事件是从特定键触发时才触发回调。
  - .once - 只触发一次回调。
  - .left - 只当点击鼠标左键时触发。
  - .right - 只当点击鼠标右键时触发。
  - .middle - 只当点击鼠标中键时触发。
  - .passive - { passive: true } 模式添加侦听器