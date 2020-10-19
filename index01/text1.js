// 判断时间阶段
// var time = prompt('请输入时间')
// if (time < 6) {
//     alert('凌晨好！')
// } else if (time < 8) {
//     alert('早上好！')
// } else if (time <= 12) {
//     alert('上午好！')
// } else if (time < 18) {
//     alert('下午好！')
// } else {
//     alert('晚上好！')
// }

//比较两个数的最大值
// var list = prompt('请输入数字1：')
// var list1 = prompt('请输入数字2：')
// if( list > list1){
//     alert(list)
// } else if (list < list1) {
//     alert(list1)
// }

//输入一个数字，来判断是奇数还是偶数
// var  num = prompt('请输入数字：')
// if (num % 2 == 0) {             // 模糊点
//     alert('您输入的是偶数')
// } else {
//     alert('您输入的是奇数')
// }

//根据输入的值 判断今天星期几
// var day = prompt('请查询今天星期几?')
// switch (parseInt(day) ){
//     case 1:
//         alert("您好：今天星期一")
//         break;
//     case 2:
//         alert("您好：今天星期二")
//         break;
//     case 3:
//         alert("您好：今天星期三")
//         break;
//     case 4:
//         alert("您好：今天星期四")
//         break;
// }


var maeny = prompt('搜～他口袋里有多少钱！')
if (maeny > 2000) {
    alert('这么多钱～请大家吃西餐吧！')
} else if (maeny > 1500) {
    alert('钱不少～请大家是快餐吧！')
} else if (maeny >= 1000) {
    alert('请大家和饮料吧！')
} else if (maeny >= 500) {
    alert('请大家吃棒棒糖吧！')
} else {
    alert('你下次记得多带点钱！')
}


var corse = prompt('请输入您的分数')
if (corse >= 90) {
    alert('A')
} else if (corse >= 80) {
    alert('B')
} else if (corse >= 70) {
    alert('C')
}


