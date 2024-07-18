var n = 4
var current = 1

function slideShow(){
	document.getElementById("pannel").innerHTML = "<img src='pannel"+current+".jpg'/>";
	
	if(current < n)
		current +=1;
	else
		current = 1;
}

function autoPlay(){
	setInterval(slideShow, 3000);
}


function auto_increase() {
    var a = document.getElementById("sl").value;
    a = Number(a);
    document.getElementById("sl").value = a+1;
}

function auto_reduce() {
    var a = document.getElementById("sl").value;
    a = Number(a);
    if (a > 0) {
        document.getElementById("sl").value = a-1;
    }
}