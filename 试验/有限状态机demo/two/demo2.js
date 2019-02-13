$(document).ready(function(){
    var fsm =  StateMachine({
        init: "hi",
        transitions: [
            { name: 'sayhi',  from:'hi', to: 'understand'},
            { name: 'askout', from:'understand', to:'friend'},
            { name: 'saylike', from:'friend',to:'girlfriend'},
            { name: 'saylove', form:'girlfriend',  to:'wife'},
            { name: 'saydivorce', form:'wife',  to:'ex'},
            { name: 'introduce', form:'ex',  to:'sdf'},
        ],
        methods: {
            onSayhi: function () {
                $(".ss").text("恭喜你，认识一个漂亮的小姐姐");
            },
            onAskout: function () {
                $(".ss").text("恭喜你，和小姐姐成为朋友");
            },
            onSaylike: function () {
                $(".ss").text("恭喜你，和小姐姐关系升级成为女朋友");
            },
            onSaylove: function () {
                $(".ss").text("恭喜你，女票变成妻子");
            },
            onSaydivorce: function () {
                $(".ss").text("不恭喜你了，妻子没了");
            },
            onIntroduce: function () {
                $(".ss").text("恭喜你，妻子变成小姨子。关系有点乱");
            },
        }
    });
    $(".a").click(function () {
        fsm.sayhi();
    });
    $(".ssss").click(function () {
        fsm.askout();
    });
    $(".dd").click(function () {
        fsm.saylike();
    });
    $(".ff").click(function () {
        fsm.saylove();
    });
    $(".gg").click(function () {
        fsm.saydivorce();
    });
    $(".hh").click(function () {
        fsm.introduce();
    });
});