# Vue3基本指令

1. mustache语法 {{}}  双大括号语法, 用于在view层展示数据
2. v-once 在view层只做一次渲染
3. v-text 渲染data中的数据  和mustache类似
4. v-pre 用于展示{{}} 不做解析mustache语法
5. v-cloak 在渲染view层的时候, 页面还没来得及渲染可以添加cloak 动态样式进行隐层
6. v-html data中的数据, 会对html代码进行解析