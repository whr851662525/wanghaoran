$('#btn').click(function () {
    var allNum = data.length; //总人数
    console.log(`总人数` + allNum);
    circle++; //点一下加一下
    console.log(`circle` + circle);

    if (circle === 2 * allNum + 1) { //再继续点则进入下一个页面
        window.open('judge.html', '_self');
    }

    else if (circle <= 2 * allNum) { //查看过程中
        var thisNum = Math.ceil(circle / 2); //查看当前身份数
        $('.circle').text(thisNum);

        if (circle % 2 === 1) {//按钮内容
            $('.btn').text(`查看${thisNum}号身份`);
        }


        else {
            $('.btn').text(`隐藏并传递给${thisNum}号`);
        }
        $('.show-role').text(data[circle / 2 - 1]);
        $('.card-info').toggle();
        $('.card-face').toggle();


    }
    if (circle === 2 * allNum) {
        // 点击到头，按钮显示进入法官页面
        $('.btn').text(`法官查看`);
    }
});
