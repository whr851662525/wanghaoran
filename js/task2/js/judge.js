let arr  = JSON.parse(sessionStorage.getItem("typer"));
console.log(arr);
sessionStorage.setItem("arr",JSON.stringify(arr));
$('.over').click(function () {
    window.open('../html/task2.html', '_self');
});

var fsm = new StateMachine({
    init:'green',
    transitions: [
        {name: 'warn', from: 'green', to: 'warn'},
        {name: 'stop', from: 'warn', to: 'stop'},
        {name: 'go', from: 'stop', to: 'go'},
        {name: 'log', from: 'go', to: 'log'},
    ],
    methods:{
        onWarn:function () {
            $(".kill").css("background-color", "green");
            $(".kill-box").css("border-right","25px solid green");
            console.log("one")
        },
            //允许为每个事件指定两个回调函数，
            // onBeforeWarn: function () {
            //     console.log("warn事件发生之前触发");
            // },
        onStop:function () {
            $(".ghost").css("background-color", "yellow");
            $(".ghost-box").css("border-right","25px solid yellow");
            console.log("warn事件发生之后触发");
            },
        onGo:function () {
            $(".player").css("background-color", "red");
            $(".player-box").css("border-right","25px solid red");
            },
        onLog:function () {
            $(".all").css("background-color","blue");
            $(".all-box").css("border-right","25px solid blue");
            }
        }
});
$(".kill").click(function () {
    fsm.warn();
    //window.open('../html/kill.html', '_self');
});
$(".ghost").click(function () {
    fsm.stop();
});
$(".player").click(function () {
    fsm.go();
});
$(".all").click(function () {
    fsm.log();
});