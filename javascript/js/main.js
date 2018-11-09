var searchBtn = document.getElementById('search');
var searchBar = document.getElementById('content');
/*var fName = document.getElementById('f-name');
var lName = document.getElementById('l-name');
var address = document.getElementById('address');
var city = document.getElementById('city');
var zip = document.getElementById('zip');
var email = document.getElementById('email');*/
var input = document.getElementsByClassName('form');
var submit = document.querySelectorAll('input[type="submit"]');
var label = document.getElementsByTagName('label');
//var inputDiv = document.querySelectorAll('#form div');

function searchClear(){
	searchBar.value = '';
}

searchBtn.onclick = searchClear;

function required(){
	for(var i = 0; i < input.length; i++){
			var b = document.createElement("b");
			var req = document.createTextNode("Required");
			b.appendChild(req);
			input[i].parentNode.appendChild(b);
			var b = document.getElementsByTagName('b');
			for(var j = 0; j < b.length; j++){
			b[j].className = 'hide';
		}
		}
		}
required();


document.getElementsByTagName('form')[0].onsubmit = function(){
	for (var i = 0; i < 6; i++){
		if(input[i].value != ''){
			input[i].nextElementSibling.className = 'hide';
		}
		else{
			input[i].nextElementSibling.className = 'show';
		}
	}
	if (input[i].value == ''){return false;}
}



