# 给node传递参数
1. 在终端中执行**node [执行的文件] [传递的参数]**
2. 在process中的**argv**中获取传入的值

# node程序的输出
1. *console.clear()* 控制台打印完自动清空
2. *console.trace()* 打印程序的调用栈

# node中的全局对象
1. 特殊的全局对象
  1. __dirname当前文件所在的目录
  2. __filename当前文件的名字
2. 全局对象
  1. process提供node进程中的相关信息(运行环境、参数信息)
  2. 计时器的全局对象(setTimeout、setInterval、setImmediate、process.nextTick)
  3. global全局对象(global.  )