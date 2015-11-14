$(document).ready(function() {
	var tileDim = (750 - 48) / 16;
	for (var i = 0; i < 256; i++) {
		$('.container').append('<div class="tile"></div>');
	}
	$('.tile').height(tileDim);
	$('.tile').width(tileDim);

	$('.tile').hover(function() {
		$(this).css("background-color", "#000");
	});

});	