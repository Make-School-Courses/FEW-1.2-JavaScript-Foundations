
var color_array = ['red','green','blue','yellow','orange'];
var rows = 15;
var cols = 9;
var total_squares = rows * cols;

$(document).ready(function() {
	// Create a grid of cols x rows squares each a random color
	for ( var i=0; i< total_squares; i++ ) {
		var color_class = color_array[Math.floor(Math.random() * color_array.length)];
		var class = "gamesquare " + color_class;
		$('#gameboard').append('<div class="'+class+'"></div>');
	}
	$('#gameboard').css({width:cols*16, height:rows*16});
});
