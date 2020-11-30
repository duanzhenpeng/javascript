// //声明函数
// function sum() {
//     //函数代码块
//     var num =0;
//         for (var i = 1; i<=100; i++){
//            num += i;    
//         }
//         console.log(num)
// }
// //调用函数
// sum();

// function cook(aru) { //形参是接受实参的数据
//     console.log(aru)
// }
// cook('土豆');
// cook('豆腐');

// //利用函数求任意两个数的和
// function getSum(num1,num2) {
//     console.log(num1+num2);
// }
// getSum(12,21)

// //利用函数求任意两个数之间的和
// function getJian(num3,num4) {
//     var su1 = 0;
//     for(var i = num3; i<=num4;i++){
//         su1 += i
//     }
//     console.log(su1)

// }
// getJian(1,100)

// 利用函数求两个数的最大值
// function getMax(num1,num2) {
//     return num1 > num2 ? num1 : num2;
// }
// console.log(getMax(3,6))
// console.log(getMax(13,1))

// function getArryMax(arr) {
//     var max = arr[0]
//     for(var i = 1; i <= arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max;
// }
// var re = getArryMax([123,32,1,43,1,32,43,11])
// console.log(re);

// function sum (num7){
//     var num5 = prompt("请输入第一个数字：")
//     var num6 = prompt("请输入第二个数字：")
//     return num7 = parseInt (num5) + parseInt(num6);
// }
// console.log(sum());


// function reverse(arr) {
//     var newArr = [];
//     for(var i = arr.length -1; i>= 0; i--){
//         newArr[newArr.length] = arr[i];
//     }
//     return newArr;
// }
// var arr1 = reverse([112,1,3,4,5,3,34])
// console.log(arr1)


//调用函数
// function day() {
//     var yea = prompt('请输入当前年份：')
//     if (isRunYser(yea)) {
//         alert("当前是闰年，2月份有29天。")
//     } else {
//         alert("当前是平年，2月份有28天。")
//     }
// }
// day();

// //利用函数判断闰年
// function isRunYser(ysar) {
//     var flag = false;
//     if (ysar % 4 == 0 && ysar % 100 != 0 || ysar % 400 ==0){
//         flag = true;
//     }
//     return flag;
// }


//预解析案例
// var a =18;
// fl();
// function fl() {
//     var b = 9
//     console.log(a);
//     console.log(b)
//     var a = '123';
// }

// // 解析
// var a;
// function fl() {
//     var b;
//     b = 9;
//     var a;
//     console.log(a);
//     console.log(b)
//     a = '123';
// }
// a = 18;
// f1();


//案例2
// f1();
// console.log(c)
// console.log(b);
// console.log(a);
// function f1() {
//     var a = b = c = 9;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

//解析
function f1() {
    var a
    a = b = c = 9;  // b = 9；c = 9； 直接声明 没有赋值var 当全局作用域
    console.log(a);
    console.log(b);
    console.log(c);
}
f1();
console.log(c)
console.log(b);
console.log(a);
