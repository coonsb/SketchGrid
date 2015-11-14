$(document).ready(function() {
	createGrid(16);

	$('.tile').hover(function() {
		$(this).css("background-color", "#000");
	});

});	

function createGrid(width) {
	var tileDim = (750 -(3 * width)) / width;
	for (var i = 0; i < (width * width); i++) {
		$('.container').append('<div class="tile"></div>');
	}
	$('.tile').height(tileDim);
	$('.tile').width(tileDim);
}