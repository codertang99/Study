type InfoType = {
  url: string,
  method: "GET" | "POST"
}

const info = {
  url: "www.tang.org",
  method: "GET"
} as const

function request(url: string, method: "GET" | "POST") {
  console.log(url, method)
}

request(info.url, info.method) // 字面量推理