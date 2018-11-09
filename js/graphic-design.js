var holder = document.getElementsByClassName('design-holder'),
clickOut = document.getElementById('clickout'),
designImg = document.querySelectorAll('#clickout img'),
min = document.querySelectorAll('#clickout span');


function openBox(url){
	clickOut.style.display = "block";
	clickOut.style.animation = "open .25s";
	designImg[0].src = url;
}

holder[0].onclick = function(){openBox('../img/graphic/beer.jpg');}
holder[1].onclick = function(){openBox('../img/graphic/chudnow.jpg');}
holder[2].onclick = function(){openBox('../img/graphic/summer.jpg');}
holder[3].onclick = function(){openBox('../img/graphic/card2.jpg');}
holder[4].onclick = function(){openBox('../img/graphic/infographic.jpg');}
holder[5].onclick = function(){openBox('../img/graphic/flyer2.jpg');}
holder[6].onclick = function(){openBox('../img/graphic/risks.jpg');}
holder[7].onclick = function(){openBox('../img/graphic/flyer.jpg');}
holder[8].onclick = function(){openBox('../img/graphic/card.jpg');}
holder[9].onclick = function(){openBox('../img/graphic/index.jpg');}


min[0].onclick = function(){
	clickOut.style.animation = 'close .25s'
	setTimeout(function(){
		clickOut.style.display = 'none';
	}, 225);
}

clickOut.onclick = function(){
	clickOut.style.animation = 'close .25s'
	setTimeout(function(){
		clickOut.style.display = 'none';
	}, 225);
}