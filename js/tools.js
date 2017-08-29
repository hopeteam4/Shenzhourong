function getObj(id){
    return document.getElementById(id);
}
//获取样式表样式
function getStyle(obj,attr){
//        document.all为判断IE浏览器的条件
    if(document.all){
//            兼容IE8及以下版本
        return parseInt(obj.currentStyle[attr]);
    }else{
//            兼容火狐和谷歌
        return parseInt(getComputedStyle(obj,false)[attr]);
    }
}
function eventHandler(event_type,ele,event_handle,isBubble){
    var reg=/#/;
    var reg1=/\./;
    var obj;
    if (reg.test(ele)){
        obj=ele.substring(1);
        obj=document.getElementById(obj);
    }
    else if(reg1.test(ele)){
        obj=ele.substring(1);
        obj=document.getElementsByClassName(obj)[0];
    }
    else {
        obj=document.getElementsByTagName(ele)[0];
    }
    if(document.all){
        obj.attachEvent("on"+event_type,event_handle,isBubble);
    }
    else {
        obj.addEventListener(event_type,event_handle,!isBubble);
    }

}
//解决IE8之类不支持getElementsByClassName
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (className, element) {
        var children = (element || document).getElementsByTagName('*');
        var elements = [];
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] = className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}