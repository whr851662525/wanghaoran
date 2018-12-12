function subtraction(){
    // alert("减")
    //获取-号按钮
    var subtraction = document.getElementById("subtraction");
    //获取文本框
    var number = document.getElementById("number");
    if (number.value<=0) {
        //如果文本框的值小于1,则设置值为1
        number.value = 0;
    }else {
        number.value = number.value - 1;
    }
}
//2:文本框离开焦点事件
function number(){
    var number = document.getElementById("number");
    var value = number.value;
    //如果文本值为空,设置为1
    if (value=="") {
        number.value = 1;
    }
    //如果文本值为非纯数字,设置为1
    //isNaN()是否为非法数字
    if (isNaN(value)) {
        number.value = 1;
    }
    //如果文本值小于1,设置为1
    if (parseInt(value)<=1) {
        number.value = 1;
    }
}
//3:加号按钮点击事件

function add2(){
    //alert("加")
    var add = document.getElementById("add");
    var number = document.getElementById("number");
    //parseInt() 将数值型字符串转换为数值
    number.value = parseInt(number.value)+1;
}