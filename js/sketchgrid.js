$(document).ready(function() {
	createGrid(16);

	function createGrid(width) {
		var tileDim = (750 -(3 * width)) / width;
		for (var i = 0; i < (width * width); i++) {
			$('.container').append('<div class="tile"></div>');
		}
		$('.tile').height(tileDim);
		$('.tile').width(tileDim);
		$('.tile').mouseenter(function() {
		$(this).css("background-color", "#000");
	});
	}

	$('#clear').click(function() {
		$('.container').empty();
		var newWidth = prompt("How wide do you want the new grid to be?");
		createGrid(newWidth);
	});
});