function words(){
	var wordList = ['Artist', 'Developer', 'Educator', 'Designer', 'Tar Heel', 'History Buff', 'Americorps Alum', 'Voracious Learner','Web Enthusiast','Learner & Doer'];
	var randomNumber = Math.floor((Math.random() * 10) /*+ 1*/);
  	var word = wordList[randomNumber];
  	var holder = document.getElementById('holder');

  holder.innerHTML = '<span style = "animation: fade-in 3s linear">' + word + '<span>';
 

  if (randomNumber < 11){
    setTimeout(words, 3000)
  }
}

window.onload = function start() {
  words();
}

/*JQuery Scroll*/
/*$(document).ready(function(){

function _scrollTo(page){
	$('html, body').animate({
		scrollTop: $(page).offset().top
	}, 500);
	return true;
}

$("[href*='#wrapper1']").click(function(){
	_scrollTo('#wrapper1');
	$('li a').css('color','white');
	$('.disc').css('borderColor','white');
	$('#main-nav  [href*="wrapper1"]').css('color', '#EAC088');
	$('#main-nav  [href*="wrapper1"]').prev().css('borderColor','#EAC088');
})


$("[href*='#wrapper2']").click(function(){
	_scrollTo('#wrapper2');
	$('li a').css('color','white');
	$('.disc').css('borderColor','white');
	$('#main-nav [href*="wrapper2"]').css('color', '#9283A6');
	$('#main-nav [href*="wrapper2"]').prev().css('borderColor','#9283A6');
})

$("[href*='#wrapper3']").click(function(){
	_scrollTo('#wrapper3');
	$('li a').css('color','white');
	$('.disc').css('borderColor','white');
	$('#main-nav [href*="wrapper3"]').css('color', '#82CAA6');
	$('#main-nav [href*="wrapper3"]').prev().css('borderColor','#82CAA6');
})

$("[href*='#wrapper4']").click(function(){
	_scrollTo('#wrapper4');
	$('li a').css('color','white');
	$('.disc').css('borderColor','white');
	$('#main-nav [href*="wrapper4"]').css('color', '#F49984');
	$('#main-nav [href*="wrapper4"]').prev().css('borderColor','#F49984');
})

$("[href*='#wrapper5']").click(function(){
	_scrollTo('#wrapper5');
	$('li a').css('color','white');
	$('.disc').css('borderColor','white');
	$('#main-nav [href*="wrapper5"]').css('color', '#969FA8');
	$('#main-nav [href*="wrapper5"]').prev().css('borderColor','#969FA8');
})


});   

*/


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
            $('.disc').removeClass('active');
        })
        $(this).addClass('active');
        $(this).prev().addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#main-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#main-nav ul li a').removeClass("active");
            currLink.addClass("active");
            currLink.prev().addClass('active');
        }
        else{
            currLink.removeClass("active");
            currLink.prev().removeClass('active');
        }
    });
}



var form = document.getElementsByTagName('form');
var submit = document.querySelectorAll('[type="submit"]');
var input = document.getElementsByClassName('input');

function require(){
	var input = document.getElementsByClassName('input');

	for(var i = 0; i < input.length; i++){
		var b = document.createElement('b');
		var req = document.createTextNode('*Fill this part out');
		b.appendChild(req);
		input[i].previousElementSibling.appendChild(b);
		var b = document.getElementsByTagName('b');
		
		for(var j = 0; j < b.length; j++){
			b[j].className = 'hide';
		}
	}
}	
require();

var b = document.getElementsByTagName('b');




form[0].onsubmit = function(){
	var b = document.getElementsByTagName('b');
	var input = document.getElementsByClassName('input');
	for(var i = 0; i < 3; i++){
		if(input[i].value != ''){
			input[i].previousElementSibling.lastChild.className = 'hide';
		}else{
			input[i].previousElementSibling.lastChild.className = 'show';
		}
	}
	for(var i = 0; i < 3; i++){ 
		if (input[i].value == ''){return false;}
	}


	if(submit[0].value == 'Submitted'){
    	submit[0].disabled;
  }else{
  submit[0].className = 'thinking';
  setTimeout(function(){
    submit[0].className = 'done';
    submit[0].value = 'Submitted';
  }, 2000)}
  console.log('form submitted');
  /*for(var i = 0; i < 3; i++){
  	input[i].value = '';
  }*/

 if (submit[0].value = 'Submitted'){
 	submit[0].style.cursor = 'default';
 	submit[0].disabled = true;
 }
}

	
//}

/*form[0].onsubmit = function(){if(submit.value == 'Submitted'){
    	submit.disabled = 'disabled';
  }else{
  submit[0].className = 'thinking';
  setTimeout(function(){
    submit[0].className = 'done';
    submit[0].value = 'Submitted';
  }, 2000)}}

  console.log(submit);*/
/*btn.onclick = function(){
  if(btn.value == 'Submitted'){
    return false;
  }else{
  btn.className = 'thinking';
  setTimeout(function(){
    btn.className = 'done';
    btn.value = 'Submitted';
  }, 2000)}
}*/

/*function btn(){
	submit[0].className = 'thinking';
	setTimeout(function(){
		submit[0].className = 'done';
		submit[0].value = 'Submitted';
	}, 2000);
}*/


var pancake = document.getElementById('pancakebox');
var ex = document.getElementById('pancakebox2');
var nav = document.getElementById('main-nav');

function toX(){               
  pancake.style.display = 'none';
  ex.style.display = 'block';
  nav.className = 'open';
}

function toPancake(){
  pancake.style.display = 'block';
  ex.style.display = 'none';
  nav.className = 'close';
  document.getElementById('first').style.animation = "topX .5s";
  document.getElementById('second').style.animation = "middleX .5s";
  document.getElementById('third').style.animation = "bottomX .5s";
}

pancake.onclick = toX;
ex.onclick = toPancake;

//-----------------------------------------------------------------------

var links = document.querySelectorAll('#main-nav a');

links[0].onclick =  function(){
	if (window.matchMedia("(max-width: 1024px)").matches){
		nav.className = 'close';
		toPancake();
	}
}

links[1].onclick = function(){
	if (window.matchMedia("(max-width: 1024px)").matches){
		nav.className = 'close';
		toPancake();
	}
}

links[2].onclick = function(){
	if (window.matchMedia("(max-width: 1024px)").matches){
		nav.className = 'close';
		toPancake();
	}
}

links[3].onclick = function(){
	if (window.matchMedia("(max-width: 1024px)").matches){
		nav.className = 'close';
		toPancake();
	}
}

links[4].onclick = function(){
	if (window.matchMedia("(max-width: 1024px)").matches){
		nav.className = 'close';
		toPancake();
	}
}
//-----------------------------------------------------------------------

var opener = document.getElementsByClassName('box-opener');
var box = document.getElementsByClassName('box');
var plus = document.querySelectorAll('.box-opener span');

function open(num){
	if (plus[num].innerHTML == '+'){
		box[num].style.display = 'block';
		box[num].style.animation = 'grow 1s'
		plus[num].innerHTML = '-';
	}else{
		box[num].style.animation = 'shrink 1s';
		setTimeout(function(){box[num].style.display = 'none';}, 1000);
    plus[num].innerHTML = '+';
  }
		
	}


opener[0].onclick = function(){open(0);}
opener[1].onclick = function(){open(1);}
opener[2].onclick = function(){open(2);}

opener[3].onclick = function(){open(3);}
opener[4].onclick = function(){open(4);}
opener[5].onclick = function(){open(5);}

opener[6].onclick = function(){open(6);}
opener[7].onclick = function(){open(7);}
opener[8].onclick = function(){open(8);}

opener[9].onclick = function(){open(9);}
opener[10].onclick = function(){open(10);}
opener[11].onclick = function(){open(11);}


/*var opener = document.getElementsByClassName('box-opener');
var box = document.getElementsByClassName('box');
var plus = document.querySelectorAll('.box-opener span');

function open(z){
  if (plus[z].innerHTML == '+'){
  box[z].style.display = 'block';
  box[z].style.animation = 'grow 1s';
    plus[z].innerHTML = '-';
  }
  else if(plus[z].innerHTML == '+'){
    box[z].style.animation = 'shrink 1s'
    setTimeout(function(){box[z].style.display = 'none';}, 400);
    plus[z].innerHTML = '+'
  }
}

opener[0].onclick = function(){open(0);}
opener[1].onclick = function(){open(1);}
opener[2].onclick = function(){open(2);}

opener[3].onclick = function(){open(3);}
opener[4].onclick = function(){open(4);}
opener[5].onclick = function(){open(5);}

opener[6].onclick = function(){open(6);}
opener[7].onclick = function(){open(7);}
opener[8].onclick = function(){open(8);}

opener[9].onclick = function(){open(9);}
opener[10].onclick = function(){open(10);}
opener[11].onclick = function(){open(11);}

*/
//--------------------------------------------------------------------------
