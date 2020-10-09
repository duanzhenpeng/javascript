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
    var strMsg = "我是帅气的人";
    console.log(strMsg.length)//显示6

//弹出一个输入框，让用户输入年龄
var age = prompt('请输入年龄') 
//把用户输入的值用变量存起来，在将输入的年龄与所要输出的字符串连接起来
var str = alert('我今年已经'+ age + '岁了');

var myName = prompt('请输入姓名：')
alert('尊敬的'+myName+'用户，欢迎回来～')
