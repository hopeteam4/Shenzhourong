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
        console.log(left_value);
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
        that.setAttribute("class" ,"on");
        console.log(num);
        index_case_img.style.left=num*-1200+"px";
    }
    timer=setInterval(function(){
        moving(-2400,0,-1200);
    },1000);
    index_case_content.onmouseover=function(){
        clearInterval(timer);
        clearInterval(timer1);
    };
    index_case_content.onmouseout=function(){
        timer1=setInterval(
            function(){moving(-2400,0,-1200)
            },1000);
    };
    //领导介绍切换
    var focus_obj1=document.getElementsByClassName("index_boss_li");
        var details_obj1=document.getElementsByClassName("index_boss_sub");
        for(var i=0;i<focus_obj1.length;i++){
            focus_obj1[i].index=i;
            focus_obj1[i].onmouseover=function(){
                for(var j=0;j<details_obj1.length;j++){
                    details_obj1[j].style.display="none";
                    focus_obj1[j].style="black";
                }
                this.style.color="#f46948";
                details_obj1[this.index].style.display="block";
            }
        }
    //最新动态切换
    var focus_obj=document.getElementsByClassName("index_news_title_li");
    var details_obj=document.getElementsByClassName("index_news_item");
    for(var k=0;k<focus_obj.length;k++){
        focus_obj[k].index=k;
        focus_obj[k].onmouseover=function(){
            for(var j=0;j<details_obj.length;j++){
                details_obj[j].style.display="none";
                focus_obj[j].style="black";
            }
            details_obj[this.index].style.display="block";
        }
    }
};