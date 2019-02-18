let arr = JSON.parse(sessionStorage.getItem("typer"));
let killed = JSON.parse(sessionStorage.getItem("killed"));
let step = JSON.parse(sessionStorage.getItem("step"));
console.log(arr);
console.log(killed);
console.log(step);
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
if (step == 2){
    $(".kill").css("background-color", "#b9e9f5").attr('disabled',true);
    $(".kill-box").css("border-right", "25px solid #b9e9f5");
    $(".kill").after(`<div class="dead">晚上<div class="number">${killed.num}</div>号被杀死了，他的真实身份是<div class="identity">${killed.name}</div></div>`);
$(".ghost").click(function () {
    $(".ghost").css("background-color", "#b9e9f5");
    $(".ghost-box").css("border-right", "25px solid #b9e9f5");
    alert("请死者发表遗言！");
});}
if (step < 2){
    attr('disabled',true);
}



// var peoples = [];
// if (typeof(arr[0]) == "string") {
//     console.log('aa');
//     $.each(arr, function (index, data) {
//         peoples.push({name: data,state:1});
//     });
//     arr = peoples;
// }
// console.log(peoples);
// sessionStorage.setItem("typer", JSON.stringify(arr));

// var fsm = new StateMachine({
//     init: 'green',
//     transitions: [
//         {name: 'warn', from: 'green', to: 'warn'},
//         {name: 'stop', from: 'warn', to: 'stop'},
//         {name: 'go', from: 'stop', to: 'go'},
//         {name: 'log', from: 'go', to: 'log'},
//     ],
//     methods: {
//         onWarn: function () {
//             $(".kill").css("background-color", "#b9e9f5");
//             $(".kill-box").css("border-right", "25px solid #b9e9f5");
//             console.log("one");
//             console.log(fsm.state);
//         },
//         //允许为每个事件指定两个回调函数，
//         // onBeforeWarn: function () {
//         //     console.log("warn事件发生之前触发");
//         // },
//         onStop: function () {
//             $(".ghost").css("background-color", "#b9e9f5");
//             $(".ghost-box").css("border-right", "25px solid #b9e9f5");
//             console.log("warn事件发生之后触发");
//             // console.log(fsm.state);
//         },
//         onGo: function () {
//             $(".player").css("background-color", "#b9e9f5");
//             $(".player-box").css("border-right", "25px solid #b9e9f5");
//             //console.log(fsm.state);
//         },
//         onLog: function () {
//             $(".all").css("background-color", "#b9e9f5");
//             $(".all-box").css("border-right", "25px solid #b9e9f5");
//             //console.log(fsm.state);
//         }
//     }
// });
// $(".kill").click(function () {
//     fsm.warn();
//     window.location.href = ('../html/kill.html');
// });
// $(".ghost").click(function () {
//     fsm.warn();
//     fsm.stop();
//     alert("死者发表遗言");
// });
// $(".player").click(function () {
//     fsm.warn();
//     fsm.stop();
//     fsm.go();
//     alert("玩家依次发言");
// });
// $(".all").click(function () {
//     fsm.warn();
//     fsm.stop();
//     fsm.go();
//     fsm.log();
// });