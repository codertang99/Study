function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(url === "tang") {
        const name = ["123", "!23", "adfs"]
        resolve(name)
      } else {
        reject("请求失败")
      }
  
    }, 3000);
  })
}
// 使用Promise.then的方式来接收网络请求的结果
getData("tang").then(function(res) {
  console.log(res);
}, function(err) {
  console.log(err);
})