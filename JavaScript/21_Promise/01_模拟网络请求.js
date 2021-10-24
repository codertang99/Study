/**
 *  下方函数用于模拟网络请求, 如果传入tang返回正确结果, 传入其它则返回失败结果
 */
function getData(url, successCallback, faultCallback) {

  setTimeout(() => {

    if(url === "tang") {
      const name = ["123", "!23", "adfs"]
      // 很显然这样通过return方式是返回不了结果的, 只是作为settimeout传入的函数的返回值
      // return name
      successCallback(name)
    } else {
      faultCallback("请求失败")
    }

  }, 3000);
}

// 可以通过传入回调函数的方式来获取网络请求的值
/**
 * 但是这样有一个弊端, 如果都这样使用的话, 那对请求函数我们都要知道对应的传入参数的值, 每一个统一的规范
 */
getData("tang", (res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})