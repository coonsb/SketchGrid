$(document).ready(function() {
	createGrid(16, 1);

	function createGrid(width, type) {
		var tileDim = (750 -(2 * width)) / width;
		for (var i = 0; i < (width * width); i++) {
			$('.container').append('<div class="tile"></div>');
		}
		$('.tile').height(tileDim);
		$('.tile').width(tileDim);
		$('.tile').mouseenter(function() {
			if (type === 1) {
				$(this).css("background-color", "#000");
			}
		});
	};

	$('#clear').click(function() {
		$('.container').empty();
		var newWidth = prompt("How wide do you want the new grid to be? (Greater than 0 and less than or equal to 128)");
		if (newWidth > 0 && newWidth <= 128) {
			createGrid(newWidth, 1);
		} else {
			alert("Please enter a valid grid width!");
		}
	});
});