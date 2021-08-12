// 泛型的作用使其类型参数化
// 通常不明确指定类型, 而通过调用者传递对应类型参数
function foo<T>(num: T): T {
  return num
}

foo<number>(123)

function bar<T, E>(str1: T, str2: E, str3?: T, ...args:T[]) {
  
}

bar<string, number>("hello", 123, "tang", "df","Adf")

/**
 *  T：Type的缩写，类型
    pK、V：key和value的缩写，键值对
    pE：Element的缩写，元素
    pO：Object的缩写，对象
 * 
 */