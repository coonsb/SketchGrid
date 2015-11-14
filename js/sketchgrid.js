$(document).ready(function() {
	createGrid(16, 1);

	function createGrid(width, type) {
		var tileDim = 750 / width;
		for (var i = 0; i < (width * width); i++) {
			$('.container').append('<div class="tile"></div>');
		}
		$('.tile').height(tileDim);
		$('.tile').width(tileDim);
		$('.tile').mouseenter(function() {
			if (type === 1) {
				$(this).css('background-color', '#fff');
			}
			else if (type === 2) {
				var letters = '0123456789ABCDEF'.split('');
				var color = '#';
				for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() *16)];
				}
				$(this).css('background-color', color);
			}
			else if (type === 3) {
				var op = $(this).css('opacity');
				if (op > 0) {
					$(this).css('opacity', op - 0.1);
				}
			}
		});
	};

	$('#basic').click(function() {
		$('.container').empty();
		var newWidth = prompt("How wide do you want the new grid to be? (Greater than 0 and less than or equal to 64)");
		if (newWidth > 0 && newWidth <= 64) {
			createGrid(newWidth, 1);
		} else {
			alert("Please enter a valid grid width!");
		}
	});

	$('#random').click(function() {
		$('.container').empty();
		var newWidth = prompt("How wide do you want the new grid to be? (Greater than 0 and less than or equal to 64)");
		if (newWidth > 0 && newWidth <= 64) {
			createGrid(newWidth, 2);
		} else {
			alert("Please enter a valid grid width!");
		}
	})

	$('#fade').click(function() {
		$('.container').empty();
		var newWidth = prompt("How wide do you want the new grid to be? (Greater than 0 and less than or equal to 64)");
		if (newWidth > 0 && newWidth <= 64) {
			createGrid(newWidth, 3);
		} else {
			alert("Please enter a valid grid width!");
		}
	})
});