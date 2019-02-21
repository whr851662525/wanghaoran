let killed = JSON.parse(sessionStorage.getItem("killed"));
let step = JSON.parse(sessionStorage.getItem("step"));
let judge = JSON.parse(sessionStorage.getItem("judge"));
console.log(killed);
console.log(step);
$(function () {
    if (step === 2){
        $(".kill").css("background-color", "#b9e9f5").off('click');
        $(".kill-box").css("border-right", "25px solid #b9e9f5");
        $(".kill").after(`<div class="dead">晚上<div class="number">${killed.num}</div>号被杀死了，他的真实身份是
    <div class="identity">${killed.name}</div></div>`);}
});
let days = [killed];
console.log(days);
for (var i=0;i<days.length;i++){
$('.days').append(`
<div class="one-day">
<div class="empty"></div>
<div class="day">第一天</div>
<div class="state">
    <div class="three"></div>
    <div class="speak">
    <div class="one">
        <div class="triangle kill-box"></div><div class="kill">杀手杀人
        <img class="moon" src="../img/月亮.png" height="32" width="32"/></div></div>
    <div><div class="triangle ghost-box"></div><div class="ghost">亡灵发表遗言
        <img class="moon" src="../img/太阳.png" height="32" width="32"/></div>
    </div>
    <div><div class="triangle player-box"></div><div class="player">玩家依次发言</div></div>
    <div><div class="triangle all-box"></div><div class="all">全民投票</div></div>
</div></div></div>
`);}
$(".kill").click(function () {
    window.location.href = ('../html/kill.html');
});
$('.over').click(function () {
    window.open('../html/task2.html', '_self');
});
$(".ghost").bind('click',function () {
if (step ===  2){
    //第二个按钮
    $(".ghost").css("background-color", "#b9e9f5");
    $(".ghost-box").css("border-right", "25px solid #b9e9f5");
    $(this).unbind('click');
    alert("请死者发表遗言！");
    step=3;
}else {
    alert('请按顺序点击')
}
});
$('.player').click(function () {
    if (step ===3){
        $(this).unbind('click');
        $(".player").css("background-color", "#b9e9f5");
           $(".player-box").css("border-right", "25px solid #b9e9f5");
           alert('玩家发言');
           step=4;
           sessionStorage.setItem("step", JSON.stringify(step));
        }else {
        alert('请按顺序点击')
    }
});
$(".all").click(function () {
   if (step === 4){
       $(this).unbind('click');
       $(".all").css("background-color", "#b9e9f5");
       $(".all-box").css("border-right", "25px solid #b9e9f5");
       window.location.href = ('../html/kill.html');
   }else {
       alert('请按顺序点击')
   }
});
$(function () {
   if (judge == 5){
       $(".all").after(`<div class="dead">白天<div class="number">${killed.num}</div>号被投死了，他的真实身份是
    <div class="identity">${killed.name}</div></div>`);
       $(".kill").css("background-color", "#b9e9f5").off('click');
       $(".kill-box").css("border-right", "25px solid #b9e9f5");
       $(".player").css("background-color", "#b9e9f5").off('click');
       $(".player-box").css("border-right", "25px solid #b9e9f5");
       $(".all").css("background-color", "#b9e9f5").off('click');
       $(".all-box").css("border-right", "25px solid #b9e9f5");
   }
});