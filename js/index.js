/**
 * Created by Administrator on 2017/8/17.
 */
window.onload=function(){
    //客户案例轮播
    var index_case_img=getObj("index-case-img");
    var index_trans_left=getObj("index-trans_left");
    var index_trans_right=getObj("index-trans_right");
    var radius_span=document.getElementsByTagName("span");
    var index_case_content=getObj("index-case-content");
    var timer=null;
    var  timer1=null;
    index_trans_left.addEventListener("click",function(){
        moving(0,-2400,1200);
    });
    index_trans_right.addEventListener("click",function(){
        moving(-2400,0,-1200);
    });
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
    for(var i=0; i<radius_span.length;i++){
        ( function(n){
            radius_span[n].onclick=function(){
                span_control(this,n)
            }
        })(i)
    }
    function span_control(that,num){
        for(var i=0;i<radius_span.length;i++){
            radius_span[i].setAttribute("class","");
        }
        console.log(radius_span[i]);
        that.setAttribute("class" ,"on");
        //console.log(num);
        console.log(that);
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
    //console.log(getComputedStyle(index_boss_info[0]).color);
    //console.log(getComputedStyle(index_boss_li_img[0]).border);
    //var timerb=null;
    //var timerb1=null;
    var  index_boss_item=getObj("index_boss_item");
        for(var i=0;i<focus_obj1.length;i++){
            focus_obj1[i].index=i;
            focus_obj1[i].onmouseover=function slide(){
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
    //setInterval(function(){
    //    slide();
    //},2000);
    //index_boss_item.onmouseover=function(){
    //    clearInterval(timerb);
    //    clearInterval(timerb1);
    //};
    //index_boss_item.onmouseout=function(){
    //    setInterval(function(){
    //        slide();
    //    },2000);
    //};
    //最新动态切换
    var focus_obj=document.getElementsByClassName("index_news_title_li");
    var details_obj=document.getElementsByClassName("index_news_item");
    for(var k=0;k<focus_obj.length;k++){
        focus_obj[k].index=k;
        focus_obj[k].onmouseover=function(){
            for(var j=0;j<details_obj.length;j++){
                details_obj[j].style.display="none";
            }
            details_obj[this.index].style.display="block";
        }
    }
};