let arr  = JSON.parse(sessionStorage.getItem("typer"));
console.log(arr);
for (var n = 0;n < arr.length;n++) {
    $('.lake').append(`
<div class="box">
<div class="figure">
<div class="block">${arr[n]}</div>
<div class="number"><div class="id">${n+1}</div>号</div>
</div>
</div>
`);
}
$(".agree").click(function () {
    window.location.href = ('../html/judge.html');
    var peoples = [];
    if (typeof(arr[0]) == "string") {
        $.each(arr, function (index, data) {
            peoples.push({name: data, state: 1, num:index+1});
        });
    }
    sessionStorage.setItem("peoples", JSON.stringify(peoples));
});