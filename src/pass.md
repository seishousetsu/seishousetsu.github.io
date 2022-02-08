# Password Enter Site

<input class="pass" type="text" name="ans" placeholder="Password">
<p class="button"><input type="submit" /></p>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" 

        <script>
        var w = $(window).width();
var ans = '031-12';
$('button').on('click', function() {
			if (w >= 767) {
				var inputTxt = $(this).prev('.pass').val();
			} else {
				var inputTxt = $(this).parent().prev('.pass').val();
			}
			if (inputTxt.toLowerCase() === ans.toLowerCase()) {
				setTimeout("location.href='031-12test.html';", 0);
			} else {
				$(".pass").val("");
				$('.pass').attr('placeholder', '❌');
			}});</script>
