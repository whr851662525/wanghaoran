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
    // $(this).find('.knife').toggle();
    // console.log($(this).find('.knife').css('display'));

    if($(this).find('.knife').css('display') == 'inline'){
        $(this).find('.knife').toggle();
    }else {
        $('.knife').css('display','none');
        $(this).find('.knife').toggle();
    }
    console.log(this);
});
$('.agree').click(function () {
    //window.open('../html/judge.html', '_self');
    //window.history.back(-1);
});
