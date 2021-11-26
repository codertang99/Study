/**
 * 实现简单的事件总线
 *  主要是emit、on、off这三个方法
 */
class EventBus {

  constructor() {
    this.eventObj = {}
  }

  emit(eventName, ...args) {
    const event = this.eventObj[eventName]
    if(!event) return
    event.forEach(fns => {
      fns.eventFun.apply(fns.thisArgs, args)
    })
  }

  on(eventName, eventFun, thisArgs) {
    
    let event = this.eventObj[eventName]
    if(!event) {
      event = []
      this.eventObj[eventName] = event
    }
    event.push({
      eventFun,
      thisArgs
    })
  }

  off(eventName, eventTarget) {
    const event = this.eventObj[eventName]
    if(!event) return
    const newEvent = [...event]
    for(let i=0; i<newEvent.length; i++) {
      const handle = newEvent[i]
      if(handle.eventFun === eventTarget) {
        const index = event.indexOf(handle)
        event.splice(index, 1)
      }
    }
  }

}

const event = new EventBus()

const fn = function(e) {
  console.log("hello first", e, this);
}

event.on("first", fn, {name: "adf"})

event.on("first", function(e) {
  console.log("hello first", e, this);
}, {name: "tang"})

event.off("first", fn)

event.emit("first", "您好呀")