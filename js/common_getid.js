/**
 * Created by Administrator on 2017/8/16.
 */
function getObj(id){
    return document.getElementById(id);
}
function getStyle(obj,attr){
    if(document.all){
        return parseInt(obj.currentStyle[attr]);
    }else{
        return parseInt(getComputedStyle(obj,false)[attr]);
    }
}
