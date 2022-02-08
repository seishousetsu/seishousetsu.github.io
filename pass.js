var w = $(window).width();
var ans = '031-12';
var inputTxt;
function passcheck(){
	$('.button').on('click', function() {
	if (w >= 767) {
		inputTxt = $('.pass').val();
	} else {
		inputTxt = $('.pass').val();
	}
	if (inputTxt() === ans()) {
		window.location.href("031-12.html");
	} else {
		$(".pass").val("");
		$('.pass').attr('placeholder', '❌');
	}
});
}
