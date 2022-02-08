var w = $(window).width();
var ans = '031-12';
var inputTxt;
$('button').on('click', function() {
	if (w >= 767) {
		inputTxt = $(this).prev('.pass').val();
	} else {
		inputTxt = $(this).parent().prev('.pass').val();
	}
	if (inputTxt.toLowerCase() === ans.toLowerCase()) {
		window.location.href("031-12.html");
	} else {
		$(".pass").val("");
		$('.pass').attr('placeholder', '❌');
	}
});
