function click() {
   var appear = document.getElementById("appear");
   var hidden = document.getElementById("hidden");
   var arise = document.getElementById("arise");
   var hide = document.getElementById("hide");
    arise.onclick = function () {
       appear.style.display = "none";
       hidden.style.display = "block";
        arise.style.display = "none";
        hide.style.display = "block";
     };
   hide.onclick = function () {
       appear.style.display = "block";
       hidden.style.display = "none";
       arise.style.display = "block";
       hide.style.display = "none";
   }
}console.log(click());
console.log(sessionStorage.getItem("typer"));


// window.onload = function () {
//     /* window意思是窗口  onload是加载  意思是页面加载完毕后，才执行里面的js ，所以可以放在顶端*/
//     var img = document.getElementById("img");
//     /*获取图片img="id"给变量 img*/
//     var btn_show = document.getElementById("btn_show");
//     /*获取显示按钮id="btn_show"给变量 btn_show*/
//     var btn_hidden = document.getElementById("btn_hidden");
//     /*获取隐藏按钮id=“btn_show”给变量 btn_hidden */
//
//     btn_show.onclick = function () {
//         img.style.display = "block";
//     }
//     /*点击显示按钮时，img的样式style的display属性赋值为“block”，下同理*/
//     btn_hidden.onclick = function () {
//         img.style.display = "none";
//     }
// }