// 玩家数组
var list = [
    {
        type:1,
        live:1,
        position:1
    },{
        type:1,
        live:1,
        position:2
    },{
        type:2,
        live:1,
        position:3
    },{
        type:1,
        live:1,
        position:4
    },{
        type:1,
        live:1,
        position:5
    }
];
// 游戏天数进程
var days = [
    {
        section:2,
        people:[
            3,5
        ]},[
        1,4
    ], [

    ]
];
// 杀人，投票，开始新一天
var arr = days[0].push(3);
arr = days[0].push(5);
days.push([]);

// 用两个新数组长度判断游戏结果
var people = [];
var killer = [];
for(var i=0;i<list.length;i++){
    if(list[i].live){
        if(list[i].type===1){
            people.push(list[i]);
        }else if(list[i].type === 2){
            killer.push(list[i]);
        }
    }
}

// 循环展示游戏每天死亡详情
for(var x=0;x<days.length;x++){
    days[x][0];   //  = 3
    days[x][1];
    list[days[x][0]].type;    // 取到身份
}
