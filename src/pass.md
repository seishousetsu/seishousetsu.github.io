# Password Enter Site

<input class="pass" type="text" placeholder="Password">
<input class="button" onclick="passcheck()" type="submit" />

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>function passcheck(){
	if ($('.pass').val() == "031-12") { // ansとinputTxtが同じだったら
		window.location.href("031-12.html"); // 指定したサイトに飛ぶ
	} else { // それ以外は
		$(".pass").val(""); //文字列を消し
		$('.pass').attr('placeholder', '❌'); //違うという❌を表示
	}
});
};
</script>
