var img = document.getElementsByClassName('flex-pic');
var lb = document.getElementById('lightbox');
var bigImg = document.getElementsByClassName('big-img')[0];
var min = document.querySelectorAll('#lightbox span');
var fullsize = document.querySelectorAll('#lightbox img');
console.log(min);
console.log(lb);
console.log(bigImg);
console.log(img);
console.log(fullsize);

function openBox(url, name, med, desc){
	lb.style.display = "block";
	lb.style.animation = "open .25s";
	fullsize[0].src = url;
	var h3 = document.createElement('h3');
	var txt = document.createTextNode(name);
	h3.appendChild(txt);
	var h4 = document.createElement('h4');
	var txt2 = document.createTextNode(med);
	var p = document.createElement('p');
	var txt3 = document.createTextNode(desc);
	h4.appendChild(txt2);
	lb.appendChild(h3);
	lb.appendChild(h4);
	p.appendChild(txt3);
	lb.appendChild(p);
}
bigImg.onclick = function(){openBox('../img/art/aloof.jpg', "Aloof", 'Pen & Ink, Water Color', '2017 | 8.5x11');}
img[0].onclick = function(){openBox('../img/art/theyre_already_gone.jpg', "They're Already Gone", 'Pen & Ink, Water Color', '2013 | 10x15');}
img[1].onclick = function(){openBox('../img/art/escape.jpg', "Escape!", 'Pen & Ink, Water Color', '2011 | 5x8');}
img[2].onclick = function(){openBox('../img/art/benthic_beauty.jpg', "Benthic Beauty", 'Pen & Ink, Water Color', '2011 | 16x5');}
img[3].onclick = function(){openBox('../img/art/flyaways.jpg', "Flyaways", 'Pen & Ink, Acrylic', '2014 | 8.5x11');}
img[4].onclick = function(){openBox('../img/art/museic1.jpg', "Muse-ic", 'Pen & Ink, Water Color, Collage', '2015 | 12x12');}
img[5].onclick = function(){openBox('../img/art/tankypanky.jpg', "Tanky Panky", 'Pen & Ink, Water Color', '2011 | 16x5');}
img[6].onclick = function(){openBox('../img/art/the_kiss.jpg', "The Kiss", 'Marker', '2013 17x11');}
img[7].onclick = function(){openBox('../img/art/alone.jpg', "Alone", 'Acrylic, Collage', '2011 | 16x7');}
img[8].onclick = function(){openBox('../img/art/relic.jpg', "Relic", 'Pen & Ink', '2017 8.5x11');}
img[9].onclick = function(){openBox('../img/art/aloof.jpg', "Aloof", 'Pen & Ink, Water Color', '2017 | 8.5x11');}

min[0].onclick = function(){
	lb.style.animation = 'close .25s'
	setTimeout(function(){
		lb.style.display = 'none';
		$('#lightbox h3').remove();
		$('#lightbox h4').remove();
		$('#lightbox p').remove();
	}, 225);
}

lb.onclick = function(){
	lb.style.animation = 'close .25s'
	setTimeout(function(){
		lb.style.display = 'none';
		$('#lightbox h3').remove();
		$('#lightbox h4').remove();
		$('#lightbox p').remove();
	}, 225);
}