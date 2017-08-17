window.onload=function(){
    //获取dom节点
    var timer=null;
    var timer1=null;
    var img_list=getObj("img_list");
    var prev=getObj("prev");
    var next=getObj("next");
    var buttons=document.getElementsByTagName("span");
    //绑定事件
    prev.addEventListener("click",function(){
        scroll(0,-3804,-1902)
    });
    next.addEventListener("click",function(){
        scroll(-3804,0,1902)
    });

    for(var i=0;i<buttons.length;i++){
        (function(n){
            buttons[n].onclick=function(){
                button_control(this,n);
            }
        })(i)
    }

    //事件处理函数
    //左右箭头控制
    function scroll(origin,ter,speed){
        var left_val=getStyle(img_list,"left");
        if(left_val===ter){
            img_list.style.left=origin+"px";
            left_val=parseInt(img_list.style.left);
        }else {
            left_val+=speed;
            img_list.style.left=left_val+"px";
        }

        //在修改class前，清空所有class；
        for(var i=0;i<buttons.length;i++){
            buttons[i].setAttribute("class","");
        }
        //点击span修改class为“on”；
        buttons[left_val/-1519].setAttribute("class","sty");
    }
    //底部按钮控制
    function button_control(that,num) {
        //在修改class前，清空所有class；
        for(var i=0;i<buttons.length;i++){
            buttons[i].setAttribute("class","");
        }
        //点击span修改class为“on”；
        that.setAttribute("class","sty");
        //控制图片移动到当前位置
        img_list.style.left=num*(-1902)+"px";
    }
    //添加定时器
    timer=setInterval(function(){
        scroll(0,-3804,-1902);
    },2000);

    getObj("scroll").onmouseover=function(){
        clearInterval(timer);
        clearInterval(timer1)
    };
    getObj("scroll").onmouseout=function(){
        clearInterval(timer);
        clearInterval(timer1);
        timer1=setInterval(function(){
            scroll(-3804,0,1902)
        },2000);
    }

};
