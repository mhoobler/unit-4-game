
var game = {
	target_number: 0,
	current_total: 0,
	score: 0,
	number_of_guesses: 0,
	clicked_array: [],
	crystal_array: [],

	startGame: function(game_state) {
		this.createTargetNumber();
		this.current_total = 0;
		this.number_of_guesses = 0;
		this.crystal_array = [];
		this.clicked_array = [];
		crystalSetup();
		htmlSetup();
		//if player just won
		if(game_state === "WIN"){
			
			console.log("win");

		//if player just lossed
		} else if(game_state === "LOSS") {
			this.score = 0;

			console.log("loss");

		//if game just started
		} else {
			
			console.log("game started");
		}
	},

	createTargetNumber: function() {
		this.target_number = Math.ceil(Math.ceil(Math.random()*30) + 60);
		$("#target-number").text(this.target_number);
	},

	checkWin: function() {
		if(this.current_total === this.target_number) {
			this.addScore();
			alert("You Win!");
			this.startGame("WIN");
		} else if (this.current_total > this.target_number) {
			alert("You lose :(");
			game.startGame("LOSS");
		};
	},

	addScore: function() {
		if (this.number_of_guesses < 15) {
			this.score += Math.floor(this.number_of_guesses * this.clicked_array.length / 4);
		} else {
			this.score++;
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
		var random = Math.ceil(Math.random() * 7) + 3;
		var x = new crystal(colors[i], random);
		game.crystal_array.push(x);
	}
	console.log(game.crystal_array);
}

function htmlSetup() {
	
	$("#current-score").text(game.score);
	$("#current-total").text(0);

	$("#crystal-row").empty();
	for(i=0; i<game.crystal_array.length; i++){
		var crystal_element = $("<img>");
		crystal_element.addClass("col-md-6 crystal");
		crystal_element.attr("value", game.crystal_array[i].value);
		crystal_element.attr("src", "assets/images/bottle"+ i + ".jpg");
		crystal_element.text(game.crystal_array[i].color);
		crystal_element.css("background-color", "white");
		crystal_element.css("width", "75px");
		crystal_element.css("height", "170px");
		$("#crystal-row").append(crystal_element);
		console.log("1");
	};
}

game.startGame();

$(document).on("click", ".crystal", function () {
	console.log($(this).attr("value"));
	game.current_total += parseFloat($(this).attr("value"));
	game.number_of_guesses++;
	if(game.clicked_array.length > 0) {
		for(i=0; i < game.clicked_array.length; i++) {
			var checker = this;
			console.log(game.clicked_array[i]);
			if(checker===game.clicked_array[i]){
				break;
			}else{
				game.clicked_array.push(this);
			}
		}
	}else{
		game.clicked_array.push(this);
	}
	console.log(game.clicked_array);
	console.log(game.number_of_guesses);
	$("#current-total").text(game.current_total);
	game.checkWin();
});

$("#cheat").click(function() {
	console.log($(this).attr("value"));
	game.current_total = game.target_number;
	game.number_of_guesses++;
	console.log(game.number_of_guesses);
	$("#current-total").text(game.current_total);
	game.checkWin();
});
