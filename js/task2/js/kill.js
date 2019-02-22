let killed = JSON.parse(sessionStorage.getItem("killed"));
let step = JSON.parse(sessionStorage.getItem("step"));
let peoples = JSON.parse(sessionStorage.getItem("peoples"));
let days = JSON.parse(sessionStorage.getItem("days"));
console.log(step)
$('.wrong').click(function () {
    window.open('../html/task2.2.html', '_self');
});
console.log(peoples);
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
}
$(function () {
    if (step === 4) {
        $('.cast').text('全民投票');
        $('.please-box').text('请各位玩家找出杀人凶手！');
        $('.agree').text('投死');
        step = 5;
        sessionStorage.setItem("step", JSON.stringify(step));
        // var judge = 5;
        // sessionStorage.setItem("judge", JSON.stringify(judge));
    }
});
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



$('.agree').click(function () {

    var q = $('.figure').index($('.chosen'));
    if (step == undefined) {
    console.log(q);
    if (peoples[q].name === "杀手") {
        alert("干啥这么想不开，不能自杀哦！");
        return false;
    } else if (peoples[q].name === "平民") {
        window.location.href = ('../html/judge.html');
    }
    else if (q == -1) {
        alert("请选择要杀的人");
        return false;
    }
    peoples[q].state = 2;
    killed.push(peoples[q]);
    //     arr.push({name: arr[q], state: 2, num:q+1});
    console.log(peoples);
    sessionStorage.setItem("peoples", JSON.stringify(peoples));
    sessionStorage.setItem("killed", JSON.stringify(killed));
// sessionStorage.setItem("typer", JSON.stringify(arr));
    var order = 2;
    sessionStorage.setItem("step", JSON.stringify(order));
    }else {
        if (q == -1){
            alert("请选择要杀的人");
            return false;
        }

        peoples[q].state = 2;
        console.log(killed)
        killed.push(peoples[q]);
        // arr[q].state2 = 2;
        // arr[q].name = arr[q];
        // arr[q].num = q;
        //arr = arr[q];
        console.log(peoples);
        sessionStorage.setItem("peoples", JSON.stringify(peoples));
        sessionStorage.setItem("killed", JSON.stringify(killed));
        console.log(killed);
        window.location.href = ('../html/judge.html');
    }
});

// $('.figure').click(function () {
//     if($(this).find('.knife').css('display') == 'inline'){
//         $(this).find('.knife').toggle();
//         $(this).removeClass("chosen");
//     }else {
//         $('.knife').css('display','none');
//         $(this).find('.knife').toggle();
//         $(this).addClass("chosen");
//     }
//     console.log(this);
// });
//addClass