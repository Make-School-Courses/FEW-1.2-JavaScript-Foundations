
var color_array = ['red','green','blue','yellow','orange', 'empty'];
var rows = 15;
var cols = 9;
var total_squares = rows * cols;
var game_array = [];

$(document).ready(function() {
	// This time make an array that holds all of the colors
	for ( var i=0; i< total_squares; i++ ) {
		var color_index = Math.floor(Math.random() * color_array.length);
		game_array.push( color_index );
		$('#gameboard').append( "<div class='gamesquare' id='square_"+i+"'>"+i+"</div>" );
	}
	// Set the height and width of the game board
	$('#gameboard').css({width:cols*32, height:rows*32});
	
	draw();
});

function draw() {
	for (var p in game_array ) {
		$("#square_"+p).addClass( color_array[game_array[p]]);
	}
}
