// var week  = ['星期一' , '星期二',  '星期三' ,'星期四','星期五','星期六','星期日']
// console.log(week[6])
// // var arr = ['red' , 'green' , 'blue']
// // for (var i = 0; i < 3; i++) {
// //     console.log(arr[i]);
// // }

// var nameUser = ['段' , '李' , '王' , '张' , '马']
// for (var i = 0; i < nameUser.length; i++){
//     console.log(nameUser[i]);
// }


// //求 和 和平均值
// var arr = [2 , 4, 6, 4]
// var sum = 0;
// var avg = 0;
// for (var i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// avg = sum / arr.length
// console.log(sum , avg);

// //求数组里面最大的值
// var arr1 = [123,321,12,32,43,234,2]
// var max = arr1[0];
// for (var i = 1; i < arr1.length;i++){
//     if (max < arr1[i]) {
//         max = arr1[i]
//     }
// }
// console.log(max)


// //字符串拼接
// var arr2 = ['seep' , 'green' , 'blue' , 'pik']
// var str = '';
// var sep = '/'
// for (var i = 0; i < arr2.length; i++){
//     str += arr2[i] + sep;
// }
// console.log(str);

// // 新增数组元素 修改索引号 追加数组元素
// var arr3 = ['seep' , 'green' , 'blue' , 'pik']
// arr3[4] = 'iphone 12 pro'   // 新增数组元素元素
// console.log(arr3);
// arr3[0] = 'iphone 12 min'   // 替换
// console.log(arr3);

// var arr4 = [];
// for (var i = 1; i <= 100; i++){
//     arr4[i] = i ;
// }
// console.log(arr4);

// //将以下数组大于10的元素筛选出来，放入新的数组。
// var arr5 = [2,0,6,1,77,0,52,0,25,7]
// var newArr =[];
// var j = 0;
// for (var i= 0; i < arr5.length; i++){
//     if(arr5[i] >= 10){
        
//     }
// }
// console.log(newArr)

// var arr6 = [12,32,123,4,0,23,0,213,0,90,0]
// var newArr1 = []
// for(var i = 1; i < arr6.length;i++){
//     if(arr6[i] != 0){
//         newArr1[newArr1.length] = arr6[i]
//     }
// }
// console.log(newArr1);

var arr7 = ['red' , 'bule' , 'yellow' , 'shang']
var newArr2 = []
for (var i = arr7.length -1 ; i >= 0 ; i--){
    newArr2[newArr2.length] = arr7[i]
}
console.log(newArr2);