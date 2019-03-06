
// 如何来阻止?
    // 1.event.stopPropagation();
// <script type="text/javascript">
//     $(function() {
//         $("#hr_three").click(function(event) {
//             event.stopPropagation();
//         });
//     });
// <script>
// 再点击“点击我”，会弹出：我是最里层，然后链接到百度

// 2.return false;
// 如果头部加入的是以下代码
// <script type="text/javascript">
//     $(function() {
//         $("#hr_three").click(function(event) {
//             return false;
//         });
//     });
// <script>
// 再点击“点击我”，会弹出：我是最里层，但不会执行链接到百度页面
// $(function () {
//    $("#hr_three").click(function (event) {
//        event.preventDefault();
//    })
// });

//由此可以看出：
// 1.event.stopPropagation();
// 事件处理过程中，阻止了事件冒泡，但不会阻击默认行为（它就执行了超链接的跳转）
// 2.return false;
// 事件处理过程中，阻止了事件冒泡，也阻止了默认行为（比如刚才它就没有执行超链接的跳转）
// 还有一种有冒泡有关的：
// 3.event.preventDefault();
// 如果把它放在头部A标签的click事件中，点击“点击我”。
// 会发现它依次弹出：我是最里层---->我是中间层---->我是最外层，但最后却没有跳转到百度
// 它的作用是：事件处理过程中，不阻击事件冒泡，但阻击默认行为（它只执行所有弹框，却没有执行超链接跳转）