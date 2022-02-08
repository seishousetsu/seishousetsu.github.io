function passcheck(){
	if ($('.pass').val() == "031-12") { // ansとinputTxtが同じだったら
		window.location.href("031-12.html"); // 指定したサイトに飛ぶ
	} else { // それ以外は
		$(".pass").val(""); //文字列を消し
		$('.pass').attr('placeholder', '❌'); //違うという❌を表示
	}
});
};
