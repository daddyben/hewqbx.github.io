var myImage = document.querySelector('img');

myImage.onclick = function(){
	var Imagepath = myImage.getAttribute('src');
	if(Imagepath == 'images/Firefox-logo.png') {
		myImage.setAttribute('src', 'images/Firefox-logo2.jpg');
	}else{
		myImage.setAttribute('src', 'images/Firefox-logo.png');
	}
}

var myHead = document.querySelector('h1');    //记住打上var
var myButton = document.querySelector('button');
function setUser(){
	
	var clientName = prompt('Please entry your name.');
	localStorage.setItem('name', clientName);
	myHead.textContent = 'Happpy,' + clientName; //这不是个函数，直接给字符串。
	
}
if(!localStorage.getItem('name')){ //localStorage.getItem这个函数就像字典
	setUser();
}else{
	myHead.textContent= 'Happpy,' + localStorage.getItem('name');
}

myButton.onclick = function(){ //点击事件需要建立函数
	setUser();
}