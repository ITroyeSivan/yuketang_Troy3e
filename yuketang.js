// ==UserScript==
// @name         雨课堂自动刷视频
// @version      1.0
// @description  雨课堂自动刷视频
// @author       Troy3e
// @match        https://www.yuketang.cn/v2/web/xcloud/video-student/8233437/*
// @grant        none
// ==/UserScript==


// @获取所有视频id
// @这一部分单独执行一遍，获取视频id
// var flag = 1;
// var page = 0;
// var vedio_id = [];
// while (flag){
//     $(function () {
//         $.ajax({
//             type: "GET",
//             async : false,
//             url: "https://www.yuketang.cn/v2/api/web/logs/learn/8233437?actype=-1&page=" + page + "&offset=1",
//             success: function (data) {
//                 try{
//                     temp_vedio_id = data["data"]["activities"][0]["content"]["leaf_id"];
//                     vedio_id.push(temp_vedio_id);
//                     //console.log(page);
//                     page = page + 1;
//                 }catch (e){
//                     page = page + 1;
//                 }
//                 if (data["data"]["prev_id"] == -1){
//                     flag = 0;
//                 }
//             },
//             error: function () {
//                 alert("发生甚么事了");
//             }
//         })
//     });
// }
// console.log(vedio_id);

// @视频功能
// @二倍速没搞成，希望有会的师傅教教我
var vedio_id = [16152179, 16152178, 16152177, 16152176, 16152175, 16118289, 16118288, 15983054, 15963088, 15963087, 15824436, 15824435, 15824434, 15704029, 15356029, 15581922, 15596929, 15486422, 15525846, 15380276, 15380274, 15380273, 15380271, 15356028, 15356027, 15356026, 15356025, 15171255, 15117364, 15117363, 15117362, 15113958, 15113956, 15127429, 15113955, 15113954, 14938282, 14911406, 14911405, 14893418, 14875109, 14875108, 14875114, 14594197, 14875107, 14873514, 14589709, 14589708, 14589707, 14474769, 14474768, 14474766, 14474765, 14474764, 14474763, 14474762, 14474761, 14179268, 14179267, 14179266, 14179265, 14179264, 14179263, 14179262, 13463677, 13811899, 13811898, 13811897, 13811896, 13811895, 13811894, 13811893, 13554182, 13463670, 13463675, 13463674, 13463673, 13463671, 13463669];
while(1){
    if(vedio_id[0] == document.location.toString().split("/").pop()){
        break;
    }
    vedio_id.shift();
    console.log(vedio_id[0]);
}
var i =0;
setInterval(function (){
    var vedio_address = "https://www.yuketang.cn/v2/web/xcloud/video-student/8233437/" + vedio_id[i] + "";
    window.location.href = vedio_address;
    text_schedule = document.querySelectorAll("span.text");
    vedio_schedule = text_schedule[1];
    if (vedio_schedule.innerHTML !== "完成度：100%"){
        var start = document.getElementsByClassName("play-btn-tip")[0];
        if(start.innerText == "播放"){
            console.log("播放视频");
            start.click(); //播放视频
            document.getElementsByClassName("xt_video_player_common_icon")[0].click() //静音
            var player = $(".xt_video_player_common_list");
            let speed = player.children()[0];
            speed.click(); //二倍速失效
            if (temp_html.indexOf('width: 100%;"></xt-currenttime>') >= 0){
                i = i + 1;
                console.log("正在播放的是"+ vedio_address);
            }
        }
    }
    else{
        i = i + 1;
        var vedio_address1 = "https://www.yuketang.cn/v2/web/xcloud/video-student/8233437/" + vedio_id[i] + "";
        window.location.href = vedio_address1;
    }
    },30000); //开始之后可以调慢点
