
var color_array = ['empty', 'red','green','blue','yellow','orange'];
// var shape_array = [[0,0],[1,0],[2,0],[3,0]]; // four in a row
var shape_array = [[0,0],[1,0],[2,0],[1,1]];
var rows = 15;
var cols = 9;
var total_squares = rows * cols;
var game_array = [];

$(document).ready(function() {
	// This time make an array that holds all of the colors
	for ( var i=0; i< total_squares; i++ ) {
		var color_index = 0;				// Set each square to the blank
		game_array.push( color_index );		
		$('#gameboard').append( "<div class='gamesquare' id='square_"+i+"'></div>" );
	}
	// Set the height and width of the game board
	$('#gameboard').css({width:cols*32, height:rows*32});
	
	draw();
});

function draw() {
	draw_block(1,12,shape_array,1);
	draw_block(3,2,shape_array,1);
	for (var p in game_array ) {
		$("#square_"+p).addClass( color_array[game_array[p]]);
	}
}

function get_square_index(c,r) {
	return (r*cols)+c;
}

function draw_block(c,r,block_array,color_index) {
	for (var p in block_array) {
		var index = get_square_index( c + block_array[p][0], r + block_array[p][1] )
		game_array[index] = color_index;
	}
}