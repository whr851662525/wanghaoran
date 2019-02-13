let arr  = JSON.parse(sessionStorage.getItem("typer"));
console.log(arr);
sessionStorage.setItem("arr",JSON.stringify(arr));
$('.over').click(function () {
    window.open('../html/task2.html', '_self');
});
$('.kill').click(function () {
    window.open('../html/kill.html', '_self');
    $(this).css("background-color","#b9e9f5");
});