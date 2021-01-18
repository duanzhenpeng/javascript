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

// var arr7 = ['red' , 'bule' , 'yellow' , 'shang']
// var newArr2 = []
// for (var i = arr7.length -1 ; i >= 0 ; i--){
//     newArr2[newArr2.length] = arr7[i]
// }
// console.log(newArr2);

    //翻转数组
    // function reverse(arr) {
    //     if(Array.isArray(arr)){
    //     var newArr = [];//创建一个空数据用来存放新数组
    //     for ( var i = arr.length - 1; i >= 0; i --){ 
    //         newArr[newArr.length] = arr[i];
    //     }
    // }else {
    //     return 'error 这个参数要求必须是数组格式'
    // }
    //     return newArr;
    // }
    // console.log(reverse([1,2,3,4]));
    // //检测是否为数组
    // //(1) instanceof 运算符
    // var arr = [];
    // console.log(arr instanceof Array);
    // //(2) Array.isArray(参数)；
    // var arr1 = [];
    // console.log(Array.isArray(arr1));

    // 添加或删除数组方法 
    var arr = [1,2,3,4]
    //(1) push()方法 在末尾添加一个或多个数组元素 push 推
    // arr.push(5,6,7)
    console.log(arr.push(5,6,7));  //数组返回结果是的数组长度，同时数组也元素会改变
    console.log(arr);   // 给数组增加新的元素
    //(2)unshift()方法 在数组的前面添加一个或多个数组元素 
    // arr.unshift(-1,0)
    console.log(arr.unshift(-1,0)); //返回值是数组的长度，同时也会在数组前面增加数组元素 
    console.log(arr);
    //(3)pop() 删除最后一个元素
    //arr.pop() //pop()方法 没有参数
    console.log(arr.pop());//返回的结果是删除的元素，同时相同数组也发生改变
    console.log(arr);
    //(4)shift() 删除数组的第一个元素
    // arr.shift()
    console.log(arr.shift());//返回的结果是删除的元素，同时相同的数组也会发生改变
    console.log(arr);
    
    //案例练习
    var arr1 = [1500,1300,1800,2000,2100,1800]
    var newArr1 = []
    for(var i = 0;i < arr.length; i++){
        if(arr1[i] < 2000){

            newArr1.push(arr1[i])
        }
    }
    console.log(newArr1);

    //(5)数组反转
    var arr2 = [1,2,3,4,5,6]
    arr2.reverse();
    console.log(arr2);
    //(6)数组排序（冒泡排序）
    var arr3 = [1,7,13,4,77]
    arr3.sort(function(a,b){
       // return a - b; //升序排序
       return b - a;    //倒序排序
    })
    console.log(arr3);
    //(7)从前面获取数组元素索引
    var arr4 = ['red' , 'bule' , 'yellow' , 'bule']
    //indexOf(数组元素)返回该数组的索引号，只返回第一个满足条件的索引号，如果找不到返回-1.
    console.log(arr4.indexOf('bule')); //1
    //(8)从后面获取数组元素索引
    console.log(arr4.lastIndexOf('bule')); //3

    // 数组去重，把旧数组不重复的元素取出放到新数组里
    function unique(ar){
        var newArr5 = [];
        for(var i = 0; i < ar.length; i++){
            if(newArr5.indexOf(ar[i]) === -1){
                newArr5.push(ar[i])
            }
        }
        return newArr5;
    }
    var demo = unique(['c','a','x','v','x','s','c']);
    console.log(demo);


    
