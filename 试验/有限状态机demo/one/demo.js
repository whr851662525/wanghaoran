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