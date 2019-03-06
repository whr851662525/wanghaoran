let killed = JSON.parse(sessionStorage.getItem("killed"));
let step = JSON.parse(sessionStorage.getItem("step"));
let peoples = JSON.parse(sessionStorage.getItem("peoples"));
let days = JSON.parse(sessionStorage.getItem("days"));
console.log(step);
console.log(days);
$('.wrong').click(function () {
    window.open('../html/task2.2.html', '_self');
});
console.log(peoples);
//生成盒子
function steps() {
for (var n = 0; n < peoples.length; n++) {
    var html = '<div class="box">' +
        '<div class="figure">' +
        '<div class="block">'+peoples[n].name+'</div>' +
        '<input type="hidden" class="state" value="'+peoples[n].state+'">' +
        '<div class="number"><div class="id">'+(n+1)+'</div>号</div>' +
        '<img class="knife" src="../img/knife.png">' +
        '</div>' +
        '</div>';
    $('.lake').append(html);
    $.each($('.state'),function (index,data) {
        if(data.value == 2){
            $(this).siblings(".block").addClass("dead");
            $('.figure').removeClass("dead");
        }
    })
}}
steps();
//判断投票
$(function () {
    if (step === 4) {
        $('.cast').text('全民投票');
        $('.please-box').text('请各位玩家找出杀人凶手！');
        $('.agree').text('投死');
        step = 5;
        sessionStorage.setItem("step", JSON.stringify(step));
    }
});
//选中
$('.figure').click(function () {

    if ($(this).find('.block').hasClass("dead")) {
        alert("这个人已经死了，选其他人吧！");
        return;
    }
    $(".knife").hide();
    $(this).children(".knife").show();
    $(".figure").removeClass("chosen");
    $(this).addClass("chosen");
});
//杀人以及投票按钮
$('.agree').click(function () {
console.log(days)
    var q = $('.figure').index($('.chosen'));
    if (step == undefined) {
    console.log(q);
    if (peoples[q].name === "杀手") {
        alert("干啥这么想不开，不能自杀哦！");
        return false;
    } else if (peoples[q].name === "平民") {
        killed[killed.length-1].push(peoples[q]);
        peoples[q].state = 2;
        console.log(days.length);
        sessionStorage.setItem("peoples", JSON.stringify(peoples));
        sessionStorage.setItem("killed", JSON.stringify(killed));
        var order = 2;
        sessionStorage.setItem("step", JSON.stringify(order));
        // window.location.href = ('../html/judge.html');
        filtrate();
    }
    else if (q == -1) {
        alert("请选择要杀的人");
        return false;
    }
    }else {
        console.log(killed)
        if (q == -1){
            alert("请选择要投死的人");
            return false;
        }
        peoples[q].state = 2;
        console.log(killed)
        killed[killed.length-1].push(peoples[q]);
        killed.push([]);
        if (days.length == 1){
            days=[];
            days.push(killed);
            days.push([]);
            sessionStorage.setItem("days",JSON.stringify(days));
            console.log(days)
        }else{
            days[days.length-1].push(killed);
            days.push([])
        }
        console.log(peoples);
        console.log(days);
        sessionStorage.setItem("peoples", JSON.stringify(peoples));
        sessionStorage.setItem("killed", JSON.stringify(killed));
        sessionStorage.setItem("days", JSON.stringify(days));
        sessionStorage.removeItem("step");
        //第二天清除step并且
        console.log(killed);
        // window.location.href = ('../html/judge.html');
        filtrate();
    }
});
//for循环找出活着的人身份并区分身份
function count(peoples,name,pro){
    var counts = 0;
    peoples.map(function(a){
        if(a[name]== pro){
            counts ++;
        }
    });
    return counts;
}

function filtrate() {
    //account 计算数组中杀手和平民数量
    // count();
    var killer = count(peoples,"name","杀手");
    console.log(killer);
    var civilian = count(peoples,name,"平民");
    console.log(civilian);
    var dead=0;
    var deadKiller=0;
    var deadCivilians=0;
    for (var a=0;a<peoples.length;a++) {
        if (peoples[a].state == 2) {
            dead++;
            if (peoples[a].name == "杀手") {
                deadKiller++;
            }else if (peoples[a].name == "平民") {
                deadCivilians++;
            }
        }
        console.log(dead);

    }
    switch (true) {
        case killer-deadKiller === civilian-deadCivilians:
            alert("杀手胜利");
            window.location.href = "over.html";
            break;
        case killer-deadKiller === 0:
            alert("平民胜利");
            window.location.href = "over.html";
            break;
        default:
            window.location.href = "judge.html";
    }
}