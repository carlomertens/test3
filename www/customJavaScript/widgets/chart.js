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
},"showAsLineGraph":function(){
var _9=new Chart(this.canvas_.getContext("2d")).Line(this.ChartWidget);
},"showAsBarGraph":function(){
var _a=new Chart(this.canvas_.getContext("2d")).Bar(this.ChartWidget);
},"showAsPie":function(){
var _b=new Chart(this.canvas_.getContext("2d")).Pie(this.PieWidget);
},"showAsDoughnut":function(){
var _c=new Chart(this.canvas_.getContext("2d")).Doughnut(this.PieWidget);
},"showAsPolarArea":function(){
var _d=new Chart(this.canvas_.getContext("2d")).PolarArea(this.PieWidget);
},"showAsRadar":function(){
var _e=new Chart(this.canvas_.getContext("2d")).Radar(this.ChartWidget);
},"setLabels":function(_f){
this.lineChart.labels=_f;
},"setWidth":function(w){
this.eze$$DOMElement.children[0].width=w;
},"setHeight":function(w){
this.eze$$DOMElement.children[0].height=w;
}});
window.Chart=function(_12){
var _13=this;
var _14={linear:function(t){
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
return 1-_14.easeOutBounce(1-t);
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
return _14.easeInBounce(t*2)*0.5;
}
return _14.easeOutBounce(t*2-1)*0.5+1*0.5;
}};
var _40=_12.canvas.width;
var _41=_12.canvas.height;
if(window.devicePixelRatio){
_12.canvas.style.width=_40+"px";
_12.canvas.style.height=_41+"px";
_12.canvas.height=_41*window.devicePixelRatio;
_12.canvas.width=_40*window.devicePixelRatio;
_12.scale(window.devicePixelRatio,window.devicePixelRatio);
}
this.PolarArea=function(_42,_43){
_13.PolarArea.defaults={scaleOverlay:true,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:true,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:true,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null};
var _44=(_43)?mergeChartConfig(_13.PolarArea.defaults,_43):_13.PolarArea.defaults;
return new _45(_42,_44,_12);
};
this.Radar=function(_46,_47){
_13.Radar.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:true,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:false,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:true,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:true,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:true,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};
var _48=(_47)?mergeChartConfig(_13.Radar.defaults,_47):_13.Radar.defaults;
return new _49(_46,_48,_12);
};
this.Pie=function(_4a,_4b){
_13.Pie.defaults={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null};
var _4c=(_4b)?mergeChartConfig(_13.Pie.defaults,_4b):_13.Pie.defaults;
return new Pie(_4a,_4c,_12);
};
this.Doughnut=function(_4e,_4f){
_13.Doughnut.defaults={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null};
var _50=(_4f)?mergeChartConfig(_13.Doughnut.defaults,_4f):_13.Doughnut.defaults;
return new _51(_4e,_50,_12);
};
this.Line=function(_52,_53){
_13.Line.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:true,pointDot:true,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};
var _54=(_53)?mergeChartConfig(_13.Line.defaults,_53):_13.Line.defaults;
return new _55(_52,_54,_12);
};
this.Bar=function(_56,_57){
_13.Bar.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:true,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null};
var _58=(_57)?mergeChartConfig(_13.Bar.defaults,_57):_13.Bar.defaults;
return new Bar(_56,_58,_12);
};
var _5a=function(c){
c.clearRect(0,0,_40,_41);
};
var _45=function(_5c,_5d,ctx){
var _5f,_60,_61,_62,_63,_64,_65;
calculateDrawingSizes();
_64=getValueBounds();
_65=(_5d.scaleShowLabels)?_5d.scaleLabel:null;
if(!_5d.scaleOverride){
_61=calculateScale(_63,_64.maxSteps,_64.minSteps,_64.maxValue,_64.minValue,_65);
}else{
_61={steps:_5d.scaleSteps,stepValue:_5d.scaleStepWidth,graphMin:_5d.scaleStartValue,labels:[]};
populateLabels(_65,_61.labels,_61.steps,_5d.scaleStartValue,_5d.scaleStepWidth);
}
_60=_5f/(_61.steps);
animationLoop(_5d,drawScale,drawAllSegments,ctx);
function calculateDrawingSizes(){
_5f=(Min([_40,_41])/2);
_5f-=Max([_5d.scaleFontSize*0.5,_5d.scaleLineWidth*0.5]);
_62=_5d.scaleFontSize*2;
if(_5d.scaleShowLabelBackdrop){
_62+=(2*_5d.scaleBackdropPaddingY);
_5f-=_5d.scaleBackdropPaddingY*1.5;
}
_63=_5f;
_62=Default(_62,5);
};
function drawScale(){
for(var i=0;i<_61.steps;i++){
if(_5d.scaleShowLine){
ctx.beginPath();
ctx.arc(_40/2,_41/2,_60*(i+1),0,(Math.PI*2),true);
ctx.strokeStyle=_5d.scaleLineColor;
ctx.lineWidth=_5d.scaleLineWidth;
ctx.stroke();
}
if(_5d.scaleShowLabels){
ctx.textAlign="center";
ctx.font=_5d.scaleFontStyle+" "+_5d.scaleFontSize+"px "+_5d.scaleFontFamily;
var _67=_61.labels[i];
if(_5d.scaleShowLabelBackdrop){
var _68=ctx.measureText(_67).width;
ctx.fillStyle=_5d.scaleBackdropColor;
ctx.beginPath();
ctx.rect(Math.round(_40/2-_68/2-_5d.scaleBackdropPaddingX),Math.round(_41/2-(_60*(i+1))-_5d.scaleFontSize*0.5-_5d.scaleBackdropPaddingY),Math.round(_68+(_5d.scaleBackdropPaddingX*2)),Math.round(_5d.scaleFontSize+(_5d.scaleBackdropPaddingY*2)));
ctx.fill();
}
ctx.textBaseline="middle";
ctx.fillStyle=_5d.scaleFontColor;
ctx.fillText(_67,_40/2,_41/2-(_60*(i+1)));
}
}
};
function drawAllSegments(_69){
var _6a=-Math.PI/2,_6b=(Math.PI*2)/_5c.length,_6c=1,_6d=1;
if(_5d.animation){
if(_5d.animateScale){
_6c=_69;
}
if(_5d.animateRotate){
_6d=_69;
}
}
for(var i=0;i<_5c.length;i++){
ctx.beginPath();
ctx.arc(_40/2,_41/2,_6c*calculateOffset(_5c[i].value,_61,_60),_6a,_6a+_6d*_6b,false);
ctx.lineTo(_40/2,_41/2);
ctx.closePath();
ctx.fillStyle=_5c[i].color;
ctx.fill();
if(_5d.segmentShowStroke){
ctx.strokeStyle=_5d.segmentStrokeColor;
ctx.lineWidth=_5d.segmentStrokeWidth;
ctx.stroke();
}
_6a+=_6d*_6b;
}
};
function getValueBounds(){
var _6f=Number.MIN_VALUE;
var _70=Number.MAX_VALUE;
for(var i=0;i<_5c.length;i++){
if(_5c[i].value>_6f){
_6f=_5c[i].value;
}
if(_5c[i].value<_70){
_70=_5c[i].value;
}
}
var _72=Math.floor((_63/(_62*0.66)));
var _73=Math.floor((_63/_62*0.5));
return {maxValue:_6f,minValue:_70,maxSteps:_72,minSteps:_73};
};
};
var _49=function(_74,_75,ctx){
var _77,_78,_79,_7a,_7b,_7c,_7d;
if(!_74.labels){
_74.labels=[];
}
calculateDrawingSizes();
var _7c=getValueBounds();
_7d=(_75.scaleShowLabels)?_75.scaleLabel:null;
if(!_75.scaleOverride){
_79=calculateScale(_7b,_7c.maxSteps,_7c.minSteps,_7c.maxValue,_7c.minValue,_7d);
}else{
_79={steps:_75.scaleSteps,stepValue:_75.scaleStepWidth,graphMin:_75.scaleStartValue,labels:[]};
populateLabels(_7d,_79.labels,_79.steps,_75.scaleStartValue,_75.scaleStepWidth);
}
_78=_77/(_79.steps);
animationLoop(_75,drawScale,drawAllDataPoints,ctx);
function drawAllDataPoints(_7e){
var _7f=(2*Math.PI)/_74.datasets[0].data.length;
ctx.save();
ctx.translate(_40/2,_41/2);
for(var i=0;i<_74.datasets.length;i++){
ctx.beginPath();
ctx.moveTo(0,_7e*(-1*calculateOffset(_74.datasets[i].data[0],_79,_78)));
for(var j=1;j<_74.datasets[i].data.length;j++){
ctx.rotate(_7f);
ctx.lineTo(0,_7e*(-1*calculateOffset(_74.datasets[i].data[j],_79,_78)));
}
ctx.closePath();
ctx.fillStyle=_74.datasets[i].fillColor;
ctx.strokeStyle=_74.datasets[i].strokeColor;
ctx.lineWidth=_75.datasetStrokeWidth;
ctx.fill();
ctx.stroke();
if(_75.pointDot){
ctx.fillStyle=_74.datasets[i].pointColor;
ctx.strokeStyle=_74.datasets[i].pointStrokeColor;
ctx.lineWidth=_75.pointDotStrokeWidth;
for(var k=0;k<_74.datasets[i].data.length;k++){
ctx.rotate(_7f);
ctx.beginPath();
ctx.arc(0,_7e*(-1*calculateOffset(_74.datasets[i].data[k],_79,_78)),_75.pointDotRadius,2*Math.PI,false);
ctx.fill();
ctx.stroke();
}
}
ctx.rotate(_7f);
}
ctx.restore();
};
function drawScale(){
var _83=(2*Math.PI)/_74.datasets[0].data.length;
ctx.save();
ctx.translate(_40/2,_41/2);
if(_75.angleShowLineOut){
ctx.strokeStyle=_75.angleLineColor;
ctx.lineWidth=_75.angleLineWidth;
for(var h=0;h<_74.datasets[0].data.length;h++){
ctx.rotate(_83);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,-_77);
ctx.stroke();
}
}
for(var i=0;i<_79.steps;i++){
ctx.beginPath();
if(_75.scaleShowLine){
ctx.strokeStyle=_75.scaleLineColor;
ctx.lineWidth=_75.scaleLineWidth;
ctx.moveTo(0,-_78*(i+1));
for(var j=0;j<_74.datasets[0].data.length;j++){
ctx.rotate(_83);
ctx.lineTo(0,-_78*(i+1));
}
ctx.closePath();
ctx.stroke();
}
if(_75.scaleShowLabels){
ctx.textAlign="center";
ctx.font=_75.scaleFontStyle+" "+_75.scaleFontSize+"px "+_75.scaleFontFamily;
ctx.textBaseline="middle";
if(_75.scaleShowLabelBackdrop){
var _87=ctx.measureText(_79.labels[i]).width;
ctx.fillStyle=_75.scaleBackdropColor;
ctx.beginPath();
ctx.rect(Math.round(-_87/2-_75.scaleBackdropPaddingX),Math.round((-_78*(i+1))-_75.scaleFontSize*0.5-_75.scaleBackdropPaddingY),Math.round(_87+(_75.scaleBackdropPaddingX*2)),Math.round(_75.scaleFontSize+(_75.scaleBackdropPaddingY*2)));
ctx.fill();
}
ctx.fillStyle=_75.scaleFontColor;
ctx.fillText(_79.labels[i],0,-_78*(i+1));
}
}
for(var k=0;k<_74.labels.length;k++){
ctx.font=_75.pointLabelFontStyle+" "+_75.pointLabelFontSize+"px "+_75.pointLabelFontFamily;
ctx.fillStyle=_75.pointLabelFontColor;
var _89=Math.sin(_83*k)*(_77+_75.pointLabelFontSize);
var _8a=Math.cos(_83*k)*(_77+_75.pointLabelFontSize);
if(_83*k==Math.PI||_83*k==0){
ctx.textAlign="center";
}else{
if(_83*k>Math.PI){
ctx.textAlign="right";
}else{
ctx.textAlign="left";
}
}
ctx.textBaseline="middle";
ctx.fillText(_74.labels[k],_89,-_8a);
}
ctx.restore();
};
function calculateDrawingSizes(){
_77=(Min([_40,_41])/2);
_7a=_75.scaleFontSize*2;
var _8b=0;
for(var i=0;i<_74.labels.length;i++){
ctx.font=_75.pointLabelFontStyle+" "+_75.pointLabelFontSize+"px "+_75.pointLabelFontFamily;
var _8d=ctx.measureText(_74.labels[i]).width;
if(_8d>_8b){
_8b=_8d;
}
}
_77-=Max([_8b,((_75.pointLabelFontSize/2)*1.5)]);
_77-=_75.pointLabelFontSize;
_77=CapValue(_77,null,0);
_7b=_77;
_7a=Default(_7a,5);
};
function getValueBounds(){
var _8e=Number.MIN_VALUE;
var _8f=Number.MAX_VALUE;
for(var i=0;i<_74.datasets.length;i++){
for(var j=0;j<_74.datasets[i].data.length;j++){
if(_74.datasets[i].data[j]>_8e){
_8e=_74.datasets[i].data[j];
}
if(_74.datasets[i].data[j]<_8f){
_8f=_74.datasets[i].data[j];
}
}
}
var _92=Math.floor((_7b/(_7a*0.66)));
var _93=Math.floor((_7b/_7a*0.5));
return {maxValue:_8e,minValue:_8f,maxSteps:_92,minSteps:_93};
};
};
var Pie=function(_94,_95,ctx){
var _97=0;
var _98=Min([_41/2,_40/2])-5;
for(var i=0;i<_94.length;i++){
_97+=_94[i].value;
}
animationLoop(_95,null,drawPieSegments,ctx);
function drawPieSegments(_9a){
var _9b=-Math.PI/2,_9c=1,_9d=1;
if(_95.animation){
if(_95.animateScale){
_9c=_9a;
}
if(_95.animateRotate){
_9d=_9a;
}
}
for(var i=0;i<_94.length;i++){
var _9f=_9d*((_94[i].value/_97)*(Math.PI*2));
ctx.beginPath();
ctx.arc(_40/2,_41/2,_9c*_98,_9b,_9b+_9f);
ctx.lineTo(_40/2,_41/2);
ctx.closePath();
ctx.fillStyle=_94[i].color;
ctx.fill();
if(_95.segmentShowStroke){
ctx.lineWidth=_95.segmentStrokeWidth;
ctx.strokeStyle=_95.segmentStrokeColor;
ctx.stroke();
}
_9b+=_9f;
}
};
};
var _51=function(_a0,_a1,ctx){
var _a3=0;
var _a4=Min([_41/2,_40/2])-5;
var _a5=_a4*(_a1.percentageInnerCutout/100);
for(var i=0;i<_a0.length;i++){
_a3+=_a0[i].value;
}
animationLoop(_a1,null,drawPieSegments,ctx);
function drawPieSegments(_a7){
var _a8=-Math.PI/2,_a9=1,_aa=1;
if(_a1.animation){
if(_a1.animateScale){
_a9=_a7;
}
if(_a1.animateRotate){
_aa=_a7;
}
}
for(var i=0;i<_a0.length;i++){
var _ac=_aa*((_a0[i].value/_a3)*(Math.PI*2));
ctx.beginPath();
ctx.arc(_40/2,_41/2,_a9*_a4,_a8,_a8+_ac,false);
ctx.arc(_40/2,_41/2,_a9*_a5,_a8+_ac,_a8,true);
ctx.closePath();
ctx.fillStyle=_a0[i].color;
ctx.fill();
if(_a1.segmentShowStroke){
ctx.lineWidth=_a1.segmentStrokeWidth;
ctx.strokeStyle=_a1.segmentStrokeColor;
ctx.stroke();
}
_a8+=_ac;
}
};
};
var _55=function(_ad,_ae,ctx){
var _b0,_b1,_b2,_b3,_b4,_b5,_b6,_b7,_b8,_b9,_ba,_bb,_bc=0;
calculateDrawingSizes();
_b5=getValueBounds();
_b6=(_ae.scaleShowLabels)?_ae.scaleLabel:"";
if(!_ae.scaleOverride){
_b2=calculateScale(_b4,_b5.maxSteps,_b5.minSteps,_b5.maxValue,_b5.minValue,_b6);
}else{
_b2={steps:_ae.scaleSteps,stepValue:_ae.scaleStepWidth,graphMin:_ae.scaleStartValue,labels:[]};
populateLabels(_b6,_b2.labels,_b2.steps,_ae.scaleStartValue,_ae.scaleStepWidth);
}
_b1=Math.floor(_b4/_b2.steps);
calculateXAxisSize();
animationLoop(_ae,drawScale,drawLines,ctx);
function drawLines(_bd){
for(var i=0;i<_ad.datasets.length;i++){
ctx.strokeStyle=_ad.datasets[i].strokeColor;
ctx.lineWidth=_ae.datasetStrokeWidth;
ctx.beginPath();
ctx.moveTo(_ba,_bb-_bd*(calculateOffset(_ad.datasets[i].data[0],_b2,_b1)));
for(var j=1;j<_ad.datasets[i].data.length;j++){
if(_ae.bezierCurve){
ctx.bezierCurveTo(xPos(j-0.5),yPos(i,j-1),xPos(j-0.5),yPos(i,j),xPos(j),yPos(i,j));
}else{
ctx.lineTo(xPos(j),yPos(i,j));
}
}
ctx.stroke();
if(_ae.datasetFill){
ctx.lineTo(_ba+(_b7*(_ad.datasets[i].data.length-1)),_bb);
ctx.lineTo(_ba,_bb);
ctx.closePath();
ctx.fillStyle=_ad.datasets[i].fillColor;
ctx.fill();
}else{
ctx.closePath();
}
if(_ae.pointDot){
ctx.fillStyle=_ad.datasets[i].pointColor;
ctx.strokeStyle=_ad.datasets[i].pointStrokeColor;
ctx.lineWidth=_ae.pointDotStrokeWidth;
for(var k=0;k<_ad.datasets[i].data.length;k++){
ctx.beginPath();
ctx.arc(_ba+(_b7*k),_bb-_bd*(calculateOffset(_ad.datasets[i].data[k],_b2,_b1)),_ae.pointDotRadius,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
}
}
}
function yPos(_c1,_c2){
return _bb-_bd*(calculateOffset(_ad.datasets[_c1].data[_c2],_b2,_b1));
};
function xPos(_c3){
return _ba+(_b7*_c3);
};
};
function drawScale(){
ctx.lineWidth=_ae.scaleLineWidth;
ctx.strokeStyle=_ae.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_40-_b8/2+5,_bb);
ctx.lineTo(_40-(_b8/2)-_b9-5,_bb);
ctx.stroke();
if(_bc>0){
ctx.save();
ctx.textAlign="right";
}else{
ctx.textAlign="center";
}
ctx.fillStyle=_ae.scaleFontColor;
for(var i=0;i<_ad.labels.length;i++){
ctx.save();
if(_bc>0){
ctx.translate(_ba+i*_b7,_bb+_ae.scaleFontSize);
ctx.rotate(-(_bc*(Math.PI/180)));
ctx.fillText(_ad.labels[i],0,0);
ctx.restore();
}else{
ctx.fillText(_ad.labels[i],_ba+i*_b7,_bb+_ae.scaleFontSize+3);
}
ctx.beginPath();
ctx.moveTo(_ba+i*_b7,_bb+3);
if(_ae.scaleShowGridLines&&i>0){
ctx.lineWidth=_ae.scaleGridLineWidth;
ctx.strokeStyle=_ae.scaleGridLineColor;
ctx.lineTo(_ba+i*_b7,5);
}else{
ctx.lineTo(_ba+i*_b7,_bb+3);
}
ctx.stroke();
}
ctx.lineWidth=_ae.scaleLineWidth;
ctx.strokeStyle=_ae.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_ba,_bb+5);
ctx.lineTo(_ba,5);
ctx.stroke();
ctx.textAlign="right";
ctx.textBaseline="middle";
for(var j=0;j<_b2.steps;j++){
ctx.beginPath();
ctx.moveTo(_ba-3,_bb-((j+1)*_b1));
if(_ae.scaleShowGridLines){
ctx.lineWidth=_ae.scaleGridLineWidth;
ctx.strokeStyle=_ae.scaleGridLineColor;
ctx.lineTo(_ba+_b9+5,_bb-((j+1)*_b1));
}else{
ctx.lineTo(_ba-0.5,_bb-((j+1)*_b1));
}
ctx.stroke();
if(_ae.scaleShowLabels){
ctx.fillText(_b2.labels[j],_ba-8,_bb-((j+1)*_b1));
}
}
};
function calculateXAxisSize(){
var _c6=1;
if(_ae.scaleShowLabels){
ctx.font=_ae.scaleFontStyle+" "+_ae.scaleFontSize+"px "+_ae.scaleFontFamily;
for(var i=0;i<_b2.labels.length;i++){
var _c8=ctx.measureText(_b2.labels[i]).width;
_c6=(_c8>_c6)?_c8:_c6;
}
_c6+=10;
}
_b9=_40-_c6-_b8;
_b7=Math.floor(_b9/(_ad.labels.length-1));
_ba=_40-_b8/2-_b9;
_bb=_b4+_ae.scaleFontSize/2;
};
function calculateDrawingSizes(){
_b0=_41;
ctx.font=_ae.scaleFontStyle+" "+_ae.scaleFontSize+"px "+_ae.scaleFontFamily;
_b8=1;
for(var i=0;i<_ad.labels.length;i++){
var _ca=ctx.measureText(_ad.labels[i]).width;
_b8=(_ca>_b8)?_ca:_b8;
}
if(_40/_ad.labels.length<_b8){
_bc=45;
if(_40/_ad.labels.length<Math.cos(_bc)*_b8){
_bc=90;
_b0-=_b8;
}else{
_b0-=Math.sin(_bc)*_b8;
}
}else{
_b0-=_ae.scaleFontSize;
}
_b0-=5;
_b3=_ae.scaleFontSize;
_b0-=_b3;
_b4=_b0;
};
function getValueBounds(){
var _cb=Number.MIN_VALUE;
var _cc=Number.MAX_VALUE;
for(var i=0;i<_ad.datasets.length;i++){
for(var j=0;j<_ad.datasets[i].data.length;j++){
if(_ad.datasets[i].data[j]>_cb){
_cb=_ad.datasets[i].data[j];
}
if(_ad.datasets[i].data[j]<_cc){
_cc=_ad.datasets[i].data[j];
}
}
}
var _cf=Math.floor((_b4/(_b3*0.66)));
var _d0=Math.floor((_b4/_b3*0.5));
return {maxValue:_cb,minValue:_cc,maxSteps:_cf,minSteps:_d0};
};
};
var Bar=function(_d1,_d2,ctx){
var _d4,_d5,_d6,_d7,_d8,_d9,_da,_db,_dc,_dd,_de,_df,_e0,_e1=0;
calculateDrawingSizes();
_d9=getValueBounds();
_da=(_d2.scaleShowLabels)?_d2.scaleLabel:"";
if(!_d2.scaleOverride){
_d6=calculateScale(_d8,_d9.maxSteps,_d9.minSteps,_d9.maxValue,_d9.minValue,_da);
}else{
_d6={steps:_d2.scaleSteps,stepValue:_d2.scaleStepWidth,graphMin:_d2.scaleStartValue,labels:[]};
populateLabels(_da,_d6.labels,_d6.steps,_d2.scaleStartValue,_d2.scaleStepWidth);
}
_d5=Math.floor(_d8/_d6.steps);
calculateXAxisSize();
animationLoop(_d2,drawScale,drawBars,ctx);
function drawBars(_e2){
ctx.lineWidth=_d2.barStrokeWidth;
for(var i=0;i<_d1.datasets.length;i++){
ctx.fillStyle=_d1.datasets[i].fillColor;
ctx.strokeStyle=_d1.datasets[i].strokeColor;
for(var j=0;j<_d1.datasets[i].data.length;j++){
var _e5=_de+_d2.barValueSpacing+_db*j+_e0*i+_d2.barDatasetSpacing*i+_d2.barStrokeWidth*i;
ctx.beginPath();
ctx.moveTo(_e5,_df);
ctx.lineTo(_e5,_df-_e2*calculateOffset(_d1.datasets[i].data[j],_d6,_d5)+(_d2.barStrokeWidth/2));
ctx.lineTo(_e5+_e0,_df-_e2*calculateOffset(_d1.datasets[i].data[j],_d6,_d5)+(_d2.barStrokeWidth/2));
ctx.lineTo(_e5+_e0,_df);
if(_d2.barShowStroke){
ctx.stroke();
}
ctx.closePath();
ctx.fill();
}
}
};
function drawScale(){
ctx.lineWidth=_d2.scaleLineWidth;
ctx.strokeStyle=_d2.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_40-_dc/2+5,_df);
ctx.lineTo(_40-(_dc/2)-_dd-5,_df);
ctx.stroke();
if(_e1>0){
ctx.save();
ctx.textAlign="right";
}else{
ctx.textAlign="center";
}
ctx.fillStyle=_d2.scaleFontColor;
for(var i=0;i<_d1.labels.length;i++){
ctx.save();
if(_e1>0){
ctx.translate(_de+i*_db,_df+_d2.scaleFontSize);
ctx.rotate(-(_e1*(Math.PI/180)));
ctx.fillText(_d1.labels[i],0,0);
ctx.restore();
}else{
ctx.fillText(_d1.labels[i],_de+i*_db+_db/2,_df+_d2.scaleFontSize+3);
}
ctx.beginPath();
ctx.moveTo(_de+(i+1)*_db,_df+3);
ctx.lineWidth=_d2.scaleGridLineWidth;
ctx.strokeStyle=_d2.scaleGridLineColor;
ctx.lineTo(_de+(i+1)*_db,5);
ctx.stroke();
}
ctx.lineWidth=_d2.scaleLineWidth;
ctx.strokeStyle=_d2.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_de,_df+5);
ctx.lineTo(_de,5);
ctx.stroke();
ctx.textAlign="right";
ctx.textBaseline="middle";
for(var j=0;j<_d6.steps;j++){
ctx.beginPath();
ctx.moveTo(_de-3,_df-((j+1)*_d5));
if(_d2.scaleShowGridLines){
ctx.lineWidth=_d2.scaleGridLineWidth;
ctx.strokeStyle=_d2.scaleGridLineColor;
ctx.lineTo(_de+_dd+5,_df-((j+1)*_d5));
}else{
ctx.lineTo(_de-0.5,_df-((j+1)*_d5));
}
ctx.stroke();
if(_d2.scaleShowLabels){
ctx.fillText(_d6.labels[j],_de-8,_df-((j+1)*_d5));
}
}
};
function calculateXAxisSize(){
var _e8=1;
if(_d2.scaleShowLabels){
ctx.font=_d2.scaleFontStyle+" "+_d2.scaleFontSize+"px "+_d2.scaleFontFamily;
for(var i=0;i<_d6.labels.length;i++){
var _ea=ctx.measureText(_d6.labels[i]).width;
_e8=(_ea>_e8)?_ea:_e8;
}
_e8+=10;
}
_dd=_40-_e8-_dc;
_db=Math.floor(_dd/(_d1.labels.length));
_e0=(_db-_d2.scaleGridLineWidth*2-(_d2.barValueSpacing*2)-(_d2.barDatasetSpacing*_d1.datasets.length-1)-((_d2.barStrokeWidth/2)*_d1.datasets.length-1))/_d1.datasets.length;
_de=_40-_dc/2-_dd;
_df=_d8+_d2.scaleFontSize/2;
};
function calculateDrawingSizes(){
_d4=_41;
ctx.font=_d2.scaleFontStyle+" "+_d2.scaleFontSize+"px "+_d2.scaleFontFamily;
_dc=1;
for(var i=0;i<_d1.labels.length;i++){
var _ec=ctx.measureText(_d1.labels[i]).width;
_dc=(_ec>_dc)?_ec:_dc;
}
if(_40/_d1.labels.length<_dc){
_e1=45;
if(_40/_d1.labels.length<Math.cos(_e1)*_dc){
_e1=90;
_d4-=_dc;
}else{
_d4-=Math.sin(_e1)*_dc;
}
}else{
_d4-=_d2.scaleFontSize;
}
_d4-=5;
_d7=_d2.scaleFontSize;
_d4-=_d7;
_d8=_d4;
};
function getValueBounds(){
var _ed=Number.MIN_VALUE;
var _ee=Number.MAX_VALUE;
for(var i=0;i<_d1.datasets.length;i++){
for(var j=0;j<_d1.datasets[i].data.length;j++){
if(_d1.datasets[i].data[j]>_ed){
_ed=_d1.datasets[i].data[j];
}
if(_d1.datasets[i].data[j]<_ee){
_ee=_d1.datasets[i].data[j];
}
}
}
var _f1=Math.floor((_d8/(_d7*0.66)));
var _f2=Math.floor((_d8/_d7*0.5));
return {maxValue:_ed,minValue:_ee,maxSteps:_f1,minSteps:_f2};
};
};
function calculateOffset(val,_f4,_f5){
var _f6=_f4.steps*_f4.stepValue;
var _f7=val-_f4.graphMin;
var _f8=CapValue(_f7/_f6,1,0);
return (_f5*_f4.steps)*_f8;
};
function animationLoop(_f9,_fa,_fb,ctx){
var _fd=(_f9.animation)?1/CapValue(_f9.animationSteps,Number.MAX_VALUE,1):1,_fe=_14[_f9.animationEasing],_ff=(_f9.animation)?0:1;
if(typeof _fa!=="function"){
_fa=function(){
};
}
requestAnimFrame(animLoop);
function animateFrame(){
var _100=(_f9.animation)?CapValue(_fe(_ff),null,0):1;
_5a(ctx);
if(_f9.scaleOverlay){
_fb(_100);
_fa();
}else{
_fa();
_fb(_100);
}
};
function animLoop(){
_ff+=_fd;
animateFrame();
if(_ff<=1){
requestAnimFrame(animLoop);
}else{
if(typeof _f9.onAnimationComplete=="function"){
_f9.onAnimationComplete();
}
}
};
};
function calculateScale(_101,_102,_103,_104,_105,_106){
var _107,_108,_109,_10a,_10b,_10c,_10d,_10e;
_10c=_104-_105;
_10d=calculateOrderOfMagnitude(_10c);
_107=Math.floor(_105/(1*Math.pow(10,_10d)))*Math.pow(10,_10d);
_108=Math.ceil(_104/(1*Math.pow(10,_10d)))*Math.pow(10,_10d);
_109=_108-_107;
_10a=Math.pow(10,_10d);
_10b=Math.round(_109/_10a);
while(_10b<_103||_10b>_102){
if(_10b<_103){
_10a/=2;
_10b=Math.round(_109/_10a);
}else{
_10a*=2;
_10b=Math.round(_109/_10a);
}
}
var _10f=[];
populateLabels(_106,_10f,_10b,_107,_10a);
return {steps:_10b,stepValue:_10a,graphMin:_107,labels:_10f};
function calculateOrderOfMagnitude(val){
return Math.floor(Math.log(val)/Math.LN10);
};
};
function populateLabels(_111,_112,_113,_114,_115){
if(_111){
for(var i=1;i<_113+1;i++){
_112.push(tmpl(_111,{value:(_114+(_115*i)).toFixed(getDecimalPlaces(_115))}));
}
}
};
function Max(_117){
return Math.max.apply(Math,_117);
};
function Min(_118){
return Math.min.apply(Math,_118);
};
function Default(_119,_11a){
if(!_119){
return _11a;
}else{
return _119;
}
};
function isNumber(n){
return !isNaN(parseFloat(n))&&isFinite(n);
};
function CapValue(_11c,_11d,_11e){
if(isNumber(_11d)){
if(_11c>_11d){
return _11d;
}
}
if(isNumber(_11e)){
if(_11c<_11e){
return _11e;
}
}
return _11c;
};
function getDecimalPlaces(num){
var _120;
if(num%1!=0){
return num.toString().split(".")[1].length;
}else{
return 0;
}
};
function mergeChartConfig(_121,_122){
var _123={};
for(var _124 in _121){
_123[_124]=_121[_124];
}
for(var _124 in _122){
_123[_124]=_122[_124];
}
return _123;
};
var _125={};
function tmpl(str,data){
var fn=!/\W/.test(str)?_125[str]=_125[str]||tmpl(document.getElementById(str).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};"+"with(obj){p.push('"+str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
return data?fn(data):fn;
};
};
