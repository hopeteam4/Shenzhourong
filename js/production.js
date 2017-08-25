/**
 * Created by HP on 2017/8/20.
 */
window.onload=function() {
    //审批系统轮播开始
    var production_system_img = getObj("production-system-img");
    var radius_span = document.getElementsByClassName("production-system-img1");
    var production_system_content = getObj("production-system-content");
    var production_system_radius=getObj("production-system-radius");
    var timer = null;
    var timer1 = null;
    eventHandler("click","#production-trans_left",function(){moving(0, -2400, 1200)},true);
    eventHandler("click","#production-trans_right",function(){moving(-2400, 0, -1200)},true);
    function moving(edge_a, edge_b, speed) {
        var left_value = parseInt(production_system_img.style.left);
        if (left_value === edge_a) {
            left_value = edge_b;
        }
        else {
            left_value += speed;
        }
        production_system_img.style.left = left_value + "px";
        for (var i = 0; i < radius_span.length; i++) {
            radius_span[i].setAttribute("id", "")
        }
        radius_span[left_value / -1200].setAttribute("id", "on")
    }
    for (var i = 0; i < radius_span.length; i++) {
        (function (n) {
            radius_span[n].onmouseover = function () {
                span_control(this, n)
            }
        })(i)
    }
    function span_control(that, num) {
        for (var i = 0; i < radius_span.length; i++) {
            radius_span[i].setAttribute("id", "");
        }
        //console.log(radius_span[i]);
        that.setAttribute("id", "on");
        production_system_img.style.left = num * -1200 + "px";
    }
    timer = setInterval(function () {
        moving(-2400, 0, -1200);
    }, 2000);
    production_system_radius.onmouseover = function () {
        clearInterval(timer);
        clearInterval(timer1);
    };
    production_system_content.onmouseover = function () {
        clearInterval(timer);
        clearInterval(timer1);
    };
    production_system_radius.onmouseout = function () {
        timer1 = setInterval(
            function () {
                moving(-2400, 0, -1200)
            }, 2000);
    };
    production_system_content.onmouseout = function () {
        timer1 = setInterval(
            function () {
                moving(-2400, 0, -1200)
            }, 2000);
    };
};
//审批系统轮播结束