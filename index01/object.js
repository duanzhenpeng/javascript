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

function Uname(name,age,sex) {
    this.name = name,
    this.age = age,
    this.sex = sex
    this.yd = function () {
        console.log("跑～");
    }
}
var whh = new Uname('小三',22,'女')
console.log(whh.age);
whh.yd();