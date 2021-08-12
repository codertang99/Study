function handleMessage(msg: string | number) {
  switch(typeof msg) {
    case "string": 
      console.log(msg)
      break
    case "number":
      console.log(msg)
      break
    default:
      const check: never = msg
  }
}

handleMessage("hello")