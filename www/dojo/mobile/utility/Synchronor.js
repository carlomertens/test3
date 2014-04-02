define(["dojo/_base/declare"],function(_1){
_1("SynMapItem",null,{"increment":function(){
if(!this._incremented&&this._synitem){
++this._synitem._current;
this._incremented=true;
}
},"trigger":function(){
this._synitem&&this._synitem.trigger();
},"constructor":function(_2){
this._incremented=false;
this._synitem=null;
if(_2["SynItem"]){
this._synitem=_2["SynItem"];
}else{
console.error("ERROR: Options for synchronor map item is not complete.");
}
}});
_1("SynItem",null,{"trigger":function(){
if(!this._triggered&&this._expected===this._current){
this._callback();
this._triggered=true;
}
},"constructor":function(_3){
this._current=0;
this._expected=-1;
this._callback=null;
this._flag="";
this._triggered=false;
if(_3["current"]!=undefined&&_3["expected"]!=undefined&&_3["callback"]&&_3["flag"]){
this._current=_3["current"];
this._expected=_3["expected"];
this._callback=_3["callback"];
this._flag=_3["flag"];
}else{
console.error("ERROR: Options for synchronor item is not complete.");
}
}});
_1("Synchronor",null,{"constructor":function(){
this._synID=0;
this._synmap={};
},"wait":function(_4,_5,_6){
if(!_4||!_4.length||(_4.length&&_4.length==0)){
_6();
return;
}
var _7=_4.length;
var _8=0;
var _9=new SynItem({"current":_8,"expected":_7,"flag":_5,"callback":_6});
for(var i=0;i<_4.length;++i){
if(!_4[i]||!(_4[i] instanceof egl.dojo.mobile.widgets.DojoMobileBase)){
_9._current++;
continue;
}
if(!_4[i]["__SYNID__"]){
_4[i]["__SYNID__"]=++this._synID;
}
if(this._synmap[_4[i]["__SYNID__"]]){
this._synmap[_4[i]["__SYNID__"]].push(new SynMapItem({"SynItem":_9}));
}else{
this._synmap[_4[i]["__SYNID__"]]=[new SynMapItem({"SynItem":_9})];
}
if(_4[i][_5]){
_9._current++;
}else{
_4[i][_5]=false;
}
}
_9.trigger();
},"trigger":function(_b,_c){
if(_b&&_c){
_b[_c]=true;
}
if(_b["__SYNID__"]){
var _d=this._synmap[_b["__SYNID__"]];
if(_d&&_d.length){
for(var i=0;i<_d.length;++i){
var _f=_d[i];
if(_c){
if(_c==_f._synitem["_flag"]){
_f.increment();
_f.trigger();
}
}else{
if(_b[_f._synitem["_flag"]]){
_f.increment();
_f.trigger();
}
}
}
}
}
}});
var _10=new Synchronor();
return _10;
});
