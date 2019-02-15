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
    console.log(q);
    if (arr[q] == "杀手"){
        alert("干啥这么想不开，不能自杀哦！");
        return false;
    }
    window.open('../html/judge.html', '_self');
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