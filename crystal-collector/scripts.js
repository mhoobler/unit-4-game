//create target number
var target_number = Math.ceil(Math.random()*4) * Math.ceil(Math.random()*10) + 32;
var current_total = 0;

console.log(target_number);
$("#target-number").text(target_number);

//create crystals
var colors = ["red", "blue", "green", "yellow"];
var crystal_array_numbers = [];

for (i=0; i < colors.length; i++){
	var crystal_div = $("<div>");
	crystal_div.addClass("col-md-3 crystal");
	crystal_div.attr("value", Math.ceil(Math.random() * 20));
	crystal_div.text(colors[i]);
	crystal_div.css("background-color", colors[i]);
	$("#crystal-row").append(crystal_div);
};

//click function
$(".crystal").click(function() {
	console.log($(this).attr("value"));
	current_total += parseFloat($(this).attr("value"));
	$("#current-total").text(current_total);
	checkWin();
});

function checkWin() {
	if (current_total == target_number){
		alert("YOU WIN");

	} else if (current_total > target_number){
		alert("Willhelm scream");
	}
};
