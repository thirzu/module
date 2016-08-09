
//判断obj2是否为obj1子元素
function isChild(obj1,obj2) {
    for(;obj2 !== document;obj2 =obj2.parentNode){
        if(obj2 == obj1){
            return true;
        }
    }
    return false;
}
//添加css类
function addClass(obj,cla) {
    if(!obj.className){
        obj.className = cla;
    }else if(obj.className.indexOf(cla) !== -1){
        return true;
    }else{
        obj.className += " " + cla;
    }
}
//通过类名获取元素
function getByClassName(obj,cla) {
    if(obj.getElementsByClassName){
        return obj.getElementsByClassName(cla);
    } else{
        var ele = document.getElementsByTagName("*"),
            arr = [];
        for(var i = 0, length = ele.length; i < length; i++){
            if(ele[i].className.indexOf(cla) !== -1){
                arr.push(ele[i]);
            }
            return arr;
        }
    }
}
//移除css类
function removeClass(obj,cla) {
    if(obj.className == cla){
        obj.className = "";
    }else{
        obj.className = obj.className.replace(cla,"");
    }
}
//阻止冒泡
function stopBubble(event) {
    var event = event || window.event;
    if(event.stopPropagation){
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
//获取样式
function getStyle(obj, name) {
    if(obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}
//添加事件
function addEvent(obj,type,handler) {
    if(obj.addEventListener){
        obj.addEventListener(type,handler);
    }else{
        obj.attachEvent("on"+type,handler);
    }
}
//移除事件
function removeEvent(obj,type,handler) {
    if(obj.removeEventListener){
        obj.removeEventListener(type,handler);
    }else{
        obj.detachEvent("on"+type,handler);
    }

}/**
 * Created by K on 2016/7/28.
 */
