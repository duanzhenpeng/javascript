// for (var i = 1; i <= 100; i++){
//     console.log('100遍')
// }

// //for循环执行相同的代码
// var num = prompt('请输入数字');
// for (var i = 1; i <= num; i++){
//     console.log('我的小乖乖')
// }
// //for循环执行不相同的代码
// for (var i = 1; i <= 100; i++){
//     console.log('这个人今年'+ i +'岁了')
// }

// for (var i = 1;i<=100;i++){
//     if (i == 1) {
//         console.log('这个人刚出生1年，今年1岁了')
//     }else if (i == 100) {
//         console.log('这个人今年100岁了')
//     }else{
//         console.log('这个人今年'+ i +'岁了')
//     }
// }

//for循环重复执行某些操作
// var sum = 0;
// for( var i = 1;i <= 100; i++){
//     sum = sum + i;
// }
// console.log(sum)

// //求1～100之间所有数的平均值
// var sum1 = 0;
// for( var i = 1;i<=100;i++){
//     sum1 += i;
    
// }
// sum1 /= 100;
// console.log(sum1)

// //求1-100之间所有偶数和奇数的和
// var even = 0;
// var odd = 0;
// for (var i = 1; i <= 100;i++){
//     if (i % 2 == 0){
//         even += i;
//     }else{
//         odd += i;
//     }
// }
// console.log('偶数和'+ even);
// console.log('奇数和'+ odd);


// var num = parseInt (prompt('请输入班级总人数：'));
// var avg = 0;
// var list = 0;
// for(var i = 1; i <= num; i++){
//     list += parseInt(prompt('请输入'+i+'的成绩：')) ;
    
// }
// avg = list / num ; 
// console.log(list);
// console.log(avg);

// var str = ''
// for(var i = 1; i <=5;i++){
//     str = str +'*'
// }
// console.log(str);

// var str = ''
// for(var i = 1; i <= 5;i++){
//     for(var j = 1; j <=5; j++){
//         str = str + '*'
//     }
//     str += '\n'
// }
// console.log(str);


var rows = prompt("请您输入行数：")
var cols = prompt("请您输入列数：")
var str = "";
for(var i = 1; i <= rows;i++){
    for(var j = 1; j <= cols; j++){
        str += '*'
    }
    str += '\n'
}
console.log(str);
