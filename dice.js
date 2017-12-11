var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var cars = 'red,blue,green,yellow,white1, white2'.split(',');
var cols = 'red,blue,green,yellow,white,white'.split(',');
function gen_dice(){
for (var c in cars) {
    var newElement = document.createElement('div');
    newElement.id = cars[c]; newElement.className = "placeholder";
    newElement.style.backgroundColor=cols[c];		
    var sp2 = document.getElementById('button');
    document.body.insertBefore(newElement, sp2);;	
}
};


var button = document.getElementById('button');

button.onclick = function() {
for (var c in cars) {
	var result=dice.roll();
	var placeholder = document.getElementById(cars[c]);
  	placeholder.innerHTML = result;
};
};

