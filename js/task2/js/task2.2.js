function textbox(obj){
    var div=document.getElementsByClassName('manner');
    if(parseInt(obj.value)==obj.value && parseInt(obj.value)>=4 && parseInt(obj.value)<=18){}
    else{
        alert('请输入数字,范围为4-18');
    }
    // console.log(111);
    var inputValue = document.getElementById("demo1").value;
    console.log(inputValue);
    console.log(document.getElementById("demo2").value );
    document.getElementById("demo2").value = inputValue;
}
function number(){
    var Input0=document.getElementById('demo1');
    var Input1=document.getElementById('demo4');
    var Input2=document.getElementById('demo3');

    Input1.onclick=function(){
        this.form.amount.value++;
    }

    Input2.onclick=function(){
        if(Input0.value>1){
            this.form.amount.value--;
        }
    }
}
function demo3() {
    var demo3 = document.getElementById("demo3");
    var demo1 = document.getElementById("demo1");
    if (demo1.value<=0) {
        //如果文本框的值小于1,则设置值为1
        demo1.value = 0;
    }else {
        demo1.value = demo1.value - 1;
    }
}
//test
function  test() {
    var a=document.getElementById('demo2').value;
    document.getElementById('demo1').value=a;
}

function demo4() {
    var demo4 = document.getElementById("demo4");
    var demo1 = document.getElementById("demo1");
    demo1.value = parseInt(demo1.value)+1;
}
function checkStr() {
    var title = document.getElementById("title").value.trim();
    var desc = document.getElementById("desc").value.trim();
    if (title == null || title == "") {
        alert("请输入十个字以内的词汇");
        return false;
    }
}