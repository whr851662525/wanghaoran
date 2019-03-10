function number(){
    var Input0=document.getElementById('demo1');
    var Input1=document.getElementById('demo4');
    var Input2=document.getElementById('demo3');

    Input1.onclick=function(){
        this.form.amount.value++;
    };

    Input2.onclick=function(){
        if(Input0.value>1){
            this.form.amount.value--;
        }
    }
}
var demo1 = document.getElementById("demo1");
demo1.value=4;
function demo3() {
    var demo3 = document.getElementById("demo3");
    var demo1 = document.getElementById("demo1");
    if (demo1.value<4) {
        //如果文本框的值小于1,则设置值为1
        //demo3.value = 4;
    }
    else {
        demo1.value = demo1.value - 1;
        // console.log(demo1.value)
        document.getElementById('demo2').value=document.getElementById('demo2').value-1;
    }
    ghost()
}
function  test() {
    var a=document.getElementById('demo2').value;
    var demo3 = document.getElementById("demo3");
    document.getElementById('demo1').value=a;
    ghost()
}
function demo4() {
    var demo4 = document.getElementById("demo4");
    var demo1 = document.getElementById("demo1");
    var demo2 = document.getElementById("demo2");
    demo1.value = parseInt(demo1.value)+1;
    demo2.value = parseInt(demo2.value)+1;
    if (demo1.value>=18) {
        //如果文本框的值小于1,则设置值为1
        //demo4.value = 18;
    }
    ghost()
}

function  ghost() {
    var allNum = document.getElementById("demo1").value;
    let bar  = document.getElementById('demo2');

    if (allNum > 3 && allNum < 19) {
          bar.value = allNum;
        start();
        //console.log(start());
    }
    else{
        alert("请输入正确的人数");
        return false;
    }
}
function start() {
    var allNum = document.getElementById("demo1").value;
    var killer = Math.floor(allNum / 3);
    document.getElementById("number").innerText = killer;
    var civilians = allNum - killer;
    document.getElementById("populace").innerText = civilians;
    var a = new Array(killer).fill("杀手");
    var q = new Array(civilians).fill("平民");
    console.log(a);
    console.log(q);
    var arr = a.concat(q);
    console.log(arr);
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var j = Math.floor(Math.random() * (len - i));
        newArr[i] = arr[j];
        arr.splice(j, 1)
    }
    return newArr;
}
console.log(start());
function load(){
    if ( ghost()===false){
    } else {
        start();
        sessionStorage.setItem("typer",JSON.stringify(start()));
        window.open( "../html/task23.html","_self");
    }
}




// function checkStr() {
//     var title = document.getElementById("title").value.trim();
//     var desc = document.getElementById("desc").value.trim();
//     if (title == null || title == "") {
//         alert("请输入十个字以内的词汇");
//         return false;
//     }else{
//
//     }
// }