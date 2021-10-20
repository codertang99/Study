const str = "    this is my         "

// 可以通过trim方法去除两边空格
console.log(str.trim());

// 还可以通过trimStart和trimEnd对字符进行精准去除

// 去除字符左边
console.log(str.trimStart());

// 去除字符右边
console.log(str.trimEnd());

// 当然这里还有trimLeft和trimRight方法也可以去除左和右两边空格, 这两个方法可能有些不支持的