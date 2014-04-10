var theWidget;
var ChartWidget;
var PieWidget;
var data;
var defaults;
var requestAnimFrame=(function(){
return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(_1){
window.setTimeout(_1,1000/60);
};
})();
egl.defineWidget("customJavaScript.widgets","chart","egl.ui.rui","Widget","div",{"eze$$initializeDOMElement":function(){
var _2=document.createElement("canvas");
_2.setAttribute("width",this.width||340);
_2.setAttribute("height",this.height||340);
_2.style.border="solid 2px black";
var _3=_2.getContext("2d");
this.eze$$DOMElement.appendChild(_2);
this.canvas_=_2;
this.canvasFilled=false;
var _4={labels:["Jan","Feb","Mar","Apr","May","June","July"],datasets:[{fillColor:"rgba(255,149,0,0.7)",strokeColor:"rgba(255,149,0,1)",pointColor:"rgba(255,149,0,1)",pointStrokeColor:"#fff",data:[65,59,90,81,56,55,40]},{fillColor:"rgba(0,122,255,0.7)",strokeColor:"rgba(0,122,255,1)",pointColor:"rgba(0,122,255,1)",pointStrokeColor:"#fff",data:[28,48,40,19,96,27,100]}]};
var _5=[{value:30,color:"#FF9500"},{value:50,color:"#FF3B30"},{value:100,color:"#34AADC"},{value:40,color:"#4CD964"},{value:120,color:"#5866D6"}];
this.ChartWidget=_4;
this.PieWidget=_5;
},"constructor":function(){
this.onUpload=[];
theWidget=this;
},"setPieData":function(_6,_7){
var _8=new Array();
for(i=0;i<_6.length;i++){
_8.push({value:_6[i],color:_7[i]});
}
this.PieWidget=_8;
},"setLineData":function(_9,_a,_b,_c,_d){
var _e=new Array();
for(i=0;i<_9.length;i++){
_e.push({fillColor:_9[i],strokeColor:_a[i],pointColor:_b[i],pointStrokeColor:_c[i],data:_d[i]});
}
this.ChartWidget.datasets=_e;
},"showAsLineGraph":function(){
var _f=new Chart(this.canvas_.getContext("2d")).Line(this.ChartWidget);
},"showAsBarGraph":function(){
var _10=new Chart(this.canvas_.getContext("2d")).Bar(this.ChartWidget);
},"showAsPie":function(){
var _11=new Chart(this.canvas_.getContext("2d")).Pie(this.PieWidget);
},"showAsDoughnut":function(){
var _12=new Chart(this.canvas_.getContext("2d")).Doughnut(this.PieWidget);
},"showAsPolarArea":function(){
var _13=new Chart(this.canvas_.getContext("2d")).PolarArea(this.PieWidget);
},"showAsRadar":function(){
var _14=new Chart(this.canvas_.getContext("2d")).Radar(this.ChartWidget);
},"setLabels":function(_15){
this.ChartWidget.labels=_15;
},"setWidth":function(w){
this.eze$$DOMElement.children[0].width=w;
},"setHeight":function(w){
this.eze$$DOMElement.children[0].height=w;
}});
window.Chart=function(_18){
var _19=this;
var _1a={linear:function(t){
return t;
},easeInQuad:function(t){
return t*t;
},easeOutQuad:function(t){
return -1*t*(t-2);
},easeInOutQuad:function(t){
if((t/=1/2)<1){
return 1/2*t*t;
}
return -1/2*((--t)*(t-2)-1);
},easeInCubic:function(t){
return t*t*t;
},easeOutCubic:function(t){
return 1*((t=t/1-1)*t*t+1);
},easeInOutCubic:function(t){
if((t/=1/2)<1){
return 1/2*t*t*t;
}
return 1/2*((t-=2)*t*t+2);
},easeInQuart:function(t){
return t*t*t*t;
},easeOutQuart:function(t){
return -1*((t=t/1-1)*t*t*t-1);
},easeInOutQuart:function(t){
if((t/=1/2)<1){
return 1/2*t*t*t*t;
}
return -1/2*((t-=2)*t*t*t-2);
},easeInQuint:function(t){
return 1*(t/=1)*t*t*t*t;
},easeOutQuint:function(t){
return 1*((t=t/1-1)*t*t*t*t+1);
},easeInOutQuint:function(t){
if((t/=1/2)<1){
return 1/2*t*t*t*t*t;
}
return 1/2*((t-=2)*t*t*t*t+2);
},easeInSine:function(t){
return -1*Math.cos(t/1*(Math.PI/2))+1;
},easeOutSine:function(t){
return 1*Math.sin(t/1*(Math.PI/2));
},easeInOutSine:function(t){
return -1/2*(Math.cos(Math.PI*t/1)-1);
},easeInExpo:function(t){
return (t==0)?1:1*Math.pow(2,10*(t/1-1));
},easeOutExpo:function(t){
return (t==1)?1:1*(-Math.pow(2,-10*t/1)+1);
},easeInOutExpo:function(t){
if(t==0){
return 0;
}
if(t==1){
return 1;
}
if((t/=1/2)<1){
return 1/2*Math.pow(2,10*(t-1));
}
return 1/2*(-Math.pow(2,-10*--t)+2);
},easeInCirc:function(t){
if(t>=1){
return t;
}
return -1*(Math.sqrt(1-(t/=1)*t)-1);
},easeOutCirc:function(t){
return 1*Math.sqrt(1-(t=t/1-1)*t);
},easeInOutCirc:function(t){
if((t/=1/2)<1){
return -1/2*(Math.sqrt(1-t*t)-1);
}
return 1/2*(Math.sqrt(1-(t-=2)*t)+1);
},easeInElastic:function(t){
var s=1.70158;
var p=0;
var a=1;
if(t==0){
return 0;
}
if((t/=1)==1){
return 1;
}
if(!p){
p=1*0.3;
}
if(a<Math.abs(1)){
a=1;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(1/a);
}
return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p));
},easeOutElastic:function(t){
var s=1.70158;
var p=0;
var a=1;
if(t==0){
return 0;
}
if((t/=1)==1){
return 1;
}
if(!p){
p=1*0.3;
}
if(a<Math.abs(1)){
a=1;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(1/a);
}
return a*Math.pow(2,-10*t)*Math.sin((t*1-s)*(2*Math.PI)/p)+1;
},easeInOutElastic:function(t){
var s=1.70158;
var p=0;
var a=1;
if(t==0){
return 0;
}
if((t/=1/2)==2){
return 1;
}
if(!p){
p=1*(0.3*1.5);
}
if(a<Math.abs(1)){
a=1;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(1/a);
}
if(t<1){
return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p));
}
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*1-s)*(2*Math.PI)/p)*0.5+1;
},easeInBack:function(t){
var s=1.70158;
return 1*(t/=1)*t*((s+1)*t-s);
},easeOutBack:function(t){
var s=1.70158;
return 1*((t=t/1-1)*t*((s+1)*t+s)+1);
},easeInOutBack:function(t){
var s=1.70158;
if((t/=1/2)<1){
return 1/2*(t*t*(((s*=(1.525))+1)*t-s));
}
return 1/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2);
},easeInBounce:function(t){
return 1-_1a.easeOutBounce(1-t);
},easeOutBounce:function(t){
if((t/=1)<(1/2.75)){
return 1*(7.5625*t*t);
}else{
if(t<(2/2.75)){
return 1*(7.5625*(t-=(1.5/2.75))*t+0.75);
}else{
if(t<(2.5/2.75)){
return 1*(7.5625*(t-=(2.25/2.75))*t+0.9375);
}else{
return 1*(7.5625*(t-=(2.625/2.75))*t+0.984375);
}
}
}
},easeInOutBounce:function(t){
if(t<1/2){
return _1a.easeInBounce(t*2)*0.5;
}
return _1a.easeOutBounce(t*2-1)*0.5+1*0.5;
}};
var _46=_18.canvas.width;
var _47=_18.canvas.height;
if(window.devicePixelRatio){
_18.canvas.style.width=_46+"px";
_18.canvas.style.height=_47+"px";
_18.canvas.height=_47*window.devicePixelRatio;
_18.canvas.width=_46*window.devicePixelRatio;
_18.scale(window.devicePixelRatio,window.devicePixelRatio);
}
this.PolarArea=function(_48,_49){
_19.PolarArea.defaults={scaleOverlay:true,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:true,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:true,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null};
var _4a=(_49)?mergeChartConfig(_19.PolarArea.defaults,_49):_19.PolarArea.defaults;
return new _4b(_48,_4a,_18);
};
this.Radar=function(_4c,_4d){
_19.Radar.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:true,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:false,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:true,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:true,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:true,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};
var _4e=(_4d)?mergeChartConfig(_19.Radar.defaults,_4d):_19.Radar.defaults;
return new _4f(_4c,_4e,_18);
};
this.Pie=function(_50,_51){
_19.Pie.defaults={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null};
var _52=(_51)?mergeChartConfig(_19.Pie.defaults,_51):_19.Pie.defaults;
return new Pie(_50,_52,_18);
};
this.Doughnut=function(_54,_55){
_19.Doughnut.defaults={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null};
var _56=(_55)?mergeChartConfig(_19.Doughnut.defaults,_55):_19.Doughnut.defaults;
return new _57(_54,_56,_18);
};
this.Line=function(_58,_59){
_19.Line.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:true,pointDot:true,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};
var _5a=(_59)?mergeChartConfig(_19.Line.defaults,_59):_19.Line.defaults;
return new _5b(_58,_5a,_18);
};
this.Bar=function(_5c,_5d){
_19.Bar.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:true,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};
var _5e=(_5d)?mergeChartConfig(_19.Bar.defaults,_5d):_19.Bar.defaults;
return new Bar(_5c,_5e,_18);
};
var _60=function(c){
c.clearRect(0,0,_46,_47);
};
var _4b=function(_62,_63,ctx){
var _65,_66,_67,_68,_69,_6a,_6b;
calculateDrawingSizes();
_6a=getValueBounds();
_6b=(_63.scaleShowLabels)?_63.scaleLabel:null;
if(!_63.scaleOverride){
_67=calculateScale(_69,_6a.maxSteps,_6a.minSteps,_6a.maxValue,_6a.minValue,_6b);
}else{
_67={steps:_63.scaleSteps,stepValue:_63.scaleStepWidth,graphMin:_63.scaleStartValue,labels:[]};
populateLabels(_6b,_67.labels,_67.steps,_63.scaleStartValue,_63.scaleStepWidth);
}
_66=_65/(_67.steps);
animationLoop(_63,drawScale,drawAllSegments,ctx);
function calculateDrawingSizes(){
_65=(Min([_46,_47])/2);
_65-=Max([_63.scaleFontSize*0.5,_63.scaleLineWidth*0.5]);
_68=_63.scaleFontSize*2;
if(_63.scaleShowLabelBackdrop){
_68+=(2*_63.scaleBackdropPaddingY);
_65-=_63.scaleBackdropPaddingY*1.5;
}
_69=_65;
_68=Default(_68,5);
};
function drawScale(){
for(var i=0;i<_67.steps;i++){
if(_63.scaleShowLine){
ctx.beginPath();
ctx.arc(_46/2,_47/2,_66*(i+1),0,(Math.PI*2),true);
ctx.strokeStyle=_63.scaleLineColor;
ctx.lineWidth=_63.scaleLineWidth;
ctx.stroke();
}
if(_63.scaleShowLabels){
ctx.textAlign="center";
ctx.font=_63.scaleFontStyle+" "+_63.scaleFontSize+"px "+_63.scaleFontFamily;
var _6d=_67.labels[i];
if(_63.scaleShowLabelBackdrop){
var _6e=ctx.measureText(_6d).width;
ctx.fillStyle=_63.scaleBackdropColor;
ctx.beginPath();
ctx.rect(Math.round(_46/2-_6e/2-_63.scaleBackdropPaddingX),Math.round(_47/2-(_66*(i+1))-_63.scaleFontSize*0.5-_63.scaleBackdropPaddingY),Math.round(_6e+(_63.scaleBackdropPaddingX*2)),Math.round(_63.scaleFontSize+(_63.scaleBackdropPaddingY*2)));
ctx.fill();
}
ctx.textBaseline="middle";
ctx.fillStyle=_63.scaleFontColor;
ctx.fillText(_6d,_46/2,_47/2-(_66*(i+1)));
}
}
};
function drawAllSegments(_6f){
var _70=-Math.PI/2,_71=(Math.PI*2)/_62.length,_72=1,_73=1;
if(_63.animation){
if(_63.animateScale){
_72=_6f;
}
if(_63.animateRotate){
_73=_6f;
}
}
for(var i=0;i<_62.length;i++){
ctx.beginPath();
ctx.arc(_46/2,_47/2,_72*calculateOffset(_62[i].value,_67,_66),_70,_70+_73*_71,false);
ctx.lineTo(_46/2,_47/2);
ctx.closePath();
ctx.fillStyle=_62[i].color;
ctx.fill();
if(_63.segmentShowStroke){
ctx.strokeStyle=_63.segmentStrokeColor;
ctx.lineWidth=_63.segmentStrokeWidth;
ctx.stroke();
}
_70+=_73*_71;
}
};
function getValueBounds(){
var _75=Number.MIN_VALUE;
var _76=Number.MAX_VALUE;
for(var i=0;i<_62.length;i++){
if(_62[i].value>_75){
_75=_62[i].value;
}
if(_62[i].value<_76){
_76=_62[i].value;
}
}
var _78=Math.floor((_69/(_68*0.66)));
var _79=Math.floor((_69/_68*0.5));
return {maxValue:_75,minValue:_76,maxSteps:_78,minSteps:_79};
};
};
var _4f=function(_7a,_7b,ctx){
var _7d,_7e,_7f,_80,_81,_82,_83;
if(!_7a.labels){
_7a.labels=[];
}
calculateDrawingSizes();
var _82=getValueBounds();
_83=(_7b.scaleShowLabels)?_7b.scaleLabel:null;
if(!_7b.scaleOverride){
_7f=calculateScale(_81,_82.maxSteps,_82.minSteps,_82.maxValue,_82.minValue,_83);
}else{
_7f={steps:_7b.scaleSteps,stepValue:_7b.scaleStepWidth,graphMin:_7b.scaleStartValue,labels:[]};
populateLabels(_83,_7f.labels,_7f.steps,_7b.scaleStartValue,_7b.scaleStepWidth);
}
_7e=_7d/(_7f.steps);
animationLoop(_7b,drawScale,drawAllDataPoints,ctx);
function drawAllDataPoints(_84){
var _85=(2*Math.PI)/_7a.datasets[0].data.length;
ctx.save();
ctx.translate(_46/2,_47/2);
for(var i=0;i<_7a.datasets.length;i++){
ctx.beginPath();
ctx.moveTo(0,_84*(-1*calculateOffset(_7a.datasets[i].data[0],_7f,_7e)));
for(var j=1;j<_7a.datasets[i].data.length;j++){
ctx.rotate(_85);
ctx.lineTo(0,_84*(-1*calculateOffset(_7a.datasets[i].data[j],_7f,_7e)));
}
ctx.closePath();
ctx.fillStyle=_7a.datasets[i].fillColor;
ctx.strokeStyle=_7a.datasets[i].strokeColor;
ctx.lineWidth=_7b.datasetStrokeWidth;
ctx.fill();
ctx.stroke();
if(_7b.pointDot){
ctx.fillStyle=_7a.datasets[i].pointColor;
ctx.strokeStyle=_7a.datasets[i].pointStrokeColor;
ctx.lineWidth=_7b.pointDotStrokeWidth;
for(var k=0;k<_7a.datasets[i].data.length;k++){
ctx.rotate(_85);
ctx.beginPath();
ctx.arc(0,_84*(-1*calculateOffset(_7a.datasets[i].data[k],_7f,_7e)),_7b.pointDotRadius,2*Math.PI,false);
ctx.fill();
ctx.stroke();
}
}
ctx.rotate(_85);
}
ctx.restore();
};
function drawScale(){
var _89=(2*Math.PI)/_7a.datasets[0].data.length;
ctx.save();
ctx.translate(_46/2,_47/2);
if(_7b.angleShowLineOut){
ctx.strokeStyle=_7b.angleLineColor;
ctx.lineWidth=_7b.angleLineWidth;
for(var h=0;h<_7a.datasets[0].data.length;h++){
ctx.rotate(_89);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,-_7d);
ctx.stroke();
}
}
for(var i=0;i<_7f.steps;i++){
ctx.beginPath();
if(_7b.scaleShowLine){
ctx.strokeStyle=_7b.scaleLineColor;
ctx.lineWidth=_7b.scaleLineWidth;
ctx.moveTo(0,-_7e*(i+1));
for(var j=0;j<_7a.datasets[0].data.length;j++){
ctx.rotate(_89);
ctx.lineTo(0,-_7e*(i+1));
}
ctx.closePath();
ctx.stroke();
}
if(_7b.scaleShowLabels){
ctx.textAlign="center";
ctx.font=_7b.scaleFontStyle+" "+_7b.scaleFontSize+"px "+_7b.scaleFontFamily;
ctx.textBaseline="middle";
if(_7b.scaleShowLabelBackdrop){
var _8d=ctx.measureText(_7f.labels[i]).width;
ctx.fillStyle=_7b.scaleBackdropColor;
ctx.beginPath();
ctx.rect(Math.round(-_8d/2-_7b.scaleBackdropPaddingX),Math.round((-_7e*(i+1))-_7b.scaleFontSize*0.5-_7b.scaleBackdropPaddingY),Math.round(_8d+(_7b.scaleBackdropPaddingX*2)),Math.round(_7b.scaleFontSize+(_7b.scaleBackdropPaddingY*2)));
ctx.fill();
}
ctx.fillStyle=_7b.scaleFontColor;
ctx.fillText(_7f.labels[i],0,-_7e*(i+1));
}
}
for(var k=0;k<_7a.labels.length;k++){
ctx.font=_7b.pointLabelFontStyle+" "+_7b.pointLabelFontSize+"px "+_7b.pointLabelFontFamily;
ctx.fillStyle=_7b.pointLabelFontColor;
var _8f=Math.sin(_89*k)*(_7d+_7b.pointLabelFontSize);
var _90=Math.cos(_89*k)*(_7d+_7b.pointLabelFontSize);
if(_89*k==Math.PI||_89*k==0){
ctx.textAlign="center";
}else{
if(_89*k>Math.PI){
ctx.textAlign="right";
}else{
ctx.textAlign="left";
}
}
ctx.textBaseline="middle";
ctx.fillText(_7a.labels[k],_8f,-_90);
}
ctx.restore();
};
function calculateDrawingSizes(){
_7d=(Min([_46,_47])/2);
_80=_7b.scaleFontSize*2;
var _91=0;
for(var i=0;i<_7a.labels.length;i++){
ctx.font=_7b.pointLabelFontStyle+" "+_7b.pointLabelFontSize+"px "+_7b.pointLabelFontFamily;
var _93=ctx.measureText(_7a.labels[i]).width;
if(_93>_91){
_91=_93;
}
}
_7d-=Max([_91,((_7b.pointLabelFontSize/2)*1.5)]);
_7d-=_7b.pointLabelFontSize;
_7d=CapValue(_7d,null,0);
_81=_7d;
_80=Default(_80,5);
};
function getValueBounds(){
var _94=Number.MIN_VALUE;
var _95=Number.MAX_VALUE;
for(var i=0;i<_7a.datasets.length;i++){
for(var j=0;j<_7a.datasets[i].data.length;j++){
if(_7a.datasets[i].data[j]>_94){
_94=_7a.datasets[i].data[j];
}
if(_7a.datasets[i].data[j]<_95){
_95=_7a.datasets[i].data[j];
}
}
}
var _98=Math.floor((_81/(_80*0.66)));
var _99=Math.floor((_81/_80*0.5));
return {maxValue:_94,minValue:_95,maxSteps:_98,minSteps:_99};
};
};
var Pie=function(_9a,_9b,ctx){
var _9d=0;
var _9e=Min([_47/2,_46/2])-5;
for(var i=0;i<_9a.length;i++){
_9d+=_9a[i].value;
}
animationLoop(_9b,null,drawPieSegments,ctx);
function drawPieSegments(_a0){
var _a1=-Math.PI/2,_a2=1,_a3=1;
if(_9b.animation){
if(_9b.animateScale){
_a2=_a0;
}
if(_9b.animateRotate){
_a3=_a0;
}
}
for(var i=0;i<_9a.length;i++){
var _a5=_a3*((_9a[i].value/_9d)*(Math.PI*2));
ctx.beginPath();
ctx.arc(_46/2,_47/2,_a2*_9e,_a1,_a1+_a5);
ctx.lineTo(_46/2,_47/2);
ctx.closePath();
ctx.fillStyle=_9a[i].color;
ctx.fill();
if(_9b.segmentShowStroke){
ctx.lineWidth=_9b.segmentStrokeWidth;
ctx.strokeStyle=_9b.segmentStrokeColor;
ctx.stroke();
}
_a1+=_a5;
}
};
};
var _57=function(_a6,_a7,ctx){
var _a9=0;
var _aa=Min([_47/2,_46/2])-5;
var _ab=_aa*(_a7.percentageInnerCutout/100);
for(var i=0;i<_a6.length;i++){
_a9+=_a6[i].value;
}
animationLoop(_a7,null,drawPieSegments,ctx);
function drawPieSegments(_ad){
var _ae=-Math.PI/2,_af=1,_b0=1;
if(_a7.animation){
if(_a7.animateScale){
_af=_ad;
}
if(_a7.animateRotate){
_b0=_ad;
}
}
for(var i=0;i<_a6.length;i++){
var _b2=_b0*((_a6[i].value/_a9)*(Math.PI*2));
ctx.beginPath();
ctx.arc(_46/2,_47/2,_af*_aa,_ae,_ae+_b2,false);
ctx.arc(_46/2,_47/2,_af*_ab,_ae+_b2,_ae,true);
ctx.closePath();
ctx.fillStyle=_a6[i].color;
ctx.fill();
if(_a7.segmentShowStroke){
ctx.lineWidth=_a7.segmentStrokeWidth;
ctx.strokeStyle=_a7.segmentStrokeColor;
ctx.stroke();
}
_ae+=_b2;
}
};
};
var _5b=function(_b3,_b4,ctx){
var _b6,_b7,_b8,_b9,_ba,_bb,_bc,_bd,_be,_bf,_c0,_c1,_c2=0;
calculateDrawingSizes();
_bb=getValueBounds();
_bc=(_b4.scaleShowLabels)?_b4.scaleLabel:"";
if(!_b4.scaleOverride){
_b8=calculateScale(_ba,_bb.maxSteps,_bb.minSteps,_bb.maxValue,_bb.minValue,_bc);
}else{
_b8={steps:_b4.scaleSteps,stepValue:_b4.scaleStepWidth,graphMin:_b4.scaleStartValue,labels:[]};
populateLabels(_bc,_b8.labels,_b8.steps,_b4.scaleStartValue,_b4.scaleStepWidth);
}
_b7=Math.floor(_ba/_b8.steps);
calculateXAxisSize();
animationLoop(_b4,drawScale,drawLines,ctx);
function drawLines(_c3){
for(var i=0;i<_b3.datasets.length;i++){
ctx.strokeStyle=_b3.datasets[i].strokeColor;
ctx.lineWidth=_b4.datasetStrokeWidth;
ctx.beginPath();
ctx.moveTo(_c0,_c1-_c3*(calculateOffset(_b3.datasets[i].data[0],_b8,_b7)));
for(var j=1;j<_b3.datasets[i].data.length;j++){
if(_b4.bezierCurve){
ctx.bezierCurveTo(xPos(j-0.5),yPos(i,j-1),xPos(j-0.5),yPos(i,j),xPos(j),yPos(i,j));
}else{
ctx.lineTo(xPos(j),yPos(i,j));
}
}
ctx.stroke();
if(_b4.datasetFill){
ctx.lineTo(_c0+(_bd*(_b3.datasets[i].data.length-1)),_c1);
ctx.lineTo(_c0,_c1);
ctx.closePath();
ctx.fillStyle=_b3.datasets[i].fillColor;
ctx.fill();
}else{
ctx.closePath();
}
if(_b4.pointDot){
ctx.fillStyle=_b3.datasets[i].pointColor;
ctx.strokeStyle=_b3.datasets[i].pointStrokeColor;
ctx.lineWidth=_b4.pointDotStrokeWidth;
for(var k=0;k<_b3.datasets[i].data.length;k++){
ctx.beginPath();
ctx.arc(_c0+(_bd*k),_c1-_c3*(calculateOffset(_b3.datasets[i].data[k],_b8,_b7)),_b4.pointDotRadius,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
}
}
}
function yPos(_c7,_c8){
return _c1-_c3*(calculateOffset(_b3.datasets[_c7].data[_c8],_b8,_b7));
};
function xPos(_c9){
return _c0+(_bd*_c9);
};
};
function drawScale(){
ctx.lineWidth=_b4.scaleLineWidth;
ctx.strokeStyle=_b4.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_46-_be/2+5,_c1);
ctx.lineTo(_46-(_be/2)-_bf-5,_c1);
ctx.stroke();
if(_c2>0){
ctx.save();
ctx.textAlign="right";
}else{
ctx.textAlign="center";
}
ctx.fillStyle=_b4.scaleFontColor;
for(var i=0;i<_b3.labels.length;i++){
ctx.save();
if(_c2>0){
ctx.translate(_c0+i*_bd,_c1+_b4.scaleFontSize);
ctx.rotate(-(_c2*(Math.PI/180)));
ctx.fillText(_b3.labels[i],0,0);
ctx.restore();
}else{
ctx.fillText(_b3.labels[i],_c0+i*_bd,_c1+_b4.scaleFontSize+3);
}
ctx.beginPath();
ctx.moveTo(_c0+i*_bd,_c1+3);
if(_b4.scaleShowGridLines&&i>0){
ctx.lineWidth=_b4.scaleGridLineWidth;
ctx.strokeStyle=_b4.scaleGridLineColor;
ctx.lineTo(_c0+i*_bd,5);
}else{
ctx.lineTo(_c0+i*_bd,_c1+3);
}
ctx.stroke();
}
ctx.lineWidth=_b4.scaleLineWidth;
ctx.strokeStyle=_b4.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_c0,_c1+5);
ctx.lineTo(_c0,5);
ctx.stroke();
ctx.textAlign="right";
ctx.textBaseline="middle";
for(var j=0;j<_b8.steps;j++){
ctx.beginPath();
ctx.moveTo(_c0-3,_c1-((j+1)*_b7));
if(_b4.scaleShowGridLines){
ctx.lineWidth=_b4.scaleGridLineWidth;
ctx.strokeStyle=_b4.scaleGridLineColor;
ctx.lineTo(_c0+_bf+5,_c1-((j+1)*_b7));
}else{
ctx.lineTo(_c0-0.5,_c1-((j+1)*_b7));
}
ctx.stroke();
if(_b4.scaleShowLabels){
ctx.fillText(_b8.labels[j],_c0-8,_c1-((j+1)*_b7));
}
}
};
function calculateXAxisSize(){
var _cc=1;
if(_b4.scaleShowLabels){
ctx.font=_b4.scaleFontStyle+" "+_b4.scaleFontSize+"px "+_b4.scaleFontFamily;
for(var i=0;i<_b8.labels.length;i++){
var _ce=ctx.measureText(_b8.labels[i]).width;
_cc=(_ce>_cc)?_ce:_cc;
}
_cc+=10;
}
_bf=_46-_cc-_be;
_bd=Math.floor(_bf/(_b3.labels.length-1));
_c0=_46-_be/2-_bf;
_c1=_ba+_b4.scaleFontSize/2;
};
function calculateDrawingSizes(){
_b6=_47;
ctx.font=_b4.scaleFontStyle+" "+_b4.scaleFontSize+"px "+_b4.scaleFontFamily;
_be=1;
for(var i=0;i<_b3.labels.length;i++){
var _d0=ctx.measureText(_b3.labels[i]).width;
_be=(_d0>_be)?_d0:_be;
}
if(_46/_b3.labels.length<_be){
_c2=45;
if(_46/_b3.labels.length<Math.cos(_c2)*_be){
_c2=90;
_b6-=_be;
}else{
_b6-=Math.sin(_c2)*_be;
}
}else{
_b6-=_b4.scaleFontSize;
}
_b6-=5;
_b9=_b4.scaleFontSize;
_b6-=_b9;
_ba=_b6;
};
function getValueBounds(){
var _d1=Number.MIN_VALUE;
var _d2=Number.MAX_VALUE;
for(var i=0;i<_b3.datasets.length;i++){
for(var j=0;j<_b3.datasets[i].data.length;j++){
if(_b3.datasets[i].data[j]>_d1){
_d1=_b3.datasets[i].data[j];
}
if(_b3.datasets[i].data[j]<_d2){
_d2=_b3.datasets[i].data[j];
}
}
}
var _d5=Math.floor((_ba/(_b9*0.66)));
var _d6=Math.floor((_ba/_b9*0.5));
return {maxValue:_d1,minValue:_d2,maxSteps:_d5,minSteps:_d6};
};
};
var Bar=function(_d7,_d8,ctx){
var _da,_db,_dc,_dd,_de,_df,_e0,_e1,_e2,_e3,_e4,_e5,_e6,_e7=0;
calculateDrawingSizes();
_df=getValueBounds();
_e0=(_d8.scaleShowLabels)?_d8.scaleLabel:"";
if(!_d8.scaleOverride){
_dc=calculateScale(_de,_df.maxSteps,_df.minSteps,_df.maxValue,_df.minValue,_e0);
}else{
_dc={steps:_d8.scaleSteps,stepValue:_d8.scaleStepWidth,graphMin:_d8.scaleStartValue,labels:[]};
populateLabels(_e0,_dc.labels,_dc.steps,_d8.scaleStartValue,_d8.scaleStepWidth);
}
_db=Math.floor(_de/_dc.steps);
calculateXAxisSize();
animationLoop(_d8,drawScale,drawBars,ctx);
function drawBars(_e8){
ctx.lineWidth=_d8.barStrokeWidth;
for(var i=0;i<_d7.datasets.length;i++){
ctx.fillStyle=_d7.datasets[i].fillColor;
ctx.strokeStyle=_d7.datasets[i].strokeColor;
for(var j=0;j<_d7.datasets[i].data.length;j++){
var _eb=_e4+_d8.barValueSpacing+_e1*j+_e6*i+_d8.barDatasetSpacing*i+_d8.barStrokeWidth*i;
ctx.beginPath();
ctx.moveTo(_eb,_e5);
ctx.lineTo(_eb,_e5-_e8*calculateOffset(_d7.datasets[i].data[j],_dc,_db)+(_d8.barStrokeWidth/2));
ctx.lineTo(_eb+_e6,_e5-_e8*calculateOffset(_d7.datasets[i].data[j],_dc,_db)+(_d8.barStrokeWidth/2));
ctx.lineTo(_eb+_e6,_e5);
if(_d8.barShowStroke){
ctx.stroke();
}
ctx.closePath();
ctx.fill();
}
}
};
function drawScale(){
ctx.lineWidth=_d8.scaleLineWidth;
ctx.strokeStyle=_d8.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_46-_e2/2+5,_e5);
ctx.lineTo(_46-(_e2/2)-_e3-5,_e5);
ctx.stroke();
if(_e7>0){
ctx.save();
ctx.textAlign="right";
}else{
ctx.textAlign="center";
}
ctx.fillStyle=_d8.scaleFontColor;
for(var i=0;i<_d7.labels.length;i++){
ctx.save();
if(_e7>0){
ctx.translate(_e4+i*_e1,_e5+_d8.scaleFontSize);
ctx.rotate(-(_e7*(Math.PI/180)));
ctx.fillText(_d7.labels[i],0,0);
ctx.restore();
}else{
ctx.fillText(_d7.labels[i],_e4+i*_e1+_e1/2,_e5+_d8.scaleFontSize+3);
}
ctx.beginPath();
ctx.moveTo(_e4+(i+1)*_e1,_e5+3);
ctx.lineWidth=_d8.scaleGridLineWidth;
ctx.strokeStyle=_d8.scaleGridLineColor;
ctx.lineTo(_e4+(i+1)*_e1,5);
ctx.stroke();
}
ctx.lineWidth=_d8.scaleLineWidth;
ctx.strokeStyle=_d8.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_e4,_e5+5);
ctx.lineTo(_e4,5);
ctx.stroke();
ctx.textAlign="right";
ctx.textBaseline="middle";
for(var j=0;j<_dc.steps;j++){
ctx.beginPath();
ctx.moveTo(_e4-3,_e5-((j+1)*_db));
if(_d8.scaleShowGridLines){
ctx.lineWidth=_d8.scaleGridLineWidth;
ctx.strokeStyle=_d8.scaleGridLineColor;
ctx.lineTo(_e4+_e3+5,_e5-((j+1)*_db));
}else{
ctx.lineTo(_e4-0.5,_e5-((j+1)*_db));
}
ctx.stroke();
if(_d8.scaleShowLabels){
ctx.fillText(_dc.labels[j],_e4-8,_e5-((j+1)*_db));
}
}
};
function calculateXAxisSize(){
var _ee=1;
if(_d8.scaleShowLabels){
ctx.font=_d8.scaleFontStyle+" "+_d8.scaleFontSize+"px "+_d8.scaleFontFamily;
for(var i=0;i<_dc.labels.length;i++){
var _f0=ctx.measureText(_dc.labels[i]).width;
_ee=(_f0>_ee)?_f0:_ee;
}
_ee+=10;
}
_e3=_46-_ee-_e2;
_e1=Math.floor(_e3/(_d7.labels.length));
_e6=(_e1-_d8.scaleGridLineWidth*2-(_d8.barValueSpacing*2)-(_d8.barDatasetSpacing*_d7.datasets.length-1)-((_d8.barStrokeWidth/2)*_d7.datasets.length-1))/_d7.datasets.length;
_e4=_46-_e2/2-_e3;
_e5=_de+_d8.scaleFontSize/2;
};
function calculateDrawingSizes(){
_da=_47;
ctx.font=_d8.scaleFontStyle+" "+_d8.scaleFontSize+"px "+_d8.scaleFontFamily;
_e2=1;
for(var i=0;i<_d7.labels.length;i++){
var _f2=ctx.measureText(_d7.labels[i]).width;
_e2=(_f2>_e2)?_f2:_e2;
}
if(_46/_d7.labels.length<_e2){
_e7=45;
if(_46/_d7.labels.length<Math.cos(_e7)*_e2){
_e7=90;
_da-=_e2;
}else{
_da-=Math.sin(_e7)*_e2;
}
}else{
_da-=_d8.scaleFontSize;
}
_da-=5;
_dd=_d8.scaleFontSize;
_da-=_dd;
_de=_da;
};
function getValueBounds(){
var _f3=Number.MIN_VALUE;
var _f4=Number.MAX_VALUE;
for(var i=0;i<_d7.datasets.length;i++){
for(var j=0;j<_d7.datasets[i].data.length;j++){
if(_d7.datasets[i].data[j]>_f3){
_f3=_d7.datasets[i].data[j];
}
if(_d7.datasets[i].data[j]<_f4){
_f4=_d7.datasets[i].data[j];
}
}
}
var _f7=Math.floor((_de/(_dd*0.66)));
var _f8=Math.floor((_de/_dd*0.5));
return {maxValue:_f3,minValue:_f4,maxSteps:_f7,minSteps:_f8};
};
};
function calculateOffset(val,_fa,_fb){
var _fc=_fa.steps*_fa.stepValue;
var _fd=val-_fa.graphMin;
var _fe=CapValue(_fd/_fc,1,0);
return (_fb*_fa.steps)*_fe;
};
function animationLoop(_ff,_100,_101,ctx){
var _103=(_ff.animation)?1/CapValue(_ff.animationSteps,Number.MAX_VALUE,1):1,_104=_1a[_ff.animationEasing],_105=(_ff.animation)?0:1;
if(typeof _100!=="function"){
_100=function(){
};
}
requestAnimFrame(animLoop);
function animateFrame(){
var _106=(_ff.animation)?CapValue(_104(_105),null,0):1;
_60(ctx);
if(_ff.scaleOverlay){
_101(_106);
_100();
}else{
_100();
_101(_106);
}
};
function animLoop(){
_105+=_103;
animateFrame();
if(_105<=1){
requestAnimFrame(animLoop);
}else{
if(typeof _ff.onAnimationComplete=="function"){
_ff.onAnimationComplete();
}
}
};
};
function calculateScale(_107,_108,_109,_10a,_10b,_10c){
var _10d,_10e,_10f,_110,_111,_112,_113,_114;
_112=_10a-_10b;
_113=calculateOrderOfMagnitude(_112);
_10d=Math.floor(_10b/(1*Math.pow(10,_113)))*Math.pow(10,_113);
_10e=Math.ceil(_10a/(1*Math.pow(10,_113)))*Math.pow(10,_113);
_10f=_10e-_10d;
_110=Math.pow(10,_113);
_111=Math.round(_10f/_110);
while(_111<_109||_111>_108){
if(_111<_109){
_110/=2;
_111=Math.round(_10f/_110);
}else{
_110*=2;
_111=Math.round(_10f/_110);
}
}
var _115=[];
populateLabels(_10c,_115,_111,_10d,_110);
return {steps:_111,stepValue:_110,graphMin:_10d,labels:_115};
function calculateOrderOfMagnitude(val){
return Math.floor(Math.log(val)/Math.LN10);
};
};
function populateLabels(_117,_118,_119,_11a,_11b){
if(_117){
for(var i=1;i<_119+1;i++){
_118.push(tmpl(_117,{value:(_11a+(_11b*i)).toFixed(getDecimalPlaces(_11b))}));
}
}
};
function Max(_11d){
return Math.max.apply(Math,_11d);
};
function Min(_11e){
return Math.min.apply(Math,_11e);
};
function Default(_11f,_120){
if(!_11f){
return _120;
}else{
return _11f;
}
};
function isNumber(n){
return !isNaN(parseFloat(n))&&isFinite(n);
};
function CapValue(_122,_123,_124){
if(isNumber(_123)){
if(_122>_123){
return _123;
}
}
if(isNumber(_124)){
if(_122<_124){
return _124;
}
}
return _122;
};
function getDecimalPlaces(num){
var _126;
if(num%1!=0){
return num.toString().split(".")[1].length;
}else{
return 0;
}
};
function mergeChartConfig(_127,_128){
var _129={};
for(var _12a in _127){
_129[_12a]=_127[_12a];
}
for(var _12a in _128){
_129[_12a]=_128[_12a];
}
return _129;
};
var _12b={};
function tmpl(str,data){
var fn=!/\W/.test(str)?_12b[str]=_12b[str]||tmpl(document.getElementById(str).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};"+"with(obj){p.push('"+str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
return data?fn(data):fn;
};
};
