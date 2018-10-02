var x= window.screen.height/2;
function loaded() {
	var doc = document.getElementById("conten");
	document.getElementById("load").style.display="none";
	doc.style.display = "block";
}

function clicked(id,target) {
	var selected = document.getElementsByClassName("menuButtonActive")[0];
	selected.setAttribute("class","menuButton menuButtonInactive");
	var elemento = document.getElementById(id);
	elemento.setAttribute("class","menuButton menuButtonActive");
	window.scrollTo(0,document.getElementById(target).offsetTop);
} 



function scrolled(){
	var comp = window.scrollY;
	if (comp < document.getElementById("propuesta").offsetTop-x){
		document.getElementsByClassName("menuButtonActive")[0].setAttribute("class","menuButton menuButtonInactive");
		document.getElementById('iniciob').setAttribute("class","menuButton menuButtonActive");
	}
	else if (comp > document.getElementById("propuesta").offsetTop-x && comp < document.getElementById("grupo").offsetTop-x){
		document.getElementsByClassName("menuButtonActive")[0].setAttribute("class","menuButton menuButtonInactive");
		document.getElementById('propuestab').setAttribute("class","menuButton menuButtonActive");
	}
	else if(comp >= document.getElementById("grupo").offsetTop-x){
		document.getElementsByClassName("menuButtonActive")[0].setAttribute("class","menuButton menuButtonInactive");
		document.getElementById('gb').setAttribute("class","menuButton menuButtonActive");
	}
}