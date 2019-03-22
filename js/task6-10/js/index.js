$('#button').click(function () {
    $('.invalid').text('');
    var name=$('.account').val();
    var pwd=$('.password').val();
    console.log(typeof name);
    console.log(typeof pwd);
    if ((name === null || name === '') || (pwd === null || pwd === '')){
        $('.invalid').text('请输入账号和密码');
    }else{

    }
});