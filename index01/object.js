// //创建对象
// var obj = {
//     UserName: '张三',
//     age: 20,
//     sex: '男',
//     sayHi: function () {
//         console.log('Hellow，word！');
//     }
// }
// console.log(obj.UserName);
// console.log(obj['age']);

// obj.sayHi()

// //练习
// var dog = {
//     uname: '可可',
//     type: '阿拉斯加犬',
//     age: 5,
//     colour: '棕红色',
//     bark:function () {
//         console.log('汪汪汪～')
//     },
//     showFilm:function () {
//         console.log('演电影');
//     }
// }
// dog.bark();
// dog.showFilm();
// console.log(dog.age);

// //练习new object
// var User = new Object();
// User.uname = '鸣人';
// User.age = 19;
// User.sex = '男';
// User.skill = function () {
//     console.log('影分身术')
// }
// console.log(User.uname);
// User.skill()

//用构造函数创建四大天王的对行 相同属性：姓名 年龄 性别 
// function Star(uname,age,sex) {
//     this.name = uname;
//     this.age = age;
//     this.sex = sex;
// }
// var ldh = new Star('刘德华',20,'男');
// console.log(ldh.name,ldh.sex,ldh.age);

// var lm = new Star('黎明',13,'男')
// console.log(lm.name,lm.age,lm.sex);

// //利用构造函数创建两个英雄：相同属性：姓名，类型，血量。方法：攻击方式
// function Yxiong(name,type,blood) {
//     this.name = name;
//     this.type = type;
//     this.blood = blood;
//     this.attack = function (yuan) {
//         console.log(yuan);
//     }
// }
// var houyi = new Yxiong('后裔','射手型','100血量');
// console.log(houyi.name,houyi.type,houyi.blood);
// houyi.attack('远程～biu～');
// var lianpo = new Yxiong('廉颇','战士型','200血量');
// console.log(lianpo.name);
// lianpo.attack('近战')

//练习:创建一个电脑的对象
// var pc = {
//     color: '黑色',
//     kg: '500g',
//     ppai: '联想',
//     xing: '小新300pro',
//     dy:function () {
//         console.log('看电影');
//     }
// }
// console.log(pc.ppai);
// console.log(pc['color']);
// pc.dy();

// function Uname(name,age,sex) {
//     this.name = name,
//     this.age = age,
//     this.sex = sex
//     this.yd = function () {
//         console.log("跑～");
//     }
// }
// var whh = new Uname('小三',22,'女')
// console.log(whh.age);
// whh.yd();

// console.log(Math.max(1,33,22,123));

//利用对象封装子的数字对象 里面有PI最大值和最小值
// 创建一个myMath对象
// var myMath = {
//     PI: 3.1415926,
//     max: function(){
//         //arguments 用来接收传过来的所有值
//         var max = arguments[0]
//         //遍历接收的值
//         for(var i = 1; i < arguments.length; i++){
//             // 判断比较值，当arguments 大于Max
//             if(arguments[i] > max){
//                 // 则Max = arguments[i]的值
//                 max = arguments[i]
//             }
//         }
//         //返回结果max
//         return max
//     },
//     min: function(){
//         var min = arguments[0]
//         for(var i = 1; i<arguments.length;i++){
//             if(arguments[i] < min){
//                 min = arguments[i]
//             }
//         }
//         return min;
//     }
// }
//     console.log(myMath.PI);
//     console.log(myMath.max(123,2,3,41231,123));
//     console.log(myMath.min(123123,-23,3213,2,12,-1));

// //1.Math.random()返回一个随机小数 这个方法不跟参数
// console.log(Math.random());// 0~0.99之间

//2. 得到两个数之间的随机整数，并且包含这两个数
    // function getRandom(max , min){
    //     //公式
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // //随机点名
    // var arr = ['张三','李四','麻子', '王五' , '鲁班']
    // // console.log(getRandom(1,100));
    // console.log(arr[getRandom(0, arr.length -1)]);

    // 猜数字游戏
    // function getRandom (min , max){
    //     //随机公式
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // //用来存储用户输入的数字
    // var random = getRandom(1,10);
    // while(true){ //死循环
    //     var num = prompt('请输入数字1~10之间');
    //     if (num > random){
    //         alert('很遗憾~您输入的数大了！')
    //     }else if (num < random){
    //         alert('很遗憾~您输入的数小了！')
    //     } else {
    //         alert ('恭喜你猜中了！')
    //          //结束整个程序
    //     }
    //     break;
    // }

    //Date() 日期对象 是一个构造函数 必须使用new 来调用创建我们的日期对象
    //1.使用date 如果没有参数，则返回当前系统时间
    // var date = new Date();
    // console.log(date);
    // //2.参数常用的写法  数字型或字符串型
    //     // 数字型
    // var date1 = new Date(2021,1,15)
    // console.log(date1);
    //     // 字符串型
    // var date2 = new Date('2021-01-05 8:8:8')
    // console.log(date2);

    var date = new Date();
    var year =  date.getFullYear();
    var month = date.getMonth()+1;
    var dates = date.getDate();
    var arr = ['星期一','星期二','星期三','星期四','星期五','星期六']
    var day = date.getDay();
    console.log('今天的日期是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);