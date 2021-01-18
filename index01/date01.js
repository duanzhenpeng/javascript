//当前时分秒
// function getTime (){
//     var time = new Date();
//     var h = time.getHours();
//     h = h < 10 ? '0'+ s : h;
//     var m = time.getMinutes();
//     m = m < 10 ? '0' + m : m;
//     var s = time.getSeconds();
//     s = s < 10 ? '0'+ s : s;
//     return h + ':' + m + ':' + s;
// }
// console.log(getTime());

    //倒计时案例
    function countDown(time) {
        var nowTime = new Date(); //返回的时当前的毫秒数
        var inputTime = +new Date(time);//返回的时用户输入时间总的毫秒数
        var times = (inputTime - nowTime) / 1000; //times时剩余时间的秒数
        var d = parseInt(times / 60 / 60 / 24);//天
        d = d < 10 ? '0' + d : d;
        var h = parseInt(times / 60 / 60  % 24);//时
        h = h < 10 ? '0'+ h : h;
        var m = parseInt(times / 60 % 60);//分
        m = m < 10 ? '0'+ m : m;
        var s = parseInt(times % 60);//秒
        s = s < 10 ? '0'+ s :s;
        return d + '天' + h + '时' + m +'分'+ s + '秒';
    }
    console.log(countDown('2021-1-7 18:00:00'));