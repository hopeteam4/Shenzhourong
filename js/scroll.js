document.onscroll = function () {
//        导航吸顶
    var nav = document.getElementsByTagName("nav")[0];
    var nav_img = nav.getElementsByTagName("img")[0];
    var nav_a = nav.getElementsByTagName("a");
    var nav_top = document.body.scrollTop || document.documentElement.scrollTop;
    if (nav_top > nav.offsetTop) {
        nav.setAttribute("style", "background-color:white");
        nav_img.setAttribute("src", "../img/first_images/iphone_logo02.png");
        for (var i = 0; i < nav_a.length; i++) {
            nav_a[i].setAttribute("style", "color:#000")
        }
    }
    else {
        nav.setAttribute("style", "");
        nav_img.setAttribute("src", "../img/first_images/145x45baise.png");
        for (var j = 0; j < nav_a.length; j++) {
            nav_a[j].setAttribute("style", "")
        }
    }



//        侧栏下滑出现
    var top = document.body.scrollTop || document.documentElement.scrollTop;
    var list4 = getObj("list4");
    if (top > 700) {
        list4.setAttribute("style", "display:block");
    }
    else {
        list4.setAttribute("style", "");
    }


////   底部图片滚动动画
//    function footanima 0) {
//    var scrolllop=document.body.scrol 1Top ;
//    vor footiapic-rindor.frames["foot_niat ion"].document.getElementByClasslane(foopigpic [0];
//    console.log("foot_ingpic:"+foot_imgpic);
//    console.log (scrol 1Top);
//    if(scrollfop>=1500) {
//        foot_ingpic.style.transition="all 1.5s";
//        foot_imgpic.style.transform="translate (0,20px)";
//    else if(scrollTop<1500)
//            foot_ingpic.style.transition="a页1.5s";
//        foot_ingpic.style.transform="translate (0,-20px)";
//    else
//        foot_imgpic.style.transition=";
//        foot_imgpic.style.transform="";
//        //底部动西结束
    };