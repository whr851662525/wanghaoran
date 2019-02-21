function qq() {
    var fsm = new StateMachine({
        init: 'green',
        transitions: [
            {name: 'warn', from: 'green', to: 'yellow'},
            {name: 'stop', from: 'yellow', to: 'red'},
            {name: 'go', from: 'yellow', to: 'green'},
            {name: 'warn', from: 'red', to: 'yellow'},
        ],
        methods: {
            onGo: function () {
                $(".star").css("background-color", "green");
            },
            //允许为每个事件指定两个回调函数，
            onBeforeWarn: function () {
                console.log("warn事件发生之前触发");
            },
            onWarn: function () {
                $(".star").css("background-color", "yellow");
                console.log("warn事件发生之后触发");
            },
            onStop: function () {
                $(".star").css("background-color", "red");
                console.log(fsm.state);
            },
            // 它也允许为每个状态指定两个回调函数，以green状态为例：
            onEnterGreen: function () {
                $(".msg").text("允许通行")
            },
            onEnterYellow: function () {
                $(".msg").text("警告！信号灯即将变化")
            },
            onEnterRed: function () {
                $(".msg").text("禁止通行")
            }
        }
    });
//添加点击事件
    $(".go").click(function () {
        fsm.go();
    });
    $(".warn").click(function () {
        fsm.warn();
    });
    $(".stop").click(function () {
        fsm.stop();
    });
}
qq();

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