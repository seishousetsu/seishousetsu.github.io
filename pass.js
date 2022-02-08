var w = $(window).width();
var ans = '031-12';
var inputTxt = $('.pass').val();
function passcheck(){
	if (inputTxt === ans) {
		window.location.href("031-12.html");
	} else {
		$(".pass").val("");
		$('.pass').attr('placeholder', '❌');
	}
});
}
