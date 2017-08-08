/**
 * Created by yanbo on 2017/4/1.
 * QQ511948469
 */
;$(function(){
    $("#btn").click(function(){
        var $value=$("#txt").val();//获取输入框的值
        var $p=$("<p></p>");//创建一个p标签
        $p.addClass("p");//为p标签创建一个class为p
        $p.text($value);//把输入框的值赋值给p标签
        $("#txt").val("");//点击过后设置文本框内容为空
        var _top=Math.floor(Math.random()*($("#content").innerHeight()-30));//随机高度：$("#content")的高度减去p标签的高度
        var _fontsize=16+Math.floor(Math.random()*10);//随机字体大小16-26
        var _rgb="rgb(" + Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255)+")";
        //随机颜色
        $p.css({"top":_top,"font-size":_fontsize,"color":_rgb});//设置p标签的css值
        $("#content").append($p);//把p标签插入到#content容器里
        var _timer=Math.ceil(Math.random()*4000)+3000;//随机时间3-7秒时间
        $p.stop().animate({"left":"-500px"},_timer,function(){
            $(this).remove();
        });//从左至右的动画，最后给删除元素。
    });
    window.send=function(event){
        if (event.keyCode == 13 || event.which == 13) {
            $("#btn").click();
        }
    };
});