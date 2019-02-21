let arr = JSON.parse(sessionStorage.getItem("typer"));
let killed = JSON.parse(sessionStorage.getItem("killed"));
let step = JSON.parse(sessionStorage.getItem("step"));
let peoples = JSON.parse(sessionStorage.getItem("peoples"));
console.log(arr);
$('.wrong').click(function () {
    window.open('../html/task2.2.html', '_self');
});
var peoples = [];
if (typeof(arr[0]) == "string") {
    $.each(arr, function (index, data) {
        peoples.push({name: data, state: 1, num:n});
    });
}
//数组转换对象
console.log(peoples)
for (var n = 0; n < peoples.length; n++) {
    var html = '<div class="box">' +
        '<div class="figure">' +
        '<div class="block">'+peoples[n].name+'</div>' +
        '<input type="text" value="'+peoples[n].state+'">' +
        '<div class="number"><div class="id">'+(n+1)+'</div>号</div>' +
        '<img class="knife" src="../img/knife.png">' +
        '</div>' +
        '</div>';
    $('.lake').append(html);
}
$('.figure').click(function () {
    $(".knife").hide();
    $(this).children(".knife").show();
    $(".figure").removeClass("chosen");
    $(this).addClass("chosen");
});
$('.agree').click(function () {
    var q = $('.figure').index($('.chosen'));
    if (arr[q] == "杀手") {
        alert("干啥这么想不开，不能自杀哦！");
        return false;
    } else if (arr[q] == "平民") {
        window.location.href = ('../html/judge.html');
    }
    else if (q == -1) {
        alert("请选择要杀的人");
        return false;
    }
    arr = peoples;
    arr[q].state = 2;
    arr = arr[q];
    console.log(arr);
    console.log(peoples);
    sessionStorage.setItem("peoples", JSON.stringify(peoples));
    sessionStorage.setItem("killed", JSON.stringify(arr));
// sessionStorage.setItem("typer", JSON.stringify(arr));
    var order = 2;
    sessionStorage.setItem("step", JSON.stringify(order));
});
$(function () {
    // if (object.state === 2) {
    //     $(this).css("background-color", "#74d4eb").prop("disabled",true);
    // }
    // for (var i=0;i<object.;i++) {
    //
    // }
    console.log(object);
    if (step === 4) {
        $('.cast').text('全民投票');
        $('.please-box').text('请各位玩家找出杀人凶手！');
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