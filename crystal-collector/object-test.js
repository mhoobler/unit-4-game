
var game = {
	target_number: 0,
	current_total: 0,
	score: 0,
	game_running: false,
	crystal_array: [],

	startGame: function() {
		this.createTargetNumber();
		this.current_total = 0;
		this.game_running = true;
		crystalSetup();
		htmlSetup();
		console.log("ready");
	},

	createTargetNumber: function() {
		this.target_number = Math.ceil(Math.random()*4) * Math.ceil(Math.random()*10) + 32;
		$("#target-number").text(this.target_number);
	},

	checkWin: function() {
		if(this.current_total === this.target_number) {
			alert("You Win!");
		} else if (this.current_total > this.target_number) {
			alert("You lose :(");
		};
	}
};

function crystal(color, value) {

	this.color = color;
	this.value = value;
};

var colors = ["red", "green", "blue", "yellow"];

//function startGame() {
//	game.target_number = Math.ceil(Math.random()*4) * Math.ceil(Math.random()*10) + 32;
//	game.current_total = 0;
//	game.game_running = true;
//	crystalSetup();
//}

function crystalSetup() {
	for(var i=0; i<colors.length; i++){
		var random = Math.ceil(Math.random() * 14) + 3;
		var x = new crystal(colors[i], random);
		game.crystal_array.push(x);
	}
	console.log(game.crystal_array);
}

function htmlSetup() {
	for(i=0; i<game.crystal_array.length; i++){
		var crystal_element = $("<div>");
		crystal_element.addClass("col-md-3 crystal");
		crystal_element.attr("value", game.crystal_array[i].value);
		crystal_element.text(game.crystal_array[i].color);
		crystal_element.css("background-color", game.crystal_array[i].color);
		$("#crystal-row").append(crystal_element);
		console.log("1");
	};
}

game.startGame();

$(".crystal").click(function () {
	console.log($(this).attr("value"));
	game.current_total += parseFloat($(this).attr("value"));
	$("#current-total").text(game.current_total);
	game.checkWin();
});
