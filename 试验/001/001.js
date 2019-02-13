$(document).ready(function(){
    $("button").click(function(){
        $("button").text($(".d1").is(":hidden") ? "收起" : "展开");
        //此处判断div层的class属性值来动态更改按钮的text值
        $(".d1").slideToggle();
    });
});