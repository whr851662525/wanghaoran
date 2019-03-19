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

//原生写法
// whr();
// function whr() {
//     document.getElementById('invalid').innerText;
//     var name=document.getElementById('name').value;
//     var pwd=document.getElementById('pwd').value;
//     console.log(name);
//     console.log(pwd);
//     var xhr=new XMLHttpRequest();
//     if ((login === null || login ==='')||(pwd === null || pwd === '')){
//         document.getElementById('invalid').innerText='请输入用户名或密码';
//     }else {
//         xhr.onreadystatechange=function (){
//             if (xhr.readyState == 4){
//                 if ((xhr.status >= 200 && xhr.status<300) || xhr.status == 304){
//                     var data=JSON.parse(xhr.responseText);
//                     console.log(data);
//                     if (data.code === -5003){
//                         document.getElementById('invalid').innerText=data.message;
//                     } else if (data.code === -5004){
//                         document.getElementById('invalid').innerText=data.message;
//                     } else {
//                         console.log(data.code)
//                     }
//                 }
//             }
//         };
//     }
//     xhr.open('POST','/carrots-admin-ajax/a/login',true);
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     xhr.setRequestHeader("Accept", "application/json,text/plain,*/*");
//     xhr.send('name='+login+'&'+'&pwd='+pwd);
// }