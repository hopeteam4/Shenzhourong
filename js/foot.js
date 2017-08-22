/**
 * Created by Administrator on 2017/8/21.
 */

window.onscroll = function () {

    var foot_pic = document.getElementById("foot_try");//获取div
    var dis = document.getElementById("foot_try").offsetTop ;//获取对象相对于版面的高
    var scl_top =document.documentElement.scrollTop||document.body.scrollTop;//scrollTop为滚动条滑动的距离

    if (scl_top - dis > -300) {
        foot_pic.style.transform = "translate(0,5px)"
    } else if (scl_top - dis < -300) {
        foot_pic.style.transform = "translate(0,-5px)"
    }
};




































