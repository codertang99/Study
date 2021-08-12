# no_module
  - JavaScript没有模块化出现的问题
  - 多人协同不利于开发、命名冲突各式各样的问题
  - 代码混乱不堪、没有合适的规范  
# commonjs模块化
  - node中就是一个具有代表性的实现
  - node中每一个js文件都是一个模块
  - exports、module.exports、require
  - 在commonjs规范中通过exports的形式进行导出，实际就是一个对象的引用复制
  require进行导入，require导入的对象和exports导出的对象引用着同一块区域
  - 通过exports.[属性名]导出对象
  - 通过require的方式访问
  - 最终导出的其实就是module.exports，只是执行了module.exports = exports,就是引用赋值
# AMD模块化
  - 引入require.js
  ```html
    <script src="./lib/require.js" data-main="./index.js"></script>
  ```
  - 在index.js中引用模块，定义模块
  ```javascript
    (function() {
      require.config({
        baseUrl:"",
        foo: "./modules/foo",
        bar: "./modules/bar"
      })
      define(["foo"],function(foo) {})
    })()
  ```

  - 在foo中定义要导出的对象,bar中使用模块化对象
  ```javascript
    // bar
      define(function() {
        const name = "丽丽"
        const age = 18
        return {
          name,
          age
        }
      })

    // foo
      define(["foo"],function(foo) {
        console.log(foo.name)
        console.log(foo.age)
      })
  ```
# CMD中引用模块化
  - 引入seajs文件,在代码中定义主入口
  ```html
    <script src="./lib/sea.js"></script>
    <script>
      seajs.use("./index.js")
    </script>
  ```
  - 在indexjs中引入模块,foo,bar中导出引入,通过define定义,导入导出方式与cjs相似
  ```javascript
    // index中
    define(function(require,exports,module) {
      const foo = require("./modules/foo")
    })

    // foo中
    define(function(require,exports,module) {
      const bar = require("./bar")
      console.log(bar.name)
      console.log(bar.age)
    })

    // bar中
    define(function(require,exports,module) {
      const name = "小明"
      const age = 18

      module.exports = {
        name,age
      }
    })
  ```
# es6 module
  - 在html中引入index.js,type类型设置为module,即可导入导出使用es6模块，通过关键字,import、export、export default
  - 导出方式
    1. export const name = "ing"
    2. export {  }
    3. export default (默认导出)
  - 导入方式
    1. import {} from ""
    2. import * as mo from ""
    3. import modules from "" (在导入的时候可以自己指定名字)
  - 注意，import导入不可以放在逻辑代码中，因为它必须知道依赖关系，可通过import()函数
