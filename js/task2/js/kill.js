let arr  = JSON.parse(sessionStorage.getItem("typer"));
console.log(arr);
$('.wrong').click(function () {
    window.open('../html/task2.2.html', '_self');
});
for (var n = 0;n < arr.length;n++) {
    $('.lake').append(`
<div class="box">
<div class="figure">
<div class="block">${arr[n]}</div>
<div class="number"><div class="id">${n+1}</div>号</div>
<img class="knife" src="../img/knife.png">
</div>
</div>
`);}
$('.figure').click(function () {
    $(".knife").hide();
    $(this).children(".knife").show();
    $(".figure").removeClass("chosen");
    $(this).addClass("chosen");
});
$('.agree').click(function () {
    var q = $('.figure').index($('.chosen'));
    console.log(arr)
    if (arr[q] == "杀手"){
        alert("干啥这么想不开，不能自杀哦！");
        return false;
    }else if (arr[q] == "平民") {
    window.location.href=('../html/judge.html');
    }
    else if (q == -1){
        alert("请选择要杀的人");
        return false;
    }
    console.log(q);
    console.log(arr[q]);

//数组转换对象
    var peoples = [];
    if (typeof(arr[0]) == "string") {
        console.log('aa');
        $.each(arr, function (index, data) {
            peoples.push({name: data,state:1,num:q+1});
        });
        arr = peoples;
    }
    console.log(peoples);
    arr[q].state =  2;
    arr = arr[q];
    sessionStorage.setItem("killed", JSON.stringify(arr));


// sessionStorage.setItem("typer", JSON.stringify(arr));
var order = 2;
sessionStorage.setItem("step", JSON.stringify(order));
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