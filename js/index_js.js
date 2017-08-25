window.onload=function(){
    //获取dom节点
    var scroll_timer=null;
    var scroll_timer1=null;
    var img_list=getObj("img_list");
    var index_scroll=getObj("index_scroll");
    var scroll_buttons=document.getElementById("buttons").getElementsByTagName("span");
    //绑定事件
    eventHandler("click","#prev",function(){Scroll(-3804,0,1902)},true);
    eventHandler("click","#next",function(){Scroll(0,-3804,-1902)},true);
    //事件处理函数
    function Scroll(origin,terminal,speed){
        var scroll_left_val=parseInt(img_list.style.left);
        //console.log(scroll_left_val);
        if(scroll_left_val===terminal){
            scroll_left_val=origin;
            img_list.setAttribute("style","transition: 0s ease-in-out left;")
        }else {
            scroll_left_val+=speed;
            img_list.setAttribute("style","transition: 0.6s ease-in-out left;")
        }
        img_list.style.left=scroll_left_val+"px";

        for(var i=0;i<scroll_buttons.length;i++){
            scroll_buttons[i].setAttribute("class","");
        }
        scroll_buttons[scroll_left_val/-1902].setAttribute("class","on");
        //console.log(scroll_left_val/-1902)
    }

    for(var i=0;i<scroll_buttons.length;i++){
        (function(n){
            scroll_buttons[n].onmouseover=function(){
                button_control(this,n);
            }
        })(i)
    }
    //底部按钮控制
    function button_control(that,num) {
        for(var i=0;i<scroll_buttons.length;i++){
            scroll_buttons[i].setAttribute("class","");
        }
        that.setAttribute("class","on");
        //控制图片移动到当前位置
        img_list.style.left=num*(-1902)+"px";
    }
    //添加定时器
    scroll_timer=setInterval(function(){
        Scroll(0,-3804,-1902)
    },2000);

    index_scroll.onmouseover=function(){
        clearInterval(scroll_timer);
        clearInterval(scroll_timer1)
    };
    index_scroll.onmouseout=function(){
        scroll_timer1=setInterval(function(){
            Scroll(0,-3804,-1902)
        },2000);
    };


//    新闻轮播
    var news = document.getElementById("index_news_details");
    var official_news=document.getElementById("official_news");
    var news_timer;
    var news_timer1;
    news_timer = setInterval(function () {
        official(-35, -70, 0);
    }, 2000);
    eventHandler("mouseover","#index_news_details",function(){clearInterval(news_timer);
        clearInterval(news_timer1);},true);
    eventHandler("mouseout","#index_news_details",function(){ news_timer = setInterval(function () {
        official(-35, -70,0);
    }, 2000);},true);
    function official(speed, terminal, flag) {
        var top_value = parseInt(news.style.top);
        if (top_value === terminal) {
            top_value = flag;
        }

        else {
            top_value += speed;
        }
        news.style.top = top_value + "px";
    }


//    首页第二个轮播
    var section_timer=null;
    var section_timer1=null;
    var container_main=getObj("container_main");
    var section_list = getObj("section_list");
    var section=document.getElementsByClassName("section_title");
//绑定事件

    for(var j=0;j<section.length;j++){
        (function(n){
            section[n].onmouseover=function(){
                button_switch(this,n);
            }
        })(j)
    }

//事件处理函数
    function Switch(ori,ter,spe){
        var section_left_val=getStyle(section_list,"left");
        if(section_left_val===ter){
            section_left_val=ori;
        }else {
            section_left_val+=spe;
        }
        section_list.style.left=section_left_val+"px";

        for(var i=0;i<section.length;i++){
            section[i].setAttribute("id","");
        }
        section[section_left_val/-1200].setAttribute("id","on");
    }
//按钮切换
    function button_switch(that,num) {
        for(var i=0;i<section.length;i++){
            section[i].setAttribute("id","");
        }
        that.setAttribute("id","on");
        //控制图片移动到当前位置
        section_list.style.left=num*(-1200)+"px";
    }
//添加定时器
    section_timer=setInterval(function(){
        Switch(0,-4800,-1200)
    },2000);

    container_main.onmouseover=function(){
        clearInterval(section_timer);
        clearInterval(section_timer1)
    };
    container_main.onmouseout=function(){
        section_timer1=setInterval(function(){
            Switch(0, -4800, -1200)
        },2000);
    };

    //客户案例轮播
    var index_case_img=getObj("index-case-img");
    var radius_span=document.getElementById("index-case-radius").getElementsByTagName("span");
    var index_case_content=getObj("index-case-content");
    var timer=null;
    var  timer1=null;
    eventHandler("click","#index-trans_left",function(){moving(0,-2400,1200)},true);
    eventHandler("click","#index-trans_right",function(){moving(-2400,0,-1200)},true);
    function moving(edge_a,edge_b,speed){
        var left_value=parseInt(index_case_img.style.left);
        if(left_value===edge_a){
            left_value=edge_b;
        }
        else {
            left_value+=speed;
        }
        index_case_img.style.left=left_value+"px";
        for(var i=0;i<radius_span.length;i++){
            radius_span[i].setAttribute("class","")
        }
        radius_span[left_value/-1200].setAttribute("class","on")
    }
    for(var m=0; m<radius_span.length;m++){
        ( function(n){
            radius_span[n].onclick=function(){
                span_control(this,n)
            }
        })(m)
    }
    function span_control(that,num){
        for(var i=0;i<radius_span.length;i++){
            radius_span[i].setAttribute("class","");
        }
        that.setAttribute("class" ,"on");
        index_case_img.style.left=num*-1200+"px";
    }
    timer=setInterval(function(){
        moving(-2400,0,-1200);
    },2000);
    index_case_content.onmouseover=function(){
        clearInterval(timer);
        clearInterval(timer1);
    };
    index_case_content.onmouseout=function(){
        timer1=setInterval(
            function(){moving(-2400,0,-1200)
            },2000);
    };

    //领导介绍切换
    var focus_obj1=document.getElementsByClassName("index_boss_li");
    var details_obj1=document.getElementsByClassName("index_boss_sub");
    var index_boss_li_img=document.getElementsByClassName("index_boss_li_img");
    var index_boss_info=document.getElementsByClassName("index_boss_info");

    var  index_boss_item=getObj("index_boss_item");
    for(var k=0;k<focus_obj1.length;k++){
        focus_obj1[k].index=k;
        focus_obj1[k].onmouseover=function slide(){
            for(var j=0;j<details_obj1.length;j++){
                details_obj1[j].style.display="none";
                focus_obj1[j].style="black";
                index_boss_li_img[j].style.border ="4px solid rgba(254, 254, 254, 0)";
                index_boss_info[j].style.color="white";
            }
            details_obj1[this.index].style.display="block";
            index_boss_li_img[this.index].style.border ="4px solid #F19149";
            index_boss_info[this.index].style.color="#F19149";
        }
    }

    var focus_obj=document.getElementsByClassName("index_news_title_li");
    var details_obj=document.getElementsByClassName("index_news_item");
    for(var y=0;y<focus_obj.length;y++){
        focus_obj[y].index=y;
        focus_obj[y].onmouseover=function(){
            for(var j=0;j<details_obj.length;j++){
                details_obj[j].style.display="none";
            }
            details_obj[this.index].style.display="block";
        }
    }

};
