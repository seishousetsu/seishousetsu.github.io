var ans = '031-12'; //入力した文字列と一致させたいもの。この場合は031-12
var inputTxt = $('.pass').val(); //これが入力した文字列。これと031-12が同じだったら違うサイトに飛ばせたい
function passcheck(){
	if (inputTxt === ans) { // ansとinputTxtが同じだったら
		window.location.href("031-12.html"); // 指定したサイトに飛ぶ
	} else { // それ以外は
		$(".pass").val(""); //文字列を消し
		$('.pass').attr('placeholder', '❌'); //違うという❌を表示
	}
});
};
