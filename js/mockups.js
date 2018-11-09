var laptop = document.getElementsByTagName('p')[0];
var tablet = document.getElementsByTagName('p')[1];
var phone = document.getElementsByTagName('p')[2];
var state = "laptop";

laptop.className = 'active';

tablet.onclick = function(){
	if (state == "laptop"){
	  document.getElementById('circle').id = 'circle2';
	  document.getElementById('screen').id = 'screen2';
	  document.getElementById('content').id = 'content2';
	  document.getElementById('circle2').style.animation="lap2tab_circle 1s";
	  document.getElementById('screen2').style.animation="lap2tab_screen 1s";
	  document.getElementById('content2').style.animation="lap2tab_div 1s";
	  document.getElementById('trapezoid').style.display="none";
	  document.getElementById('base').style.display="none";
	  document.getElementById('image').setAttribute('src', '../img/tablet.jpg');
} else if(state == "phone"){
	  document.getElementById('circle3').id = 'circle2';
	  document.getElementById('screen3').id = 'screen2';
	  document.getElementById('content3').id = 'content2';
	  document.getElementById('circle2').style.animation="pho2tab_circle 1s";
	  document.getElementById('screen2').style.animation="pho2tab_screen 1s";
	  document.getElementById('content2').style.animation="pho2tab_div 1s";
	  document.getElementById('image').setAttribute('src', '../img/tablet.jpg');
}
tablet.className = 'active';
laptop.className = 'inactive';
phone.className = 'inactive';
state = "tablet";

}

phone.onclick = function(){
	if (state =='laptop'){
	  document.getElementById('circle').id = 'circle3';
	  document.getElementById('screen').id = 'screen3';
	  document.getElementById('content').id = 'content3';
	  document.getElementById('circle3').style.animation="lap2pho_circle 1s";
	  document.getElementById('screen3').style.animation="lap2pho_screen 1s";
	  document.getElementById('content3').style.animation="lap2pho_div 1s";
	  document.getElementById('trapezoid').style.display="none";
	  document.getElementById('base').style.display="none";
	  document.getElementById('image').setAttribute('src', '../img/phone.jpg');
} else if (state == 'tablet'){
	 document.getElementById('circle2').id = 'circle3';
  	 document.getElementById('screen2').id = 'screen3';
  	 document.getElementById('content2').id = 'content3';
  	 document.getElementById('circle3').style.animation="tab2pho_circle 1s";
  	 document.getElementById('screen3').style.animation="tab2pho_screen 1s";
  	 document.getElementById('content3').style.animation="tab2pho_div 1s";
  	 document.getElementById('image').setAttribute('src', '../img/phone.jpg');
}

phone.className = 'active';
laptop.className = 'inactive';
tablet.className = 'inactive';
state = "phone"
}

laptop.onclick = function(){
	if (state == 'tablet'){
	  document.getElementById('circle2').id = 'circle';
	  document.getElementById('screen2').id = 'screen';
	  document.getElementById('content2').id = 'content';
	  document.getElementById('circle').style.animation="tab2lap_circle 1s";
	  document.getElementById('screen').style.animation="tab2lap_screen 1s";
	  document.getElementById('content').style.animation="tab2lap_div 1s";
	  document.getElementById('trapezoid').style.display="block";
	  document.getElementById('base').style.display="block";
	   document.getElementById('trapezoid').style.animation="open 1s";
	  document.getElementById('base').style.animation="open 1s";
	  document.getElementById('image').setAttribute('src', '../img/desktop.jpg');
	}else if(state == 'phone'){
	  document.getElementById('circle3').id = 'circle';
	  document.getElementById('screen3').id = 'screen';
	  document.getElementById('content3').id = 'content';
	  document.getElementById('circle').style.animation="pho2lap_circle 1s";
	  document.getElementById('screen').style.animation="pho2lap_screen 1s";
	  document.getElementById('content').style.animation="pho2lap_div 1s";
	  document.getElementById('trapezoid').style.display="block";
	  document.getElementById('base').style.display="block";
	  document.getElementById('trapezoid').style.animation="open 1s";
	  document.getElementById('base').style.animation="open 1s";
	  document.getElementById('image').setAttribute('src', '../img/desktop.jpg');
	}
	laptop.className = 'active';
	tablet.className = 'inactive';
	phone.className = 'inactive';
	state = 'laptop';
}