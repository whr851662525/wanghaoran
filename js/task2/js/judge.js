let killed = JSON.parse(sessionStorage.getItem("killed"));
let step = JSON.parse(sessionStorage.getItem("step"));
let days = JSON.parse(sessionStorage.getItem("days"));
console.log(killed);
console.log(step);
//杀人之后的按钮判断
$(function () {
    if (step == 2){
        $(".kill").css("background-color", "#b9e9f5").off('click');
        $(".kill-box").css("border-right", "25px solid #b9e9f5");
        $(".kill").last().after(`<div class="dead">晚上<div class="number">${killed[killed.length].num}</div>号被杀死了，他的真实身份是
    <div class="identity">${killed[days.length].name}</div></div>`);}
    else {
        return false;
    }
});
console.log(killed.length);
console.log(123);
//天数生成
function run(){
  if (days == undefined){
      days=[[]];
      console.log(days)
  } else {
      console.log(days)
  }
    console.log(days);
for (var i=0;i<days.length;i++){
    console.log(days);
$('.days').append(`
<div class="one-day">
<div class="empty"></div>
<div class="day">第${i+1}天</div>
<div class="state">
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
}
run();
sessionStorage.setItem("days", JSON.stringify(days));
//按钮
$(".kill").click(function () {
    window.location.href = ('../html/kill.html');
});
$('.over').click(function () {
    window.open('../html/task2.html', '_self');
    sessionStorage.clear();
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
//投票完判断
$(function () {
   if (step === 5){
       $(".kill").last().after(`<div class="dead">晚上<div class="number">${killed[killed.length].num}</div>号被杀死了，他的真实身份是
    <div class="identity">${killed[killed.length].name}</div></div>`);
       $(".all").last().after(`<div class="dead">白天<div class="number">${killed[killed.length+1].num}</div>号被投死了，他的真实身份是
    <div class="identity">${killed[killed.length+1].name}</div></div>`);
       $(".kill").css("background-color", "#b9e9f5").off('click');
       $(".kill-box").css("border-right", "25px solid #b9e9f5");
       $(".ghost").css("background-color", "#b9e9f5").off('click');
       $(".ghost-box").css("border-right", "25px solid #b9e9f5");
       $(".player").css("background-color", "#b9e9f5").off('click');
       $(".player-box").css("border-right", "25px solid #b9e9f5");
       $(".all").css("background-color", "#b9e9f5").off('click');
       $(".all-box").css("border-right", "25px solid #b9e9f5");

       sessionStorage.removeItem('step');
   }else {
       return false;
   }
});

//渲染前一天
function before() {
    for (var i=1;i<days.length;i++) {
        console.log(days.length);
        $(".kill").eq(i-1).css("background-color", "#b9e9f5").off('click');
        $(".kill-box").eq(i-1).css("border-right", "25px solid #b9e9f5");
        $(".ghost").eq(i-1).css("background-color", "#b9e9f5").off('click');
        $(".ghost-box").eq(i-1).css("border-right", "25px solid #b9e9f5");
        $(".player").eq(i-1).css("background-color", "#b9e9f5").off('click');
        $(".player-box").eq(i-1).css("border-right", "25px solid #b9e9f5");
        $(".all").eq(i-1).css("background-color", "#b9e9f5").off('click');
        $(".all-box").eq(i-1).css("border-right", "25px solid #b9e9f5");
        $(".state").eq(i-1).hide();
    }
}
//隐藏前一天的内容
$(".day").click(function () {
    $(".state").hide();
    $(".state").last().show();
    $(document).on({
        click:function () {
            $(this).next(".state").toggle();
        }
    },".day");
});

before();
function list() {
if (killed.length !== 0) {
    for (var i=0;i<killed.length;i++) {
        var a=killed[i];
        $(".kill").eq(i).after(`<div class="dead">晚上<div class="number">${a[0].num}</div>号被杀死了，他的真实身份是
    <div class="identity">${a[0].name}</div></div>`);
        $(".all").eq(i).after(`<div class="dead">白天<div class="number">${a[1].num}</div>号被投死了，他的真实身份是
    <div class="identity">${a[1].name}</div></div>`);
    }}
}
list();