var div=document.getElementsByTagName('news');
btn.onclick=function(){
    aa()
}
function aa(){

}
// function blue(){
//     var news=document.getElementsByClassName('news');
//     console.log(news)
//     news[0].style.backgroundColor='blue';
// }

function Random () {
    var input = this;
    for (var i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
var arr = [0,1,2,3,4,5,6,7,8,9];
var out = [];
var num = 3;
while(out.length < num){
    var temp = (Math.random()*arr.length) >> 0;
    out.push(arr.splice(temp,1));
}
// alert(out)
function RandomColor () {
    var news=document.getElementsByClassName('news');
    console.log(news)
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    const a = ( (Math.random()*5 + 5) / 10 ).toFixed(2)
    //随机颜色返回的是一个0.5到1 的两位小数;
    const color = `rgb(${r},${g},${b})`

    console.log(color)
    return color
}
