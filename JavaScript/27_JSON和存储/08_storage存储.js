/**
 * 浏览器存储分为localStorage和sessionStorage两类存储
 *  localStorage存储, 本地存储, 永久性存储, 关闭浏览器也不会清除
 *  sessionStorage存储, 会话存储, 以一次会话, 一个标签页为限, 关闭当前标签则清除
 */

window.localStorage.setItem("local", "localStorage")
window.sessionStorage.setItem("session", "sessionStorage")

console.log(localStorage.length);