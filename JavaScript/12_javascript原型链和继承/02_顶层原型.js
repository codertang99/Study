/**
 * 这种字面量方式和new Object方式没有区别, 字面量方式相当于语法糖
 * 那么在new调用的时候发生了以下事情
 *  -> 在内存空间创建了一个对象
 *  -> 同时绑定把对象指向当前this
 *  -> 同时obj对象__proto__ === Object.prototype (即顶层对象)
 *  -> 执行函数体
 *  -> 返回当前this
 */

var obj = {
}

var obj2 = new Object()

// 这就是最顶层的原型对象Object.prototype
console.log(Object.prototype);

// constructor就指向Object函数本身
console.log(Object.prototype.constructor);  

// 那么在obj函数去访问对象的时候触发[[get]]方法, 如果找不到则去Object.prototype中找

// 这里其实是把obj的原型赋值给一个新的对象, 那新对象又是一个继承着Obejct原型的对象
// 又执行了Object的new方法, 新对象中__proto__指向Object.prototype
// 这样就形成了一个链条一样的东西
obj.__proto__ = {
}

console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);

// 在最顶层原型对象中往上就没有__proto__了, 则返回null
// 顶层原型中放着很多Obejct方法, 这样就是实例可以调用对应方法