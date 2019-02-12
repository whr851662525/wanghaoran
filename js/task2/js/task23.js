let arr  = JSON.parse(sessionStorage.getItem("typer"));
console.log(arr);
console.log( $('#arise'));
//jquery方法 ，ready函数
function test() {
    $('#hidden').hide();
    $('#appear').show();
    $('#circle').html(1);
    $('#arise').html("点击查看1号身份");
}
//函数自执行
 test();
//开始点击
//es6 模板字符串
//数组的下标
//arr[circle / 2 -1] = 点击查看 身份
var circle  = 1;
$('.base').click(function () {
    var allNum = arr.length;
    console.log('总人数' + allNum);
    circle++;//点一次加一次
    console.log(`circle` + circle);
    if (circle === 2 * allNum + 1) { //再继续点则进入下一个页面
        sessionStorage.setItem("arr",JSON.stringify(arr));
        window.open('../html/check.html', '_self');
    }
    else if (circle <= 2 * allNum) { //查看过程中
        var thisNum = Math.ceil(circle / 2); //查看当前身份数
        $('#circle').text(thisNum);
        if (circle % 2 === 1) {//按钮内容
            $('.base').text(`查看${thisNum}号身份`);
        }
        else {
            $('.base').text(`隐藏并传递给${thisNum + 1}号`);
        }
        $('.role').text(arr[circle / 2 - 1]);
        $('#hidden').toggle();
        $('#appear').toggle();
    }
    if (circle === 2 * allNum) {
        // 点击到头，按钮显示进入法官页面
        $('.base').text(`法官查看`);
    }
});