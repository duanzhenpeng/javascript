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

### JavaScript 变量
1. 什么是变量
    * 变量就是一个装东西的盒子。
    * 用于存放数据的容器，通过变量名获取数据，修改数据。
    * 本质：变量在内存中存放一个空间用来存放数据。



