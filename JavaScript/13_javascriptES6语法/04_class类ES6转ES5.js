class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  running() {
    console.log(this.name + " running~");
  }

}

class Student extends Person {
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }

  studying() {
    console.log(this.name + " studying~");
  }
}

// --------------------------------------------
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

/**
 * 
 * @param {*} subClass 传入子类
 * @param {*} superClass 传入需要继承的父类
 */
function _inherits(subClass, superClass) {
  // 边界判断
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  // 设置子类对象原型 -> 创建一个新对象, 新对象上的原型指向父类的原型
  // 同时设置属性描述符constructor为类本身
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  // 如果父类存在则调用_setPrototypeOf
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/**
 * 
 * @param {*} o 传入子类
 * @param {*} p 传入父类
 * @returns 
 */
function _setPrototypeOf(o, p) {

  // 逻辑或操作, 判断是否存在Object.setPrototypeOf, 如果存在则直接使用Object.setPrototypeof
  _setPrototypeOf =
    Object.setPrototypeOf ||
    // 不存在Object.setPrototypeof -> 则返回自定义函数, 给对象的隐式原型设置属性
    function _setPrototypeOf(o, p) {
      // 让子类的隐式原型指向 -> 父类对象
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

/**
 * 
 * @param {*} Derived 传入的子类 
 * @returns 
 */
function _createSuper(Derived) {
  // 判断当前是否支持Reflect方法
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  // 返回一个新的函数, 实际上就是一个闭包
  return function _createSuperInternal() {
    // 获取派生类的原型对象, 就是父类对象这里指的是Person
    var Super = _getPrototypeOf(Derived),
      result;
      // 判断是否支持Reflect
    if (hasNativeReflectConstruct) {
      // 获取当前原型对象上的constructor
      var NewTarget = _getPrototypeOf(this).constructor;
      // 调用Reflect方法
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      // 不存在直接调用父类构造函数apply方式调用
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * 
 * @param {*} target 传入的类原型对象
 * @param {*} props 带有描述符的数组对象
 */
function _defineProperties(target, props) {
  // 对数组进行遍历
  for (var i = 0; i < props.length; i++) {
    // 取出每一个对象
    var descriptor = props[i];
    // 如果对象有可枚举属性直接使用, 反之false
    descriptor.enumerable = descriptor.enumerable || false;
    // 可配置
    descriptor.configurable = true;
    // 判断是否有value -> 如果有则可写属性为true
    if ("value" in descriptor) descriptor.writable = true;
    // 对类原型对象上添加属性, 并设置上面的描述符
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

/**
 * 
 * @param {*} Constructor 传入的类
 * @param {*} protoProps  传入的类成员方法
 * @param {*} staticProps 传入的类成员静态方法
 * @returns 
 */
function _createClass(Constructor, protoProps, staticProps) {
  // 判断如果有成员方法执行_definePropertier, 并传入类原型对象, 和当前类成员数组属性
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  // 直接在类对象中设置static静态方法
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);  // 防止函数被直接调用, 判断当前this是否属于Person实例

    this.name = name;
    this.age = age;
  }

  // 调用封装的函数, 添加对应的成员方法
  _createClass(Person, [
    {
      key: "running",
      value: function running() {
        console.log(this.name + " running~");
      }
    }
  ]);

  return Person;
})();

var Student = /*#__PURE__*/ (function (_Person) {
  // 调用封装的继承函数
  _inherits(Student, _Person);

  var _super = _createSuper(Student);

  function Student(name, age, sno) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, age);
    _this.sno = sno;
    return _this;
  }

  _createClass(Student, [
    {
      key: "studying",
      value: function studying() {
        console.log(this.name + " studying~");
      }
    }
  ]);

  return Student;
})(Person);
