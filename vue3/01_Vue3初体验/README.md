# template模板的用法

  - 第一种用法、实际上是document.querySelector()
  ```javascript
    <script type="x-template" id="tang">
      <div>
        <h2>{{ num }}</h2>
        <div>Hello World !!!</div>
      </div>
    </script>
  ```
  - 第二种用法、template模板是html中存在的元素, 浏览器并不会渲染， vue会帮我们做渲染， 实际上是document.querySelector()
  ```javascript
    <template id="tang">   
      <h2>{{ title }}</h2>
    </template>
  ```