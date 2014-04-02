egl.defineClass("customJavaScript","LocalStorage",{"constructor":function(){
if(!("localStorage" in window)){
alert("Warning, your browser does not support local storage!");
}
},"isSupported":function(){
if("localStorage" in window){
return true;
}else{
return false;
}
},"length":function(){
return new egl.javascript.BigDecimal(localStorage.length);
},"getName":function(_1){
return localStorage.key(_1);
},"getValue":function(_2){
return localStorage.getItem(_2);
},"setValue":function(_3,_4){
localStorage.setItem(_3,_4);
},"removeValue":function(_5){
localStorage.removeItem(_5);
},"clear":function(){
localStorage.clear();
}});
