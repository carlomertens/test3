egl.defineClass("customJavaScript","RandomNumberGenerator",{"constructor":function(){
this.upperLimit=100;
},"setUpperLimit":function(_1){
this.upperLimit=_1;
},"getUpperLimit":function(){
return this.upperLimit;
},"generateRandomNumber":function(){
return Math.floor(Math.random()*this.upperLimit);
}});
