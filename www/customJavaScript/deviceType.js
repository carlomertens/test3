egl.defineClass("customJavaScript","deviceType",{"DetectIphone":function(){
if(navigator.userAgent.indexOf("iPhone")!=-1){
return true;
}else{
return false;
}
},"LandscapeMode":function(){
if(Math.abs(window.orientation)===90){
return true;
}else{
return false;
}
}});
