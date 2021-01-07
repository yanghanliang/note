ts 安装与简单配置： `https://blog.csdn.net/weixin_44135807/article/details/98211400`

##### 定义类型的两种方式

```js

// 方式一:
let arr:Array<number>=[1, 2, 3, 4]
// 方式二:
let arr:number[]=[1, 2, 3, 4]

```

##### 多种类型的定义

```js

let test: number | null | string | undefined

```

##### 特殊类型的使用

```js

// 当方法没有返回值时可以使用 void
function test ():void {

}

// any
let ele:any = document.body
ele.style.color = 'red'

// never 重来不会出现的值
let test:never
a = (() => {
    throw new Error('123')
})()

// enum 枚举类型
enum Test {
    'success' = 200,
    'error' = 404,
    'redirect' = 302
}

let httpStatus:Test = Test.success // 200

```


