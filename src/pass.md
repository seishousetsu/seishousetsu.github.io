# Password Enter Site

<input class="pass" type="text" placeholder="Password">
<input class="button" onclick="passcheck()" type="submit" />

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>function passcheck(){
if ($('.pass').val() == "031-12") {
    window.location.href = "031-12.html";
} else {
    $(".pass").val("");
    $('.pass').attr('placeholder', '');
}
}
</script>
