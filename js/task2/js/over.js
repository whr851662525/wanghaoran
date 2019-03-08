let killed = JSON.parse(sessionStorage.getItem("killed"));
let peoples = JSON.parse(sessionStorage.getItem("peoples"));
let days = JSON.parse(sessionStorage.getItem("days"));
let deadKiller = JSON.parse(sessionStorage.getItem("deadKiller"));
let deadCivilians = JSON.parse(sessionStorage.getItem("deadCivilians"));
$(".again").click(function () {
    window.location.href = "task2.2.html";
    sessionStorage.clear();
});
console.log(deadKiller);
console.log(deadCivilians);
console.log(killed);
//循环游戏进行了几天以及内容
$(function () {
    console.log('13');
    for (var i=0;i<days.length;i++){
        console.log(days);
        var a=killed[i];
        $('.detailed').append(`
   <div class="sky">
        <span class="fate">第${i+1}天</span>
    </div>
    <div class="daytime">晚上：&nbsp&nbsp<span>${a[[0]].num}</span>号被杀手杀死，他的身份是<span>${a[[0]].name}</span></div>
    <div class="night">白天：&nbsp&nbsp<span>${a[[1]].num}</span>号被全民投死，他的身份是<span>${a[[1]].name}</span></div>
    <div class="empty"></div>
   `);
    }
});

//显示活着的玩家
$(function () {
    $("#one").text(deadKiller);
    $("#two").text(deadCivilians);
});