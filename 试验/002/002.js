
$('.div1').click(function(event) {
    var event=event||e;
    console.log(event.currentTarget.id);  //获取id属性值
    console.log(event.currentTarget.dataset.name);  //获取自定义data-属性值

    //获取div里的值  2种方法
    console.log($(this).html());
    console.log($(this).text());
    //获取自定义属性的属性值
    console.log($(this).attr("haha"));

    //获取当前操作下标
    console.log($(this).index());
    console.log($('.div1').index(this));
});