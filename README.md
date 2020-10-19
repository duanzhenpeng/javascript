# javascript
javascript学习笔记

### 初识 javascript 
1. **JavaScript 历史**
* 布兰登.艾齐-199年利用10天完成javascript设计
* 最初命名为LiveScript 与sun和合作后命名为JavaScript
2. **javascript是什么**
* javascript 是一种运行在客户端的脚本语言
* 脚本语言：不需要编译，运行js解释器逐行来进行执行
3. **javascript的作用**
* 表单动态校验  网页特效  服务端开发（node.js）  桌面程序（Electron）  App（Cordova） 游戏开发（coco2d-js）
4. **浏览器执行JS简介**
* 浏览器分成两部分：渲染引擎和JS引擎
* 浏览器本身不会执行js代码，而是通过内置js引擎（解释器）来执行js代码，通过JS引擎转换为机器二进制语言，然后由计算机去执行。
5. **JS的组成**
    * ECMAScript javascript基本语法
    * DOM-文档对象模型
    * BOM-浏览器对象模型
6. **js的初级体验**
* JS由3种书写位置，分别为 行内、内嵌和外部。
* 行内式JS
``` html
    <input type="button" value="点我试试" onclick="alert('您好')"/>
```
> 注意：在html中编写JS大量代码时，可读性差 不方便阅读，特殊情况下使用。
* 内嵌JS
``` html
    <scrip>
        alert('Hello Word~');
    </script>
```
> 可将多行JS代码写到 script 标签中  内嵌JS是学习常用的。
* 外部JS文件
``` html
    <script src="index.js"></script>
```
> 把大量的JS代码写在独立的HTML之外。index.js是外部创建的.js文件。适用于JS代码量比较大的情况。

### JavaScript输入输出语句
* prompt()浏览器弹出输入框，用户可以输入
``` js
    prompt('请输入...')
```
* alert()浏览器弹出警告框，给用户看的
``` js
    alert('欢迎～回来')
```
* console.log()浏览器控制台打印输出信息，给程序员看的
```js
    console.log('您好，世界～')
```
>---
### JavaScript 变量
1. **什么是变量**
    * 变量就是一个装东西的盒子。
    * 用于存放数据的容器，通过变量名获取数据，修改数据。
    * 本质：变量在内存中存放一个空间用来存放数据。
2. **变量的使用**
    * 变量的使用分为两步：1.声明变量 2.赋值
``` js
    //声明变量
    var age;//声明一个名称为age的变量
```
>var是js的关键字，用来声明变量（variable）,使用变量后，计算机会分配一个内存空间。 age是自定义的变量名  我们通过变量名访问内存空间。
``` js
    //赋值
    age = 10；//给age这个变量赋值为10 
```
>  = 代表赋值 把10存放在age的内存空间去
3. **变量的初始化**
* 声明一个变量并赋值，我们称之为变量的初始化
``` js
    var myname = '101房间' //声明变量myname 同时赋值 ‘101房间’
```
> 常用的方法
4. **变量示例**
```js
    //弹出一个对话框，提示用户输入。弹出一个对话框，输出用户输入的姓名
    var mynaem = prompt('请输入你的名字') //声明一个初始化变量
    alert(mynaem)//输出变量的值
```
5. **变量语法扩展**
* 更新变量
```js
    var age = 19; //第一次赋值
    age = 20;   //第二次赋值
    console.log(age);//输出的结果为81 因为19被覆盖。
```
> 一个变量被重新赋值后，就会被覆盖，以最后一次赋值为准。

*  同时声明多个变量
```js
    var home = '北京',
        age = 20,
        gz = 10000;
```
>同时声明多个变量必须以英文逗号隔开（,）
* 声明变量特殊情况
```js
    var sex;console.log(sex) //只是声明不赋值 结果为undefined（未定义）
    console.log(user) //不声明 不赋值 直接使用 报错
```
* 案例：交换两个变量的值（思路：使用一个临时变量用来做中间储存）
```js
    var temp; //声明一个临时变量为空
    var apple1 = '苹果1';//声明第一个变量 
    var apple2 = '苹果2';//声明第二个变量
    temp = apple1;      //把apple1 交给temp
    apple1 = apple2;    //把apple2 交给apple1
    apple2 = temp;      //把temp 交给 aplle2
    console.log(a)      //结果 苹果2
    console.log(b)      //结果 苹果1
    // 注意：以 = 号为交换 把右边值给左边。
```
6. **变量的命名规范**
    * 由字母、数字、下划线、美元符号（$）组成
    * 不能以数字开头
    * 不能是关键字
    * 变量名中间不能存在空格
    * 严格区分大小写
    * 变量名必须有意义
    * 最受驼峰命名法。首字母小写 后面单词首字母需大写。myName
7. **变量小结**
    * 为什么需要变量：因为一些数据需要保存。
    * 变量是什么：变量就是一个容器，用来存放数据，方便我们使用。
    * 变量的本质：在内存中的一块空间，用来存放数据。
    * 变量的使用：声明变量，然后赋值。
    * 变量的初始化：声明变量并赋值称之为变量的初始化。
    * 变量的命名规范：见名知意，驼峰命名法。
>---
### 数据类型
1. **为什么需要数据类型**
    * 不同的数据占用的储存空间不同，为了分配不同大小的内存数据，充分利用空间。于是就定义了不同的数据类型。
2. **变量的数据类型**
* 不确定
    * js 变量数据类型是只有程序在运行过程中，根据等号=右边的值来判断的。
    * js 是动态语言 变量的数据类型是可以变化的。
```js
    var x = 10; //数字型
        x = 'xy' //字符串类型
```
3. **数据类新分类**

*  **Number数字型**
    * 包含整型值和浮点值。如：12，0.21  默认值 0。
    * 数字型的进制八进制数字范围0～7 十六进制数字范围0～9及a～f。 
    * js中八进制前面加0  十六进制前面加0x
    * 数字型的最大值和最小值
```js
    console.log(Number.MAX_VALUE) //数字型的最大值
    console.log(Number.MIN_VALUE) //数字型的最小值
    Infinity //无穷大
    -Infinity //无穷小
    NaN //无法计算 非数字的
```
* isNaN()用来判断一个变量是否为非数字的类型，是数字返回flase，如果不是数字返回true。
```js
    console.log(isNaN(12))//flase
    console.log(isNaN(12))//true
```
* **String字符串型**
    * 加了引号的都叫字符串类型
    * 字符串引号嵌套：JS可以用单引号嵌套双引号，也可相反（外双内单，外单内双）
```js
    var strMsg = '我是"高富帅"程序员'；
    var strMsg = "我是'高富帅'程序员"
```
* 字符串转义符：转义符都是\ 开头的
    * \n 换行符
    * \t 缩进
* 检测获取字符串的长度
    * 通过length属性可以获取整个字符串的长度。
```js
    var strMsg = "我是帅气的人";
    console.log(strMsg.length)//显示6
```
* 字符串的拼接
    * 字符串 + 任何类型 都等于字符串。
    * +号总结口诀：数值相加，字符相连。
    * 变量是不能添加引号的，如果两侧都有字符串，使用"引引加加",变量写在中间。
>
* **Boolean 布尔型**
    * 布尔类型有两个值：true和false，ture表示（真）false表示（假）
    * 布尔型和数字相加的时候，true的值为1，false的值为0.
```js
    console.log(true + 1);// 2
    console.log(false + 1);// 1
```
*   *   Undefined 和 Null
    *  一个声明没有被赋值的变量，会默认undefined（未定义）
    *  一个声明变量给null值，是一个空值。
```js
    var a;
    console.log(a)// undefined
    console.log(11 + a)// NaN
```
>undefined如果和字符相加会相连起来，如何和数值相加返回的结果都是NaN。 null和数值相加返回的结果是本身的数字。
* 获取检测变量的数据类型
    * typeof 可以用来检测变量的数据类型。
* 数据类型转换
    * 转换为字符串类型
        * toString（）
        * String强制转换
        * 加号拼接字符串
    >三种转换方式 重点为加号拼接 和字符串拼接的结果都是字符串，这一种称为隐式转换。
    * 字符型转换为数字型
        * parseInt()方法 可以把字符串转换为数字型 得到的是整数
        * parseInt()方法 可以把字符串转换为数字型 得到的是小数 浮点数
``` js
        //parseInt()方法 取整数
    console.log(parseInt('3.14')) //3
    //parseFloat()方法 取小数
    console.log(parseFloat('3.14')) //3.14
    // Number()方法
    console.log(Number('132')) //132
    // 利用了算数运算 - * / 隐式转换
    console.log('120' - 0) //120
    console.log('123' - '120') //3
    console.log('123' * 1) //123
```
>注意parseInt和parseFloat I和F必须大写 重点。

*   转换为布尔型
    *   通过Boolean()函数 将其他类型转成布尔值。
    *   空和否定的值会转换为flase：''、0、NaN、null、undefined
    *   除以上五种都为转换为true。
>>扩展：解释型语言和编译型语言：示例JS属于脚本语言，执行过程中属于解释型语言 一行一行进行执行。

### JavaScript运算符
*   运算符也被成为操作符，是用于实现赋值、比较和执行算数运算等功能符号。
1.  **算数运算符**
    * 算术运算符概念：运算符用于执行两个变量或值的算术运算。
```js
    // + 加运算符
    console.log(1 + 1) //2
    // - 减运算符
    console.log(1 - 1) //0
    // * 乘运算符
    console.log(1 * 1) //1
    // / 除运算符
    console.log(1 / 1) //1
    // % 取余（取模）
    console.log(4 % 2) //0
    console.log(5 % 3) //2
    // 浮点数（小数）
    console.log(0.1 + 0.2) //0.300000000000004
```
> 浮点数值的最高精度是17位小数。不要直接判断两个浮点数是否相等！
* 表达式和返回值
    * 表达式：是由数字、运算符、变量等组成的式子。(1 + 1)
    * 表达式都会返回一个结果，称为返回值。
2. **递增和递减运算符**
    * 递增（++）和递减（--）运算符给变量加1和减1。
    * 递增和递减运算符必须和变量配合使用。
        * 前置递增++放在变量的前面，（包含前置递减）。
            * 先自加，在返回值。
        * 后置递增++放在变量的后面。
            * 先返回原值，再自加。
3. **比较运算符**
    * 比较运算符：是两个数据进行比较，会返回布尔值（true/flase）结果。
    * 特记
        * =赋值 == 判断 ===全等 
```js
    // == 判断两边值是否相等（隐式转换）
    console.log(18 == '18')//ture
    // === 全等判断两边的值和数据类型是否完全相同
    console.log(18 === '18')//flase
```
4. **逻辑运算符**
    * 逻辑运算符是用来进行布尔值的判断。
    * 逻辑与 && 两天都是true返回true，否则返回flase
    * 逻辑或 || 两边都为flase才返回flase，否则返回true
    * 逻辑非 （！）也叫作取反符
* 短路运算（逻辑中段） <h2>记！</h2>
    * 语法：表达式1 && 表达式2
    * 逻辑与&&短路运算第一个表达式的值为真，则返回表达式2 第一个表达式的值为假，则返回表示式1
    * 逻辑或||短路运算 如果表达式1 结果为真 则返回的是表达式1 如果表达式1 结果为假 则返回表达式2
5. **运算符优先级**
    * 1.小括号() 2.一元运算符++ -- ！  3.算数运算符 先* / 后+— 6.逻辑运算符 先&& 后 ||。

### JavaScript流程控制
1. 流程控制 
    * 流程控制主要三种结构，分别是数序结构、分支结构、和循环结构，这三种结构代表三种代码的执行顺序。
2. 控制流if语句判断
    * 分支语句：根据不同的条件 执行不同的代码，得到不同的结果
```js
    // 1.if的语法结构
    if(条件表达式){
        //执行语句
    }
    // 2.执行思路 如果if里面的条件表达式结果为真true，则执行大括号里面的语句。如果结果不满足为假flase，则不执行大括号里面的语句。 
```
* if else if语句（多分支语句）
    * 多分支语句 就是多个条件来选择不同的语句执行，得到不同的结果。(多选一，最后智只能又一个语句执行。)
    * 如果表达式1满足 就执行代码1，如果不满子就继续执行表达示2.以此类推。
3. 三元表达示
    * 由三元运算符组成的式子我们成为三元表达式
    * 一元：++m  二元：3 + 5 三元：？ ：
    * 语法结构：条件表达式 ？ 表达式1：表达式2
    * 思路：如果表达式结果为真 则返回 表达式1 的值 如果条件表达式为假 则 返回表达式2的值。
```js
    var num = 10;
    var result = num > 5 ? '对' : '不对'；
    console.log(result);
``` 
4. 控制流switch语句
    * switch语句也是多分支语句，他用于不同的条件来执行不同的代码，当要针对变量设置一系列的特定值的选项时，就可以使用switch。
    * 语法结构
```js
    //switch 转换 开关。
    switch(表达式){
        case value1:    //case 例子或者选型的意思
            执行语句1;
            break;      //break 退出 如果没有break 不会退出 继续执行下条语句。
        case value2:
            执行语句2;
            break;
        default：
            执行最后的语句；
    }
```
> 执行思路 利用表达式 和 case选项进行全等匹配，匹配上就执行case的语句，，没有匹配上，就执行 default里面的语句。
* switch语句和if else if语句的区别
    * 当分支比较少时，用if else if语句。
    * 当分支比较多时，用switch语句执行效率比较高，更加清晰。
-------------
### JavaScript for循环
1. **循环**
    * 循环目的：可以重复执行某些代码。
    * JS中有三种类型循环语句 for循环  while循环  do..while 循环
2. **for循环**
    * for循环重复执行某些代码，通常跟计数有关
    * for语法结构
```js
    for(初始化量,条件表达式,操作表达式){
        //循环体变
    }
    //初始化变量：就是声明一个普通变量，通常用于计数器。
    //条件表达式：就是用来决定每一次循环是否继续执行 就是终止条件
    //操作表达式：是每次循环最后执行的代码 经常用于我们的计数器变量进行更新。
```
```js
    //for循环执行相同的代码
    var num = prompt('请输入数字');
    for (var i = 1; i <= num; i++){
    console.log('我的小乖乖')
}
```js
    //for循环执行不相同的代码
for (var i = 1; i <= 100; i++){
    console.log('这个人今年'+ i +'岁了')
}

for (var i = 1;i<=100;i++){
    if (i == 1) {
        console.log('这个人刚出生1年，今年1岁了')
    }else if (i == 100) {
        console.log('这个人今年100岁了')
    }else{
        console.log('这个人今年'+ i +'岁了')
    }
}
```
```js
//for循环重复执行某些操作
var sum = 0;
for( var i = 1;i <= 100; i++){
    sum = sum + i;
}
console.log(sum)
```