const indexDB = indexedDB.open("tang", 1)

indexDB.error = function(err) {
  console.log("数据库打开失败", err);
}

let db = null
indexDB.onsuccess = function(event) {
  console.log("数据库连接成功");
  db = event.target.result

  const transaction = db.transaction("users", "readwrite")
  const store = transaction.objectStore("users")
  store.add({id: 1, name: "tang", age: 20})
  const cursorRequest = store.openCursor()
  cursorRequest.onsuccess = function(event) {
    // 游标对象
    const cursor = event.target.result
    if(cursor) {
      console.log(cursor.key, cursor.value);
      cursor.continue()
    }
    
    // 删除
    if(cursor) {
      if(cursor.key === 100) {
        cursor.delete()
      } else {
        cursor.continue()
      }
    }

    // 更新
    if(cursor) {
      if(cursor.key === 100) {
        const value = cursor.value
        value.age = 1000
        cursor.update(value)
      } else {
        cursor.continue()
      }
    }


  }
}

indexDB.onupgradeneeded = function(event) {
  console.log("第一次创建打开或版本发生更新时回调");

  const db = event.target.result
  
  db.createObjectStore("users", { keyPath: "id" })
}

