class Cache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key, value) {
    if(value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    if(value) {
      value = JSON.parse(value)
    }
    return value
  }

  key(index) {
    return this.storage.key(index)
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

}

const local = new Cache()
const session = new Cache(false)

export {
  local,
  session
}