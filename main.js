
// create an object
var myObj = {
	target: document.getElementById('item'),
	xPos: document.getElementById('item').offsetLeft,
	yPos: document.getElementById('item').offsetTop,
	xPosition: function(l){
		this.xPos += l;
		this.target.style.left = this.xPos + "px";
	},
	yPosition: function(t){
		this.yPos += t;
		this.target.style.top = this.yPos + "px";
	},
	position: function(){
		return "X axis : " + this.xPos + ", Y axis : " + this.yPos;
	}
};


// set key and event
document.addEventListener('keyup', function(e){
	if(e.keyCode == 38){
		myObj.yPosition(-20);
		console.log(myObj.position());
	}else if(e.keyCode == 40){
		myObj.yPosition(20);
		console.log(myObj.position());
	}else if(e.keyCode == 39){
		myObj.xPosition(20);
		console.log(myObj.position());
	}else if(e.keyCode == 37){
		myObj.xPosition(-20);
		console.log(myObj.position());
	}else{
		alert("Sorry! Only alow arrow keys.");
	}
	
	console.log(e.keyCode);
}, false);



