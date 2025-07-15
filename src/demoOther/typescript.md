---
# cover: /assets/images/cover2.jpg // 展示banner图
icon: pen-to-square
date: 2024-7-23
category:
    - TypeScript
star: true
sticky: true
---

<!--
icon: pen-to-square  // 标题前的图标
date: 2022-01-12     // 文档的时间
category:            // 分类
  - 类型1
  - 类型2
tag:                 // 标签
  - 哈哈
  - 呵呵
star: true           // 未知
sticky: true         // 未知
 -->

# TypeScript 笔记

### 1.类型约束

-   **类型推断**（不建议使用）
    > TypeScript 自动会根据赋值类型，推断出变量的类型，如果赋值的不是推断的类型会报错。

```typescript
let str1 = "1" // 自动推断str1是String类型
str1 = 456 // 报错，str1是String类型，赋值的是Number类型
```

-   **类型注解**（建议使用）
    > 在变量后面加冒号和类型，如 str2:string。

```typescript
let str2: string = ""
str2 = 123 // 报错，不能将number类型赋值给string类型
```

-   **类型断言**

```typescript
let arr = [1, 2, 3]
// let res = arr.find(v=> v>2)
// let count = res*5  // 报错，ts不确定res的类型

let res = arr.find((v) => v > 2) as number // as number
// let res = <number>arr.find(v => v > 2);  // 等同 尖括号断言  尖括号语法在JSX文件中会产生歧义（可能被解析为React元素）
let count = res * 5 // 通过as number来约束res的类型
```

### 2.基础类型 和 联合类型

```typescript
let v1: string = "abc"
let v2: number = 123
let v3: boolean = true
let v4: null = null
let v5: undefind = undefind

let v6: string | number = 123 // 可以是字符串或者数字
let v7: 1 | 2 | 3 = 2 // 只能是123中的一个，如果赋值其他数字会报错
```

### 3.数组

```typescript
let arr1: number[] = [1, 2, 3] // 数字类型的数组，只能存数字

let arr2: Array<string> = ["a", "b", "3"] // 和上面等效，只能存放字符串类型
```

### 4.元组

> 指定数组的元素个数和元素类型

```typescript
let arr1: [number, string, null?] = [1, "a"] // 固定数组长度， 数组的第一个元素必须是number，第二个必须是string，第3个是可选值（如果有，必须是null）
```

### 5.枚举类型

> 枚举相当于生成一个对象，如果没有赋值的话，会自动生成两个属性：key=索引，索引=key；如果有赋值，则自动生成一个属性：key=key。
> 枚举类型如果有一个赋值了，且不是数字，那么后面的都要赋值；如果赋值的是数字，那么默认就是索引，后面的就按照这个自增，前面的依然从 0 开始自增。
> 通常用于状态管理、换肤等地方，主要是为了统一管理，便于维护。

```typescript
enum MyEnum {
    Default,
    Info = "INFO",
    Warn = "WARNING",
    Error = "ERROR",
}
console.log(MyEnum.Info) // 输出 INFO
console.log(MyEnum[0]) // 输出 'Default'
console.log(MyEnum[1]) // undefined
// 上面代码自动生成下面的对象
// {
//  "0": "Default",
//  "Default": 0,
//  "Info": "INFO",
//  "Warn": "WARNING",
//  "Error": "ERROR"
// }

enum MyEnum1 {
    Default,
    Info,
    Warn,
    Error = "ERROR",
}
console.log(MyEnum1) // 自动生成下面对象，只有Error赋值了
// {
//  "0": "Default",
//  "1": "Info",
//  "2": "Warn",
//  "Default": 0,
//  "Info": 1,
//  "Warn": 2,
//  "Error": "ERROR"
// }
```

### 6.函数

-   1.有返回值
    > 可以在函数参数后面约定返回值，没有约定的话，会自动根据 return 推导返回值的类型

```typescript
function fn1(a: number, b: string): string {
    return a + b
}
let res = fn1(1, "2")
console.log(res) // 输出 '12'
```

-   2.无返回值
    > void 表示函数没有返回值

```typescript
function fn1(a: number, b: string): void {
    a + b
}
let res = fn1(1, "2")
console.log(res) // 输出 undefined
```

-   3.不确定参数
    > 不确定参数包含：参数默认值、可传可不传的参数、不确定个数的参数

```typescript
function fn1(a: number, b = 10, c?: string, ...args: number[]): string {
    const sum = String(a) + String(b) + (c ? c : "") + args.join("")
    return sum
}
let res1 = fn1(1) // 输出 110
let res2 = fn1(1, 20) // 输出 120
let res3 = fn1(1, 20, "30") // 输出 12030
let res4 = fn1(1, 20, "30", 5, 6, 7, 8) // 输出120305678
```

### 7.接口(定义对象)

> 通过关键字 interface 定义对象的属性类型，用?来约定是否是可选参数；用 any 约定不确定属性。

```typescript
interface User {
    userName: string
    userId: number | string // 联合类型
    isAdmin?: boolean // 可选参数
    [key: string]: any // 允许任意额外属性
}

// 必传参数
const user1: User = {
    userName: "张三",
    userId: 123456,
}

// isAdmin可选参数
const user2: User = {
    userName: "李四",
    userId: "abc123",
    isAdmin: true,
}

// userAge不确定参数
const user3: User = {
    userName: "王二麻子",
    userId: 123123,
    userAge: 18,
}
```

### 8.类型别名

> 可以理解为类型复用，比如有很多地方类型是一样的，就没必要一个个的定义，通过 type 关键字定义一个类型，后面都可以复用。

```typescript
// let a:string|number = 10
// let b:string|number = 20
// let c:string|number = 30

type strOrNum = string | number // 自定义一个类型

let a: strOrNum = 10
let b: strOrNum = 20
let c: strOrNum = 30
```

### 9.泛型

> 允许在定义函数、接口、类或类型别名时使用类型参数，以提高代码的复用性和类型安全性

-   **函数中使用泛型** （避免使用 any）

```typescript
// fn1是只能传字符串
function fn1(a: string, b: string): string[] {
    return [a, b]
}
fn1("1", "2")

// fn2 通过泛型可以实现不同类型的传参
function fn2<TT>(a: TT, b: TT): TT[] {
    return [a, b]
}

fn2<string>("1", "2")
fn2<number>(1, 2)
fn2<boolean>(true, false)

fn2(1, 2) // 自动推导类型为number
fn2(1, "2") // 报错，根据第一个参数自动推导是number，但是第二个参数是string

// 等同于any，但是不推荐使用any
function fn1(a: any, b: any): any[] {
    return [a, b]
}
```

-   **泛型接口**

```typescript
interface ApiResponse<TT> {
    code: number | string
    message: string
    data: TT // 根据传入的类型自动推导
}

const res1 = {
    code: 200,
    message: "请求成功",
    data: { name: "张三", age: 18 },
}

const res2 = {
    code: 200,
    message: "请求成功",
    data: [1, 2, 3],
}
```

-   **泛型约束（extends）**

```typescript
type StrOrNum = string | number

function fn1<TT extends StrOrNum>(a: TT, b: string): any {
    return [a, b]
}

fn1(1, "2")
fn1("1", "2")
```

-   **多类型参数**

```typescript
function fn1<TT, UU>(a: TT, b: UU): [TT, UU] {
    return [a, b]
}

fn1(1, "2") // 自动推导TT, UU类型
fn1("1", "2")
```

-   **泛型工具类型数**
    > TypeScript 内置泛型工具类型（如 Partial、Pick、Readonly 等）可简化类型操作。

```typescript
type User = { name: string; age: number; sex?: string }
type PartialUser = Partial<User> // 将name，age变成可选
type PickUser = Pick<User, "age"> // 单独将age提出，变成新的type
type RequiredUser = Required<User> // 将可选的sex变成必选
type OmitUser = Omit<User, "name"> // 排除 name

// Partial<T>：属性可选化
const user1: PartialUser = {
    name: "张三",
}

// Pick<T, K>：选取属性子集（剔除其他必选）
const user2: PickUser = {
    age: 18,
}

// Required<T>：属性必选化
const user3: RequiredUser = {
    name: "张三",
    age: 18,
    sex: "男",
}

// Omit<T, K>：排除属性子集
const user4: OmitUser = {
    age: 16,
}
```

### 10.类型断言

类型断言用于告诉 TypeScript 编译器某个值的具体类型，有两种语法：

1. 使用 `as` 关键字（推荐）
2. 使用尖括号 `<>` （不推荐，在 JSX 中会产生歧义）

#### 1. 基本类型断言

```typescript
// 1. as 语法
let someValue: any = "this is a string"
let strLength: number = (someValue as string).length

// 2. 尖括号语法（不推荐）
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
```

#### 2. const 断言

使用 `as const` 将类型收窄为字面量类型：

```typescript
// 没有使用 as const
let str1 = "hello" // 类型为: string
let num1 = 42 // 类型为: number
let bool1 = true // 类型为: boolean

// 使用 as const
let str2 = "hello" as const // 类型为: "hello"
let num2 = 42 as const // 类型为: 42
let bool2 = true as const // 类型为: true

// 数组使用 as const
let arr1 = [1, 2, 3] // 类型为: number[]
let arr2 = [1, 2, 3] as const // 类型为: readonly [1, 2, 3]

// 对象使用 as const
let obj1 = { x: 1, y: 2 } // 类型为: { x: number, y: number }
let obj2 = { x: 1, y: 2 } as const // 类型为: { readonly x: 1, readonly y: 2 }
```

#### 3. 非空断言

使用 `!` 断言某个值不会是 null 或 undefined：

```typescript
function processValue(value: string | null) {
    // 使用 ! 断言 value 不为 null
    console.log(value!.length)
}

// DOM 操作中的应用
const element = document.querySelector(".my-element")! // 断言一定能找到元素
element.innerHTML = "Hello"
```

#### 4. 类型断言的应用场景

```typescript
// 1. 处理联合类型
interface Bird {
    fly(): void
    layEggs(): void
}

interface Fish {
    swim(): void
    layEggs(): void
}

function getSmallPet(): Fish | Bird {
    // ... 返回 Fish 或 Bird
    return {} as Fish
}

let pet = getSmallPet()
if ((pet as Fish).swim) {
    ;(pet as Fish).swim()
}

// 2. 处理 DOM 事件
const handleClick = (event: Event) => {
    const button = event.target as HTMLButtonElement
    console.log(button.innerHTML)
}

// 3. 处理 JSON 解析
const jsonString = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(jsonString) as { x: number; y: number }

// 4. 双重断言（慎用）
let str: any = "hello"
let len: number = str as unknown as number // 先断言为 unknown，再断言为目标类型

// 5. 在 Vue 组件中的应用
interface UserProps {
    name: string
    age: number
    sex: "男" | "女"
}

const user = reactive({
    name: "张三",
    age: 18,
    sex: "男" as const, // 将类型收窄为字面量类型 '男'
})

// 6. keyof typeof 的应用
// 6.1 获取对象的键类型
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
} as const

// 获取 colors 对象的所有键作为联合类型
type ColorKeys = keyof typeof colors // 类型为: "red" | "green" | "blue"

// 使用类型断言确保 key 一定是 colors 的键
function getColor(key: string) {
    return colors[key as keyof typeof colors]
}

// 6.2 枚举类型的应用
enum TypeName {
    success,
    error = 2,
    warning,
}

// 获取枚举的键类型
type TypeNameKeys = keyof typeof TypeName // 类型为: "success" | "error" | "warning"

// 使用类型断言访问枚举值
function getEnumValue(key: string) {
    return TypeName[key as keyof typeof TypeName]
}

// 6.3 动态属性访问
const config = {
    api: "https://api.example.com",
    timeout: 3000,
    retries: 3,
} as const

type ConfigKeys = keyof typeof config // 类型为: "api" | "timeout" | "retries"

function getConfig<T extends ConfigKeys>(key: T): (typeof config)[T] {
    return config[key]
}

// 6.4 类的静态成员
class API {
    static baseURL = "https://api.example.com"
    static timeout = 3000
    static getHeaders() {
        return { "Content-Type": "application/json" }
    }
}

type APIStatic = typeof API
type APIKeys = keyof typeof API // 类型为: "baseURL" | "timeout" | "getHeaders"

function getAPIConfig(key: keyof typeof API) {
    return API[key as keyof typeof API]
}

// 6.5 复杂对象的类型提取
const response = {
    code: 200,
    data: {
        users: [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
        ],
        total: 2,
    },
    message: "success",
} as const

type ResponseType = typeof response
type DataKeys = keyof typeof response.data // 类型为: "users" | "total"

function getResponseData<T extends keyof typeof response.data>(key: T): (typeof response.data)[T] {
    return response.data[key]
}
```

#### 5. 类型断言的注意事项

1. **类型安全**：

```typescript
// 错误示例：断言不能违背类型的基本规则
let num: number = 42
let str = num as string // 错误：number 类型不能直接断言为 string

// 正确做法：先断言为 unknown，再断言为目标类型
let str = num as unknown as string
```

2. **优先使用类型声明**：

```typescript
// 不推荐
const user = {} as UserProps

// 推荐
const user: UserProps = {
    name: "张三",
    age: 18,
    sex: "男",
}
```

3. **避免过度使用**：

```typescript
// 不推荐：过度使用断言
function processInput(input: any) {
    return (input as string).toUpperCase()
}

// 推荐：使用类型守卫
function processInput(input: unknown) {
    if (typeof input === "string") {
        return input.toUpperCase()
    }
    throw new Error("Input must be a string")
}
```

类型断言应该作为最后的手段使用，优先考虑：

-   使用精确的类型声明
-   使用类型守卫
-   使用泛型
-   使用类型收窄
