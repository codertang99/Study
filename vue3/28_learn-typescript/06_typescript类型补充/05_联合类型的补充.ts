function bar(msg: string | number) {
  if(typeof msg === "string") {
    // narrow范围缩小、缩小联合
    console.log(msg.length)
  } else {
    console.log(msg)
  }
}

// 可选类型其实是、类型和undefined的联合类型