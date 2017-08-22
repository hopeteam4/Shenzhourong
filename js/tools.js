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
function getElementsByClassName(cName)  {
    if (document.getElementsByClassName)
        return document.getElementsByClassName(cName);
    else {
        var arr = [];
        var allElements = document.getElementsByTagName('*');
        for (var i = 0; i < allElements.length; i++) {
            var allCNames = allElements[i].className.split(' ');
            for (var j = 0; j < allCNames.length; j++) {
                if (allCNames[j] == cName) {
                    arr.push(allElements[i]);
                    break;
                }
            }
        }
        return arr;
    }
}
