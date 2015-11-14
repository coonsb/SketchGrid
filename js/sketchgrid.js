$(document).ready(function() {
	var tileDim = (500 - 64) / 16;
	for (var i = 0; i < 256; i++) {
		$('.container').append('<div class="tile"></div>');
	}
	$('.tile').css('height', tileDim);
	$('.tile').css('width', tileDim);
});	