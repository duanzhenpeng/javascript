// 输入输出语句
/* prompt('请输入...')
alert('欢迎～回来')
console.log('您好，世界') */

//变量的使用
//声明一个名称为age的变量名
/* var age; 
//赋值，给age这个变量赋值为10
age = 10;
console.log(age); //打印结果10
//变量的初始化
var myname = '101房间'
console.log(myname)//打印结果101房间 */

// 用户输出姓名 存储到myname 里面
//var mynaem = prompt('请输入你的名字')
//输出用户输入的名字
//alert(mynaem)

//交换两个变量的值（思路：使用一个临时变量用来做中间储存）
var temp; //声明一个临时变量为空
var apple1 = '苹果1';//声明第一个变量 
var apple2 = '苹果2';//声明第二个变量
temp = apple1;      //把apple1 交给temp
apple1 = apple2;    //把apple2 交给apple1
apple2 = temp;      //把temp 交给 aplle2
console.log(apple1)      //结果 苹果2
console.log(apple2)      //结果 苹果1
// 注意：以 = 号为交换 把右边值给左边。


//字符串转义符
var strMsg = '我是"高富帅"程\n序员' //换行
var strMsg1 = "\t我是'高富帅'程序员"  //缩进
console.log(strMsg);
console.log(strMsg1);

//练习
//alert('酷热难耐,火辣的太阳地下，我挺拔的身姿，成为最独特的风景。\n 我审视四周，这里，是我的舞台，我就是天地间的王者。\n 这一刻，我豪气冲天，终于大喊一声："首破烂了～"')

// 通过length属性可以获取整个字符串的长度。
    //var strMsg = "我是帅气的人";
//console.log(strMsg.length)//显示6

//弹出一个输入框，让用户输入年龄
//var age = prompt('请输入年龄') 
//把用户输入的值用变量存起来，在将输入的年龄与所要输出的字符串连接起来
//var str = alert('我今年已经'+ age + '岁了');

//var myName = prompt('请输入姓名：')
//alert('尊敬的'+myName+'用户，欢迎回来～')

//parseInt()方法 可以把字符串转换为数字型 得到的是整数
// console.log( parseInt('3.14')) //3
//parseInt()方法 可以把字符串转换为数字型 得到的是小数 浮点数
// console.log(parseFloat('3.14')) //3.14
// console.log(Number('132'))
// console.log('123' * 1) //123

//计算年龄
// var nian = prompt('请输入出生年')
// var age = ('2020' - nian)
// alert('我今年'+ age + '岁了')

// var list = prompt('请输入第一个值：');
// var list1 = prompt('请输入第二个值：');
// alert( parseInt(list)+ parseInt(list1))

// var Myname = prompt('请您输入姓名:');
// var age = prompt('请输入年龄:');
// var sex =  prompt('请输入性别:');
// alert('您的姓名是：'+Myname+'\n您的年龄是：'+age+ '\n您的性别是：'+sex);

console.log([...[...'....']])

//课堂练习
var num1 = 100;
var num2 = 200;
var res1 = num1 > num2;//flase
var res2 = num1 == 11; //flase
var res3 = num1 != num2;//true
console.log(res3);

//控制流if语句判断练习
// var age = prompt('请输入年龄：')
// if(age >= 18){
//     alert('允许进网吧！')
// }else{
//     alert('未成年请离开')
// }

// var year = prompt('请你输入年份：')
// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     alert('您输入的年份是闰年')
// } else {
//     alert('您输入的年份是平年')
// }

// var myName = prompt('请您输入姓名查看是否中奖！')
// if (myName === '刘德华') {
//     alert('您好；你中了5元！')
// } else {
//     alert('您好；你没有中奖！')
// }

// var Mark = prompt('请输入您的分数：')
// if (Mark >= 90) {
//     console.log('优秀')
// } else if (Mark >= 80) {
//     console.log('良好')
// } else if (Mark >= 70) {
//     console.log('不错')
// }else {
//     console.log('差')
// }

//三元 表达式
// var num = 10;
//     var result = num > 5 ? '对' : '不对';
//     console.log(result);

// var time = prompt('请您输入一个 0～59之间的数字')
// var resu = time < 10 ? '0' + time : time
// alert(resu)

//switch 语法练习
switch (3){
    case 1:
        console.log('这是1')
        break;
    case 2:
        console.log('这是2')
        break;
    default:
        console.log('没有匹配结果')
}

//switch 练习
var fruit = prompt('请输入查询的水果：')
switch (fruit){
    case '苹果':
        alert('苹果的价格是： 35元/斤');
        break;
    case '苹果':
        alert('苹果的价格是： 35元/斤');
        break;
    default:
        alert('没有这个水果。')
}