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
egl.defineWidget("customJavaScript.widgets","chart2","egl.ui.rui","Widget","div",{"eze$$initializeDOMElement":function(){
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
this.lineChart.labels=_15;
},"setWidth":function(w){
this.eze$$DOMElement.children[0].width=w;
},"setHeight":function(w){
this.eze$$DOMElement.children[0].height=w;
}});
window.Chart=function(_18,_19){
var _1a=this;
var _1b={linear:function(t){
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
return 1-_1b.easeOutBounce(1-t);
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
return _1b.easeInBounce(t*2)*0.5;
}
return _1b.easeOutBounce(t*2-1)*0.5+1*0.5;
}};
this.tooltips=[],defaults={tooltips:{background:"black",fontFamily:"'Arial'",fontStyle:"normal",fontColor:"white",fontSize:"12px",labelTemplate:"<%=label%>: <%=value%>",height:24,padding:{top:4,right:8,bottom:4,left:8},position:"bottom center",offset:{left:0,top:0},border:{width:0,color:"black",radius:4},showShadow:true,shadow:{color:"rgba(0,0,0,0.9)",blur:8,offsetX:0,offsetY:0},showHighlight:true,highlight:{stroke:{width:1,color:"rgba(230,230,230,0.25)"},fill:"rgba(255,255,255,0.25)"}}},_19=(_19)?mergeChartConfig(defaults,_19):defaults;
function registerTooltip(ctx,_48,_49,_4a){
_1a.tooltips.push(new _4b(ctx,_48,_49,_4a));
};
var _4b=function(ctx,_4d,_4e,_4f){
this.ctx=ctx;
this.areaObj=_4d;
this.data=_4e;
this.savedState=null;
this.highlightState=null;
this.x=null;
this.y=null;
this.inRange=function(x,y){
if(this.areaObj.type){
switch(this.areaObj.type){
case "rect":
return (x>=this.areaObj.x&&x<=this.areaObj.x+this.areaObj.width)&&(y>=this.areaObj.y&&y<=this.areaObj.y+this.areaObj.height);
break;
case "circle":
return ((Math.pow(x-this.areaObj.x,2)+Math.pow(y-this.areaObj.y,2))<Math.pow(this.areaObj.r,2));
break;
case "shape":
var _52=this.areaObj.points;
for(var c=false,i=-1,l=_52.length,j=l-1;++i<l;j=i){
((_52[i].y<=y&&y<_52[j].y)||(_52[j].y<=y&&y<_52[i].y))&&(x<(_52[j].x-_52[i].x)*(y-_52[i].y)/(_52[j].y-_52[i].y)+_52[i].x)&&(c=!c);
}
return c;
break;
}
}
};
this.render=function(x,y){
this.ctx.shadowColor=undefined;
this.ctx.shadowBlur=0;
this.ctx.shadowOffsetX=0;
this.ctx.shadowOffsetY=0;
if(this.savedState==null){
this.ctx.putImageData(_1a.savedState,0,0);
this.savedState=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
}
this.ctx.putImageData(this.savedState,0,0);
if(_19.tooltips.showHighlight){
if(this.highlightState==null){
this.ctx.strokeStyle=_19.tooltips.highlight.stroke.color;
this.ctx.lineWidth=_19.tooltips.highlight.stroke.width;
this.ctx.fillStyle=_19.tooltips.highlight.fill;
switch(this.areaObj.type){
case "rect":
this.ctx.strokeRect(this.areaObj.x,this.areaObj.y,this.areaObj.width,this.areaObj.height);
this.ctx.fillStyle=_19.tooltips.highlight.fill;
this.ctx.fillRect(this.areaObj.x,this.areaObj.y,this.areaObj.width,this.areaObj.height);
break;
case "circle":
this.ctx.beginPath();
this.ctx.arc(this.areaObj.x,this.areaObj.y,this.areaObj.r,0,2*Math.PI,false);
this.ctx.stroke();
this.ctx.fill();
break;
case "shape":
this.ctx.beginPath();
this.ctx.moveTo(this.areaObj.points[0].x,this.areaObj.points[0].y);
for(var p in this.areaObj.points){
this.ctx.lineTo(this.areaObj.points[p].x,this.areaObj.points[p].y);
}
this.ctx.stroke();
this.ctx.fill();
break;
}
this.highlightState=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
}else{
this.ctx.putImageData(this.highlightState,0,0);
}
}
var _5a=x+_19.tooltips.offset.left,_5b=y+_19.tooltips.offset.top,tpl=tmpl(_19.tooltips.labelTemplate,this.data),_5d=_19.tooltips.padding.left+this.ctx.measureText(tpl).width+_19.tooltips.padding.right,_5e=_19.tooltips.position.split(" "),_5f=_19.tooltips.height;
if(_19.tooltips.fontSize.match(/[0-9]+(.[0-9]+)?px/)){
_5f=parseInt(_19.tooltips.fontSize);
}else{
if(_19.tooltips.fontSize.match(/[0-9]+(.[0-9]+)?(\%|em)/)){
function getDefaultFontSize(pa){
pa=pa||document.body;
var who=document.createElement("div");
who.style.cssText="display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em";
who.appendChild(document.createTextNode("M"));
pa.appendChild(who);
var fs=[who.offsetWidth,who.offsetHeight];
pa.removeChild(who);
return fs[1];
};
var _63=parseFloat(_19.tooltips.fontSize);
if(_19.tooltips.fontSize.match(/[0-9]+(.[0-9]+)?\%/)){
_63/=100;
}
_5f=_63*getDefaultFontSize(this.ctx.canvas.parentNode);
}
}
_5f+=_19.tooltips.padding.top+_19.tooltips.padding.bottom;
for(var i in _5e){
if(i==0){
if(_5e[i]=="bottom"){
_5b-=_5f;
}else{
if(_5e[i]=="center"){
_5b-=_5f/2;
if(_5e.length==1){
_5a-=_5d/2;
}
}
}
}
if(i==1){
if(_5e[i]=="right"){
_5a-=_5d;
}else{
if(_5e[i]=="center"){
_5a-=_5d/2;
}
}
}
}
if(_5a+_5d>ctx.canvas.width){
_5a-=_5a+_5d-ctx.canvas.width;
}
if(_5a<0){
_5a=0;
}
if(_5b+_5f>ctx.canvas.height){
_5b-=_5b+_5f-ctx.canvas.height;
}
if(_5b<0){
_5b=0;
}
this.ctx.fillStyle=_19.tooltips.background;
if(_19.tooltips.showShadow){
this.ctx.shadowColor=_19.tooltips.shadow.color;
this.ctx.shadowBlur=_19.tooltips.shadow.blur;
this.ctx.shadowOffsetX=_19.tooltips.shadow.offsetX;
this.ctx.shadowOffsetY=_19.tooltips.shadow.offsetY;
}
if(!_19.tooltips.border.radius){
this.ctx.fillRect(_5a,_5b,_5d,_5f);
if(_19.tooltips.border.width>0){
this.ctx.fillStyle=_19.tooltips.border.color;
this.ctx.lineWidth=_19.tooltips.border.width;
this.ctx.strokeRect(_5a,_5b,_5d,_5f);
}
}else{
var _65=_19.tooltips.border.radius>12?12:_19.tooltips.border.radius;
this.ctx.beginPath();
this.ctx.moveTo(_5a+_65,_5b);
this.ctx.lineTo(_5a+_5d-_65,_5b);
this.ctx.quadraticCurveTo(_5a+_5d,_5b,_5a+_5d,_5b+_65);
this.ctx.lineTo(_5a+_5d,_5b+_5f-_65);
this.ctx.quadraticCurveTo(_5a+_5d,_5b+_5f,_5a+_5d-_65,_5b+_5f);
this.ctx.lineTo(_5a+_65,_5b+_5f);
this.ctx.quadraticCurveTo(_5a,_5b+_5f,_5a,_5b+_5f-_65);
this.ctx.lineTo(_5a,_5b+_65);
this.ctx.quadraticCurveTo(_5a,_5b,_5a+_65,_5b);
this.ctx.fill();
if(_19.tooltips.border.width>0){
this.ctx.strokeStyle=_19.tooltips.border.color;
this.ctx.lineWidth=_19.tooltips.border.width;
this.ctx.stroke();
}
this.ctx.closePath();
}
this.ctx.font=_19.tooltips.fontStyle+" "+_19.tooltips.fontSize+" "+_19.tooltips.fontFamily;
this.ctx.fillStyle=_19.tooltips.fontColor;
this.ctx.textAlign="center";
this.ctx.textBaseline="middle";
this.ctx.fillText(tpl,_5a+_5d/2,_5b+_5f/2);
this.x=x;
this.y=y;
};
};
var _66=_18.canvas.width,_67=_18.canvas.height;
this.savedState=null;
function getPosition(e){
var _69=0;
var _6a=0;
while(e){
_69+=(e.offsetLeft+e.clientLeft);
_6a+=(e.offsetTop+e.clientTop);
e=e.offsetParent;
}
if(window.pageXOffset>0||window.pageYOffset>0){
_69-=window.pageXOffset;
_6a-=window.pageYOffset;
}else{
if(document.body.scrollLeft>0||document.body.scrollTop>0){
_69-=document.body.scrollLeft;
_6a-=document.body.scrollTop;
}
}
return {x:_69,y:_6a};
};
function tooltipEventHandler(e){
if(_1a.tooltips.length>0){
_1a.savedState=_1a.savedState==null?_18.getImageData(0,0,_18.canvas.width,_18.canvas.height):_1a.savedState;
var _6c=0;
for(var i in _1a.tooltips){
var _6e=getPosition(_18.canvas),mx=(e.clientX)-_6e.x,my=(e.clientY)-_6e.y;
if(_1a.tooltips[i].inRange(mx,my)){
_1a.tooltips[i].render(mx,my);
_6c++;
}
}
if(_6c==0){
_18.putImageData(_1a.savedState,0,0);
}
}
};
if(window.Touch){
_18.canvas.ontouchstart=function(e){
e.clientX=e.targetTouches[0].clientX;
e.clientY=e.targetTouches[0].clientY;
tooltipEventHandler(e);
};
_18.canvas.ontouchmove=function(e){
e.clientX=e.targetTouches[0].clientX;
e.clientY=e.targetTouches[0].clientY;
tooltipEventHandler(e);
};
}else{
_18.canvas.onmousemove=function(e){
tooltipEventHandler(e);
};
}
_18.canvas.onmouseout=function(e){
if(_1a.savedState!=null){
_18.putImageData(_1a.savedState,0,0);
}
};
if(window.devicePixelRatio){
_18.canvas.style.width=_66+"px";
_18.canvas.style.height=_67+"px";
_18.canvas.height=_67*window.devicePixelRatio;
_18.canvas.width=_66*window.devicePixelRatio;
_18.scale(window.devicePixelRatio,window.devicePixelRatio);
}
this.PolarArea=function(_75,_76){
_1a.PolarArea.defaults={scaleOverlay:true,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:true,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:true,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null,showTooltips:true};
var _77=(_76)?mergeChartConfig(_1a.PolarArea.defaults,_76):_1a.PolarArea.defaults;
return new _78(_75,_77,_18);
};
this.Radar=function(_79,_7a){
_1a.Radar.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:true,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:false,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:true,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:true,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:true,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null,showTooltips:true};
var _7b=(_7a)?mergeChartConfig(_1a.Radar.defaults,_7a):_1a.Radar.defaults;
return new _7c(_79,_7b,_18);
};
this.Pie=function(_7d,_7e){
_1a.Pie.defaults={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null,labelFontFamily:"'Arial'",labelFontStyle:"normal",labelFontSize:12,labelFontColor:"#666",labelAlign:"right",showTooltips:true};
var _7f=(_7e)?mergeChartConfig(_1a.Pie.defaults,_7e):_1a.Pie.defaults;
return new Pie(_7d,_7f,_18);
};
this.Doughnut=function(_81,_82){
_1a.Doughnut.defaults={segmentShowStroke:true,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animation:true,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:true,animateScale:false,onAnimationComplete:null,showTooltips:true};
var _83=(_82)?mergeChartConfig(_1a.Doughnut.defaults,_82):_1a.Doughnut.defaults;
return new _84(_81,_83,_18);
};
this.Line=function(_85,_86){
_1a.Line.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:true,pointDot:true,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:true,datasetStrokeWidth:2,datasetFill:true,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null,showTooltips:true};
var _87=(_86)?mergeChartConfig(_1a.Line.defaults,_86):_1a.Line.defaults;
return new _88(_85,_87,_18);
};
this.Bar=function(_89,_8a){
_1a.Bar.defaults={scaleOverlay:false,scaleOverride:false,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:true,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:true,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:true,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:true,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null,showTooltips:true};
var _8b=(_8a)?mergeChartConfig(_1a.Bar.defaults,_8a):_1a.Bar.defaults;
return new Bar(_89,_8b,_18);
};
var _8d=function(c){
c.clearRect(0,0,_66,_67);
};
var _78=function(_8f,_90,ctx){
var _92,_93,_94,_95,_96,_97,_98;
calculateDrawingSizes();
_97=getValueBounds();
_98=(_90.scaleShowLabels)?_90.scaleLabel:null;
if(!_90.scaleOverride){
_94=calculateScale(_96,_97.maxSteps,_97.minSteps,_97.maxValue,_97.minValue,_98);
}else{
_94={steps:_90.scaleSteps,stepValue:_90.scaleStepWidth,graphMin:_90.scaleStartValue,labels:[]};
populateLabels(_98,_94.labels,_94.steps,_90.scaleStartValue,_90.scaleStepWidth);
}
_93=_92/(_94.steps);
animationLoop(_90,drawScale,drawAllSegments,ctx);
function calculateDrawingSizes(){
_92=(Min([_66,_67])/2);
_92-=Max([_90.scaleFontSize*0.5,_90.scaleLineWidth*0.5]);
_95=_90.scaleFontSize*2;
if(_90.scaleShowLabelBackdrop){
_95+=(2*_90.scaleBackdropPaddingY);
_92-=_90.scaleBackdropPaddingY*1.5;
}
_96=_92;
_95=Default(_95,5);
};
function drawScale(){
for(var i=0;i<_94.steps;i++){
if(_90.scaleShowLine){
ctx.beginPath();
ctx.arc(_66/2,_67/2,_93*(i+1),0,(Math.PI*2),true);
ctx.strokeStyle=_90.scaleLineColor;
ctx.lineWidth=_90.scaleLineWidth;
ctx.stroke();
}
if(_90.scaleShowLabels){
ctx.textAlign="center";
ctx.font=_90.scaleFontStyle+" "+_90.scaleFontSize+"px "+_90.scaleFontFamily;
var _9a=_94.labels[i];
if(_90.scaleShowLabelBackdrop){
var _9b=ctx.measureText(_9a).width;
ctx.fillStyle=_90.scaleBackdropColor;
ctx.beginPath();
ctx.rect(Math.round(_66/2-_9b/2-_90.scaleBackdropPaddingX),Math.round(_67/2-(_93*(i+1))-_90.scaleFontSize*0.5-_90.scaleBackdropPaddingY),Math.round(_9b+(_90.scaleBackdropPaddingX*2)),Math.round(_90.scaleFontSize+(_90.scaleBackdropPaddingY*2)));
ctx.fill();
}
ctx.textBaseline="middle";
ctx.fillStyle=_90.scaleFontColor;
ctx.fillText(_9a,_66/2,_67/2-(_93*(i+1)));
}
}
};
function drawAllSegments(_9c){
var _9d=-Math.PI/2,_9e=(Math.PI*2)/_8f.length,_9f=1,_a0=1;
if(_90.animation){
if(_90.animateScale){
_9f=_9c;
}
if(_90.animateRotate){
_a0=_9c;
}
}
for(var i=0;i<_8f.length;i++){
ctx.beginPath();
ctx.arc(_66/2,_67/2,_9f*calculateOffset(_8f[i].value,_94,_93),_9d,_9d+_a0*_9e,false);
ctx.lineTo(_66/2,_67/2);
ctx.closePath();
ctx.fillStyle=_8f[i].color;
ctx.fill();
if(_9c>=1&&_90.showTooltips){
var _a2=[{x:_66/2,y:_67/2}],_a3=50,_a4=calculateOffset(_8f[i].value,_94,_93);
_a2.push({x:_66/2+_a4*Math.cos(_9d),y:_67/2+_a4*Math.sin(_9d)});
for(var p=0;p<=_a3;p++){
_a2.push({x:_66/2+_a4*Math.cos(_9d+p/_a3*_a0*_9e),y:_67/2+_a4*Math.sin(_9d+p/_a3*_a0*_9e)});
}
registerTooltip(ctx,{type:"shape",points:_a2},{label:_8f[i].label,value:_8f[i].value},"PolarArea");
}
if(_90.segmentShowStroke){
ctx.strokeStyle=_90.segmentStrokeColor;
ctx.lineWidth=_90.segmentStrokeWidth;
ctx.stroke();
}
_9d+=_a0*_9e;
}
};
function getValueBounds(){
var _a6=Number.MIN_VALUE;
var _a7=Number.MAX_VALUE;
for(var i=0;i<_8f.length;i++){
if(_8f[i].value>_a6){
_a6=_8f[i].value;
}
if(_8f[i].value<_a7){
_a7=_8f[i].value;
}
}
var _a9=Math.floor((_96/(_95*0.66)));
var _aa=Math.floor((_96/_95*0.5));
return {maxValue:_a6,minValue:_a7,maxSteps:_a9,minSteps:_aa};
};
};
var _7c=function(_ab,_ac,ctx){
var _ae,_af,_b0,_b1,_b2,_b3,_b4;
if(!_ab.labels){
_ab.labels=[];
}
calculateDrawingSizes();
var _b3=getValueBounds();
_b4=(_ac.scaleShowLabels)?_ac.scaleLabel:null;
if(!_ac.scaleOverride){
_b0=calculateScale(_b2,_b3.maxSteps,_b3.minSteps,_b3.maxValue,_b3.minValue,_b4);
}else{
_b0={steps:_ac.scaleSteps,stepValue:_ac.scaleStepWidth,graphMin:_ac.scaleStartValue,labels:[]};
populateLabels(_b4,_b0.labels,_b0.steps,_ac.scaleStartValue,_ac.scaleStepWidth);
}
_af=_ae/(_b0.steps);
animationLoop(_ac,drawScale,drawAllDataPoints,ctx);
function drawAllDataPoints(_b5){
var _b6=(2*Math.PI)/_ab.datasets[0].data.length;
ctx.save();
ctx.translate(_66/2,_67/2);
for(var i=0;i<_ab.datasets.length;i++){
var _b8=calculateOffset(_ab.datasets[i].data[0],_b0,_af);
ctx.beginPath();
ctx.moveTo(0,_b5*(-1*_b8));
if(_b5>=1&&_ac.showTooltips){
var _b9=_66/2+_b8*Math.cos(0-Math.PI/2),_ba=_67/2+_b8*Math.sin(0-Math.PI/2),_bb=_ac.pointDot?_ac.pointDotRadius+_ac.pointDotStrokeWidth:10,_bc=_ab.labels[0].trim()!=""?_ab.labels[0]+": "+_ab.datasets[i].data[0]:_ab.datasets[i].data[0];
registerTooltip(ctx,{type:"circle",x:_b9,y:_ba,r:_bb},{label:_ab.labels[0],value:_ab.datasets[i].data[0]},"Radar");
}
for(var j=1;j<_ab.datasets[i].data.length;j++){
_b8=calculateOffset(_ab.datasets[i].data[j],_b0,_af);
ctx.rotate(_b6);
ctx.lineTo(0,_b5*(-1*_b8));
if(_b5>=1&&_ac.showTooltips){
var _b9=_66/2+_b8*Math.cos(j*_b6-Math.PI/2),_ba=_67/2+_b8*Math.sin(j*_b6-Math.PI/2),_bb=_ac.pointDot?_ac.pointDotRadius+_ac.pointDotStrokeWidth:10,_bc=_ab.labels[j].trim()!=""?_ab.labels[j]+": "+_ab.datasets[i].data[j]:_ab.datasets[i].data[j];
registerTooltip(ctx,{type:"circle",x:_b9,y:_ba,r:_bb},{label:_ab.labels[j],value:_ab.datasets[i].data[j]},"Radar");
}
}
ctx.closePath();
ctx.fillStyle=_ab.datasets[i].fillColor;
ctx.strokeStyle=_ab.datasets[i].strokeColor;
ctx.lineWidth=_ac.datasetStrokeWidth;
ctx.fill();
ctx.stroke();
if(_ac.pointDot){
ctx.fillStyle=_ab.datasets[i].pointColor;
ctx.strokeStyle=_ab.datasets[i].pointStrokeColor;
ctx.lineWidth=_ac.pointDotStrokeWidth;
for(var k=0;k<_ab.datasets[i].data.length;k++){
ctx.rotate(_b6);
ctx.beginPath();
ctx.arc(0,_b5*(-1*calculateOffset(_ab.datasets[i].data[k],_b0,_af)),_ac.pointDotRadius,2*Math.PI,false);
ctx.fill();
ctx.stroke();
}
}
ctx.rotate(_b6);
}
ctx.restore();
};
function drawScale(){
var _bf=(2*Math.PI)/_ab.datasets[0].data.length;
ctx.save();
ctx.translate(_66/2,_67/2);
if(_ac.angleShowLineOut){
ctx.strokeStyle=_ac.angleLineColor;
ctx.lineWidth=_ac.angleLineWidth;
for(var h=0;h<_ab.datasets[0].data.length;h++){
ctx.rotate(_bf);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(0,-_ae);
ctx.stroke();
}
}
for(var i=0;i<_b0.steps;i++){
ctx.beginPath();
if(_ac.scaleShowLine){
ctx.strokeStyle=_ac.scaleLineColor;
ctx.lineWidth=_ac.scaleLineWidth;
ctx.moveTo(0,-_af*(i+1));
for(var j=0;j<_ab.datasets[0].data.length;j++){
ctx.rotate(_bf);
ctx.lineTo(0,-_af*(i+1));
}
ctx.closePath();
ctx.stroke();
}
if(_ac.scaleShowLabels){
ctx.textAlign="center";
ctx.font=_ac.scaleFontStyle+" "+_ac.scaleFontSize+"px "+_ac.scaleFontFamily;
ctx.textBaseline="middle";
if(_ac.scaleShowLabelBackdrop){
var _c3=ctx.measureText(_b0.labels[i]).width;
ctx.fillStyle=_ac.scaleBackdropColor;
ctx.beginPath();
ctx.rect(Math.round(-_c3/2-_ac.scaleBackdropPaddingX),Math.round((-_af*(i+1))-_ac.scaleFontSize*0.5-_ac.scaleBackdropPaddingY),Math.round(_c3+(_ac.scaleBackdropPaddingX*2)),Math.round(_ac.scaleFontSize+(_ac.scaleBackdropPaddingY*2)));
ctx.fill();
}
ctx.fillStyle=_ac.scaleFontColor;
ctx.fillText(_b0.labels[i],0,-_af*(i+1));
}
}
for(var k=0;k<_ab.labels.length;k++){
ctx.font=_ac.pointLabelFontStyle+" "+_ac.pointLabelFontSize+"px "+_ac.pointLabelFontFamily;
ctx.fillStyle=_ac.pointLabelFontColor;
var _c5=Math.sin(_bf*k)*(_ae+_ac.pointLabelFontSize);
var _c6=Math.cos(_bf*k)*(_ae+_ac.pointLabelFontSize);
if(_bf*k==Math.PI||_bf*k==0){
ctx.textAlign="center";
}else{
if(_bf*k>Math.PI){
ctx.textAlign="right";
}else{
ctx.textAlign="left";
}
}
ctx.textBaseline="middle";
ctx.fillText(_ab.labels[k],_c5,-_c6);
}
ctx.restore();
};
function calculateDrawingSizes(){
_ae=(Min([_66,_67])/2);
_b1=_ac.scaleFontSize*2;
var _c7=0;
for(var i=0;i<_ab.labels.length;i++){
ctx.font=_ac.pointLabelFontStyle+" "+_ac.pointLabelFontSize+"px "+_ac.pointLabelFontFamily;
var _c9=ctx.measureText(_ab.labels[i]).width;
if(_c9>_c7){
_c7=_c9;
}
}
_ae-=Max([_c7,((_ac.pointLabelFontSize/2)*1.5)]);
_ae-=_ac.pointLabelFontSize;
_ae=CapValue(_ae,null,0);
_b2=_ae;
_b1=Default(_b1,5);
};
function getValueBounds(){
var _ca=Number.MIN_VALUE;
var _cb=Number.MAX_VALUE;
for(var i=0;i<_ab.datasets.length;i++){
for(var j=0;j<_ab.datasets[i].data.length;j++){
if(_ab.datasets[i].data[j]>_ca){
_ca=_ab.datasets[i].data[j];
}
if(_ab.datasets[i].data[j]<_cb){
_cb=_ab.datasets[i].data[j];
}
}
}
var _ce=Math.floor((_b2/(_b1*0.66)));
var _cf=Math.floor((_b2/_b1*0.5));
return {maxValue:_ca,minValue:_cb,maxSteps:_ce,minSteps:_cf};
};
};
var Pie=function(_d0,_d1,ctx){
var _d3=0;
var _d4=Min([_67/2,_66/2])-5;
for(var i=0;i<_d0.length;i++){
_d3+=_d0[i].value;
}
ctx.fillStyle="black";
ctx.textBaseline="base";
animationLoop(_d1,null,drawPieSegments,ctx);
function drawPieSegments(_d6){
var _d7=-Math.PI/2,_d8=1,_d9=1;
if(_d1.animation){
if(_d1.animateScale){
_d8=_d6;
}
if(_d1.animateRotate){
_d9=_d6;
}
}
for(var i=0;i<_d0.length;i++){
var _db=_d9*((_d0[i].value/_d3)*(Math.PI*2));
ctx.beginPath();
ctx.arc(_66/2,_67/2,_d8*_d4,_d7,_d7+_db);
ctx.lineTo(_66/2,_67/2);
ctx.closePath();
ctx.fillStyle=_d0[i].color;
ctx.fill();
if(_d0[i].label&&_d8*_d4*2*_db/(2*Math.PI)>_d1.labelFontSize){
function getPieLabelX(_dc,r){
switch(_dc){
case "left":
return -r+20;
break;
case "center":
return -r/2;
break;
}
return -10;
};
function reversePieLabelAlign(_de){
switch(_de){
case "left":
return "right";
break;
case "right":
return "left";
break;
case "center":
return _de;
break;
}
};
var _df=_d0[i].labelFontSize||_d1.labelFontSize+"px";
if(_df.match(/^[0-9]+$/g)!=null){
_df=_df+"px";
}
ctx.font=_d1.labelFontStyle+" "+_df+" "+_d1.labelFontFamily;
ctx.fillStyle=getFadeColor(_d6,_d0[i].labelColor||"black",_d0[i].color);
ctx.textBaseline="middle";
var _e0=-(_d7+_db)+_db/2,tX=_66/2+_d8*_d4*Math.cos(_e0),tY=_67/2-_d8*_d4*Math.sin(_e0);
ctx.textAlign=_d0[i].labelAlign||_d1.labelAlign;
textX=getPieLabelX(ctx.textAlign,_d8*_d4);
if(_e0<-Math.PI/2){
_e0-=Math.PI;
ctx.textAlign=reversePieLabelAlign(ctx.textAlign);
textX=-textX;
}
ctx.translate(tX,tY);
ctx.rotate(-_e0);
ctx.fillText(_d0[i].label,textX,0);
ctx.rotate(_e0);
ctx.translate(-tX,-tY);
}
if(_d6>=1&&_d1.showTooltips){
var _e3=[{x:_66/2,y:_67/2}],_e4=50;
_e3.push({x:_66/2+_d4*Math.cos(_d7),y:_67/2+_d4*Math.sin(_d7)});
for(var p=0;p<=_e4;p++){
_e3.push({x:_66/2+_d4*Math.cos(_d7+p/_e4*_db),y:_67/2+_d4*Math.sin(_d7+p/_e4*_db)});
}
registerTooltip(ctx,{type:"shape",points:_e3},{label:_d0[i].label,value:_d0[i].value},"Pie");
}
if(_d1.segmentShowStroke){
ctx.lineWidth=_d1.segmentStrokeWidth;
ctx.strokeStyle=_d1.segmentStrokeColor;
ctx.stroke();
}
_d7+=_db;
}
};
};
var _84=function(_e6,_e7,ctx){
var _e9=0;
var _ea=Min([_67/2,_66/2])-5;
var _eb=_ea*(_e7.percentageInnerCutout/100);
for(var i=0;i<_e6.length;i++){
_e9+=_e6[i].value;
}
animationLoop(_e7,null,drawPieSegments,ctx);
function drawPieSegments(_ed){
var _ee=-Math.PI/2,_ef=1,_f0=1;
if(_e7.animation){
if(_e7.animateScale){
_ef=_ed;
}
if(_e7.animateRotate){
_f0=_ed;
}
}
for(var i=0;i<_e6.length;i++){
var _f2=_f0*((_e6[i].value/_e9)*(Math.PI*2));
ctx.beginPath();
ctx.arc(_66/2,_67/2,_ef*_ea,_ee,_ee+_f2,false);
ctx.arc(_66/2,_67/2,_ef*_eb,_ee+_f2,_ee,true);
ctx.closePath();
ctx.fillStyle=_e6[i].color;
ctx.fill();
if(_ed>=1&&_e7.showTooltips){
var _f3=[],_f4=50;
_f3.push({x:_66/2+_ea*Math.cos(_ee),y:_67/2+_ea*Math.sin(_ee)});
for(var p=0;p<=_f4;p++){
_f3.push({x:_66/2+_ea*Math.cos(_ee+p/_f4*_f2),y:_67/2+_ea*Math.sin(_ee+p/_f4*_f2)});
}
_f3.push({x:_66/2+_eb*Math.cos(_ee+_f2),y:_67/2+_eb*Math.sin(_ee+_f2)});
for(var p=_f4;p>=0;p--){
_f3.push({x:_66/2+_eb*Math.cos(_ee+p/_f4*_f2),y:_67/2+_eb*Math.sin(_ee+p/_f4*_f2)});
}
registerTooltip(ctx,{type:"shape",points:_f3},{label:_e6[i].label,value:_e6[i].value},"Doughnut");
}
if(_e7.segmentShowStroke){
ctx.lineWidth=_e7.segmentStrokeWidth;
ctx.strokeStyle=_e7.segmentStrokeColor;
ctx.stroke();
}
_ee+=_f2;
}
};
};
var _88=function(_f6,_f7,ctx){
var _f9,_fa,_fb,_fc,_fd,_fe,_ff,_100,_101,_102,_103,_104,_105=0;
calculateDrawingSizes();
_fe=getValueBounds();
_ff=(_f7.scaleShowLabels)?_f7.scaleLabel:"";
if(!_f7.scaleOverride){
_fb=calculateScale(_fd,_fe.maxSteps,_fe.minSteps,_fe.maxValue,_fe.minValue,_ff);
}else{
_fb={steps:_f7.scaleSteps,stepValue:_f7.scaleStepWidth,graphMin:_f7.scaleStartValue,labels:[]};
populateLabels(_ff,_fb.labels,_fb.steps,_f7.scaleStartValue,_f7.scaleStepWidth);
}
_fa=Math.floor(_fd/_fb.steps);
calculateXAxisSize();
animationLoop(_f7,drawScale,drawLines,ctx);
function drawLines(_106){
for(var i=0;i<_f6.datasets.length;i++){
ctx.strokeStyle=_f6.datasets[i].strokeColor;
ctx.lineWidth=_f7.datasetStrokeWidth;
ctx.beginPath();
ctx.moveTo(_103,_104-_106*(calculateOffset(_f6.datasets[i].data[0],_fb,_fa)));
for(var j=1;j<_f6.datasets[i].data.length;j++){
if(_f7.bezierCurve){
ctx.bezierCurveTo(xPos(j-0.5),yPos(i,j-1),xPos(j-0.5),yPos(i,j),xPos(j),yPos(i,j));
}else{
ctx.lineTo(xPos(j),yPos(i,j));
}
}
var _109=_f7.pointDot?_f7.pointDotRadius+_f7.pointDotStrokeWidth:10;
for(var j=0;j<_f6.datasets[i].data.length;j++){
if(_106>=1&&_f7.showTooltips){
registerTooltip(ctx,{type:"circle",x:xPos(j),y:yPos(i,j),r:_109},{label:_f6.labels[j],value:_f6.datasets[i].data[j]},"Line");
}
}
ctx.stroke();
if(_f7.datasetFill){
ctx.lineTo(_103+(_100*(_f6.datasets[i].data.length-1)),_104);
ctx.lineTo(_103,_104);
ctx.closePath();
ctx.fillStyle=_f6.datasets[i].fillColor;
ctx.fill();
}else{
ctx.closePath();
}
if(_f7.pointDot){
ctx.fillStyle=_f6.datasets[i].pointColor;
ctx.strokeStyle=_f6.datasets[i].pointStrokeColor;
ctx.lineWidth=_f7.pointDotStrokeWidth;
for(var k=0;k<_f6.datasets[i].data.length;k++){
ctx.beginPath();
ctx.arc(_103+(_100*k),_104-_106*(calculateOffset(_f6.datasets[i].data[k],_fb,_fa)),_f7.pointDotRadius,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
}
}
}
function yPos(_10b,_10c){
return _104-_106*(calculateOffset(_f6.datasets[_10b].data[_10c],_fb,_fa));
};
function xPos(_10d){
return _103+(_100*_10d);
};
};
function drawScale(){
ctx.lineWidth=_f7.scaleLineWidth;
ctx.strokeStyle=_f7.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_66-_101/2+5,_104);
ctx.lineTo(_66-(_101/2)-_102-5,_104);
ctx.stroke();
if(_105>0){
ctx.save();
ctx.textAlign="right";
}else{
ctx.textAlign="center";
}
ctx.fillStyle=_f7.scaleFontColor;
for(var i=0;i<_f6.labels.length;i++){
ctx.save();
if(_105>0){
ctx.translate(_103+i*_100,_104+_f7.scaleFontSize);
ctx.rotate(-(_105*(Math.PI/180)));
ctx.fillText(_f6.labels[i],0,0);
ctx.restore();
}else{
ctx.fillText(_f6.labels[i],_103+i*_100,_104+_f7.scaleFontSize+3);
}
ctx.beginPath();
ctx.moveTo(_103+i*_100,_104+3);
if(_f7.scaleShowGridLines&&i>0){
ctx.lineWidth=_f7.scaleGridLineWidth;
ctx.strokeStyle=_f7.scaleGridLineColor;
ctx.lineTo(_103+i*_100,5);
}else{
ctx.lineTo(_103+i*_100,_104+3);
}
ctx.stroke();
}
ctx.lineWidth=_f7.scaleLineWidth;
ctx.strokeStyle=_f7.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_103,_104+5);
ctx.lineTo(_103,5);
ctx.stroke();
ctx.textAlign="right";
ctx.textBaseline="middle";
for(var j=0;j<_fb.steps;j++){
ctx.beginPath();
ctx.moveTo(_103-3,_104-((j+1)*_fa));
if(_f7.scaleShowGridLines){
ctx.lineWidth=_f7.scaleGridLineWidth;
ctx.strokeStyle=_f7.scaleGridLineColor;
ctx.lineTo(_103+_102+5,_104-((j+1)*_fa));
}else{
ctx.lineTo(_103-0.5,_104-((j+1)*_fa));
}
ctx.stroke();
if(_f7.scaleShowLabels){
ctx.fillText(_fb.labels[j],_103-8,_104-((j+1)*_fa));
}
}
};
function calculateXAxisSize(){
var _110=1;
if(_f7.scaleShowLabels){
ctx.font=_f7.scaleFontStyle+" "+_f7.scaleFontSize+"px "+_f7.scaleFontFamily;
for(var i=0;i<_fb.labels.length;i++){
var _112=ctx.measureText(_fb.labels[i]).width;
_110=(_112>_110)?_112:_110;
}
_110+=10;
}
_102=_66-_110-_101;
_100=Math.floor(_102/(_f6.labels.length-1));
_103=_66-_101/2-_102;
_104=_fd+_f7.scaleFontSize/2;
};
function calculateDrawingSizes(){
_f9=_67;
ctx.font=_f7.scaleFontStyle+" "+_f7.scaleFontSize+"px "+_f7.scaleFontFamily;
_101=1;
for(var i=0;i<_f6.labels.length;i++){
var _114=ctx.measureText(_f6.labels[i]).width;
_101=(_114>_101)?_114:_101;
}
if(_66/_f6.labels.length<_101){
_105=45;
if(_66/_f6.labels.length<Math.cos(_105)*_101){
_105=90;
_f9-=_101;
}else{
_f9-=Math.sin(_105)*_101;
}
}else{
_f9-=_f7.scaleFontSize;
}
_f9-=5;
_fc=_f7.scaleFontSize;
_f9-=_fc;
_fd=_f9;
};
function getValueBounds(){
var _115=Number.MIN_VALUE;
var _116=Number.MAX_VALUE;
for(var i=0;i<_f6.datasets.length;i++){
for(var j=0;j<_f6.datasets[i].data.length;j++){
if(_f6.datasets[i].data[j]>_115){
_115=_f6.datasets[i].data[j];
}
if(_f6.datasets[i].data[j]<_116){
_116=_f6.datasets[i].data[j];
}
}
}
var _119=Math.floor((_fd/(_fc*0.66)));
var _11a=Math.floor((_fd/_fc*0.5));
return {maxValue:_115,minValue:_116,maxSteps:_119,minSteps:_11a};
};
};
var Bar=function(data,_11c,ctx){
var _11e,_11f,_120,_121,_122,_123,_124,_125,_126,_127,_128,_129,_12a,_12b=0;
calculateDrawingSizes();
_123=getValueBounds();
_124=(_11c.scaleShowLabels)?_11c.scaleLabel:"";
if(!_11c.scaleOverride){
_120=calculateScale(_122,_123.maxSteps,_123.minSteps,_123.maxValue,_123.minValue,_124);
}else{
_120={steps:_11c.scaleSteps,stepValue:_11c.scaleStepWidth,graphMin:_11c.scaleStartValue,labels:[]};
populateLabels(_124,_120.labels,_120.steps,_11c.scaleStartValue,_11c.scaleStepWidth);
}
_11f=Math.floor(_122/_120.steps);
calculateXAxisSize();
animationLoop(_11c,drawScale,drawBars,ctx);
function drawBars(_12c){
ctx.lineWidth=_11c.barStrokeWidth;
for(var i=0;i<data.datasets.length;i++){
ctx.fillStyle=data.datasets[i].fillColor;
ctx.strokeStyle=data.datasets[i].strokeColor;
for(var j=0;j<data.datasets[i].data.length;j++){
var _12f=_128+_11c.barValueSpacing+_125*j+_12a*i+_11c.barDatasetSpacing*i+_11c.barStrokeWidth*i;
ctx.beginPath();
ctx.moveTo(_12f,_129);
ctx.lineTo(_12f,_129-_12c*calculateOffset(data.datasets[i].data[j],_120,_11f)+(_11c.barStrokeWidth/2));
ctx.lineTo(_12f+_12a,_129-_12c*calculateOffset(data.datasets[i].data[j],_120,_11f)+(_11c.barStrokeWidth/2));
ctx.lineTo(_12f+_12a,_129);
if(_11c.barShowStroke){
ctx.stroke();
}
ctx.closePath();
ctx.fill();
if(_12c>=1&&_11c.showTooltips){
var x=_12f,_67=calculateOffset(data.datasets[i].data[j],_120,_11f),y=_129-_67,_66=_12a;
registerTooltip(ctx,{type:"rect",x:x,y:y,width:_66,height:_67},{label:data.labels[j],value:data.datasets[i].data[j]},"Bar");
}
}
}
};
function drawScale(){
ctx.lineWidth=_11c.scaleLineWidth;
ctx.strokeStyle=_11c.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_66-_126/2+5,_129);
ctx.lineTo(_66-(_126/2)-_127-5,_129);
ctx.stroke();
if(_12b>0){
ctx.save();
ctx.textAlign="right";
}else{
ctx.textAlign="center";
}
ctx.fillStyle=_11c.scaleFontColor;
for(var i=0;i<data.labels.length;i++){
ctx.save();
if(_12b>0){
ctx.translate(_128+i*_125,_129+_11c.scaleFontSize);
ctx.rotate(-(_12b*(Math.PI/180)));
ctx.fillText(data.labels[i],0,0);
ctx.restore();
}else{
ctx.fillText(data.labels[i],_128+i*_125+_125/2,_129+_11c.scaleFontSize+3);
}
ctx.beginPath();
ctx.moveTo(_128+(i+1)*_125,_129+3);
ctx.lineWidth=_11c.scaleGridLineWidth;
ctx.strokeStyle=_11c.scaleGridLineColor;
ctx.lineTo(_128+(i+1)*_125,5);
ctx.stroke();
}
ctx.lineWidth=_11c.scaleLineWidth;
ctx.strokeStyle=_11c.scaleLineColor;
ctx.beginPath();
ctx.moveTo(_128,_129+5);
ctx.lineTo(_128,5);
ctx.stroke();
ctx.textAlign="right";
ctx.textBaseline="middle";
for(var j=0;j<_120.steps;j++){
ctx.beginPath();
ctx.moveTo(_128-3,_129-((j+1)*_11f));
if(_11c.scaleShowGridLines){
ctx.lineWidth=_11c.scaleGridLineWidth;
ctx.strokeStyle=_11c.scaleGridLineColor;
ctx.lineTo(_128+_127+5,_129-((j+1)*_11f));
}else{
ctx.lineTo(_128-0.5,_129-((j+1)*_11f));
}
ctx.stroke();
if(_11c.scaleShowLabels){
ctx.fillText(_120.labels[j],_128-8,_129-((j+1)*_11f));
}
}
};
function calculateXAxisSize(){
var _134=1;
if(_11c.scaleShowLabels){
ctx.font=_11c.scaleFontStyle+" "+_11c.scaleFontSize+"px "+_11c.scaleFontFamily;
for(var i=0;i<_120.labels.length;i++){
var _136=ctx.measureText(_120.labels[i]).width;
_134=(_136>_134)?_136:_134;
}
_134+=10;
}
_127=_66-_134-_126;
_125=Math.floor(_127/(data.labels.length));
_12a=(_125-_11c.scaleGridLineWidth*2-(_11c.barValueSpacing*2)-(_11c.barDatasetSpacing*data.datasets.length-1)-((_11c.barStrokeWidth/2)*data.datasets.length-1))/data.datasets.length;
_128=_66-_126/2-_127;
_129=_122+_11c.scaleFontSize/2;
};
function calculateDrawingSizes(){
_11e=_67;
ctx.font=_11c.scaleFontStyle+" "+_11c.scaleFontSize+"px "+_11c.scaleFontFamily;
_126=1;
for(var i=0;i<data.labels.length;i++){
var _138=ctx.measureText(data.labels[i]).width;
_126=(_138>_126)?_138:_126;
}
if(_66/data.labels.length<_126){
_12b=45;
if(_66/data.labels.length<Math.cos(_12b)*_126){
_12b=90;
_11e-=_126;
}else{
_11e-=Math.sin(_12b)*_126;
}
}else{
_11e-=_11c.scaleFontSize;
}
_11e-=5;
_121=_11c.scaleFontSize;
_11e-=_121;
_122=_11e;
};
function getValueBounds(){
var _139=Number.MIN_VALUE;
var _13a=Number.MAX_VALUE;
for(var i=0;i<data.datasets.length;i++){
for(var j=0;j<data.datasets[i].data.length;j++){
if(data.datasets[i].data[j]>_139){
_139=data.datasets[i].data[j];
}
if(data.datasets[i].data[j]<_13a){
_13a=data.datasets[i].data[j];
}
}
}
var _13d=Math.floor((_122/(_121*0.66)));
var _13e=Math.floor((_122/_121*0.5));
return {maxValue:_139,minValue:_13a,maxSteps:_13d,minSteps:_13e};
};
};
function calculateOffset(val,_140,_141){
var _142=_140.steps*_140.stepValue;
var _143=val-_140.graphMin;
var _144=CapValue(_143/_142,1,0);
return (_141*_140.steps)*_144;
};
function animationLoop(_145,_146,_147,ctx){
var _149=(_145.animation)?1/CapValue(_145.animationSteps,Number.MAX_VALUE,1):1,_14a=_1b[_145.animationEasing],_14b=(_145.animation)?0:1;
if(typeof _146!=="function"){
_146=function(){
};
}
requestAnimFrame(animLoop);
function animateFrame(){
var _14c=(_145.animation)?CapValue(_14a(_14b),null,0):1;
_8d(ctx);
if(_145.scaleOverlay){
_147(_14c);
_146();
}else{
_146();
_147(_14c);
}
};
function animLoop(){
_14b+=_149;
animateFrame();
if(_14b<=1){
_14d(animLoop);
}else{
if(typeof _145.onAnimationComplete=="function"){
_145.onAnimationComplete();
}
}
};
};
var _14d=(function(){
return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(_14e){
window.setTimeout(_14e,1000/60);
};
})();
function calculateScale(_14f,_150,_151,_152,_153,_154){
var _155,_156,_157,_158,_159,_15a,_15b,_15c;
_15a=_152-_153;
_15b=calculateOrderOfMagnitude(_15a);
_155=Math.floor(_153/(1*Math.pow(10,_15b)))*Math.pow(10,_15b);
_156=Math.ceil(_152/(1*Math.pow(10,_15b)))*Math.pow(10,_15b);
_157=_156-_155;
_158=Math.pow(10,_15b);
_159=Math.round(_157/_158);
while(_159<_151||_159>_150){
if(_159<_151){
_158/=2;
_159=Math.round(_157/_158);
}else{
_158*=2;
_159=Math.round(_157/_158);
}
}
var _15d=[];
populateLabels(_154,_15d,_159,_155,_158);
return {steps:_159,stepValue:_158,graphMin:_155,labels:_15d};
function calculateOrderOfMagnitude(val){
return Math.floor(Math.log(val)/Math.LN10);
};
};
function populateLabels(_15f,_160,_161,_162,_163){
if(_15f){
for(var i=1;i<_161+1;i++){
_160.push(tmpl(_15f,{value:(_162+(_163*i)).toFixed(getDecimalPlaces(_163))}));
}
}
};
function populateLabels(_165,_166,_167,_168,_169){
if(_165){
for(var i=1;i<_167+1;i++){
_166.push(tmpl(_165,{value:(_168+(_169*i)).toFixed(getDecimalPlaces(_169))}));
}
}
};
function Max(_16b){
return Math.max.apply(Math,_16b);
};
function Min(_16c){
return Math.min.apply(Math,_16c);
};
function Default(_16d,_16e){
if(!_16d){
return _16e;
}else{
return _16d;
}
};
function isNumber(n){
return !isNaN(parseFloat(n))&&isFinite(n);
};
function CapValue(_170,_171,_172){
if(isNumber(_171)){
if(_170>_171){
return _171;
}
}
if(isNumber(_172)){
if(_170<_172){
return _172;
}
}
return _170;
};
function getDecimalPlaces(num){
var _174;
if(num%1!=0){
return num.toString().split(".")[1].length;
}else{
return 0;
}
};
function mergeChartConfig(_175,_176){
var _177={};
for(var _178 in _175){
_177[_178]=_175[_178];
}
for(var _178 in _176){
if(typeof (_176[_178])==="object"&&_175[_178]){
_177[_178]=mergeChartConfig(_175[_178],_176[_178]);
}else{
_177[_178]=_176[_178];
}
}
return _177;
};
var _179={};
function tmpl(str,data){
var fn=!/\W/.test(str)?_179[str]=_179[str]||tmpl(document.getElementById(str).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};"+"with(obj){p.push('"+str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
return data?fn(data):fn;
};
function getFadeColor(_17d,_17e,_17f){
var _180=document.createElement("div"),_181,_182;
_180.style.color=_17e;
document.body.appendChild(_180);
_181=window.getComputedStyle(_180).color;
_180.style.color=_17f;
_182=window.getComputedStyle(_180).color;
var _183=/rgb *\( *([0-9]{1,3}) *, *([0-9]{1,3}) *, *([0-9]{1,3}) *\)/,_184=_183.exec(_181),_185=_183.exec(_182),rP=Math.round(parseFloat(_184[1])),gP=Math.round(parseFloat(_184[2])),bP=Math.round(parseFloat(_184[3])),rS=Math.round(parseFloat(_185[1])),gS=Math.round(parseFloat(_185[2])),bS=Math.round(parseFloat(_185[3])),rCur=parseInt((rP-rS)*_17d+rS),gCur=parseInt((gP-gS)*_17d+gS),bCur=parseInt((bP-bS)*_17d+bS);
_180.parentNode.removeChild(_180);
return "rgb("+rCur+","+gCur+","+bCur+")";
};
};
