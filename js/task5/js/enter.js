// var xhr=new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState  == 4) {
//         if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//             alert(xhr.responseText);
//         }else {
//             alert("request was unsuccessful:" + xhr.status)
//         }
//     }
// };
// xhr.open("GET","xxx.jsp",true);

//jq写法
$('#button').click(function () {
    $('.invalid').text('');
    var name=$('.account').val();
    var pwd=$('.password').val();
    console.log(typeof name);
    console.log(typeof pwd);
    if ((name === null || name === '') || (pwd === null || pwd === '')){
        $('.invalid').text('请输入账号和密码');
    }else {
        $.ajax({
          type:"Post",
          url:"carrots-admin-ajax/a/login",
          contentType: 'application/x-www-form-urlencoded',
          data:{
              name: name,
              pwd: pwd,
          },
          success:function (data) {
              console.log(data.message);
              var json=JSON.parse(data);
              console.log(json);
              console.log(json.code);
              if (json.code === -5003){
                 $('.invalid').text(json.message)
              }else if (json.code === -5004){
                 $('.invalid').text(json.message)
              } else {
                 console.log(json.code)
             }
          }
        })
    }
});
