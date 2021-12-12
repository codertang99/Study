/**
 * 利用webpack-dev-server方式, 把webpack编译过后, 不生成文件
 * 放入缓存中, 直接利用express开启服务, 也会实时刷新网页
 */

import React, { Component } from "react";
import ReactDom from "react-dom"
import { createApp } from "vue"

import App from "./index.jsx"
import VueApp from "./index.vue"

import "./math";

console.log("hello world tang1");

ReactDom.render(<App/>, document.querySelector("#app"))

/**
 * 需要在webpack配置中devserve: {hot: true}
 * 同时对js文件加载, 需要做如下处理, 判断hot是否开启, accept加载模块资源
 */
if (module.hot) {
  module.hot.accept("./math", () => {
    console.log("模块加载成功");
  });
}

const app = createApp(VueApp)

app.mount("#root")