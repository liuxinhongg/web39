//得到所有的按钮
var oTu=document.getElementById("tu");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var btn4=document.getElementById("btn4");
var btn5=document.getElementById("btn5");
var btn6=document.getElementById("btn6");
var btn7=document.getElementById("btn7");
var btn8=document.getElementById("btn8");
//全局的变量  ，可以叫“信号量”
var nowleft=100;
var nowtop=100;
btn1.onclick=function(){
	nowleft-=10;
	nowtop-=10;
	move()
}
btn2.onclick=function(){
	nowtop-=10;
	move()
}
btn3.onclick=function(){
	nowleft+=10;
	nowtop-=10;
	move()
}
btn4.onclick=function(){
	nowleft-=10;
	move()
}
btn5.onclick=function(){
	nowleft+=10;
	move()
}
btn6.onclick=function(){
	nowleft-=10;
	nowtop+=10;
	move()
}
btn7.onclick=function(){
	nowtop+=10;
	move()
}
btn8.onclick=function(){
	nowleft+=10;
	nowtop+=10;
	move()
}
function move(){
	oTu.style.left=nowleft+'px';
	oTu.style.top=nowtop+'px';
}
