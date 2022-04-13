# Password Enter Site

<input class="pass" type="text" id="passinput" placeholder="Password">
<input class="button" onclick="passcheck()" id="checkbtn" type="submit" />

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>function passcheck(){
    let passval = $('.pass').val();
if (passval === "031-12") {
    window.location.href = "031-12.html";
} else if (passval.toLowerCase() === "inose" || passval === "猪瀬" || passval === "いのせ" || passval === "イノセ") {
    $(".pass").val("");
    $('.pass').attr('placeholder', '自分の名前入れてどうにかなるものじゃないんですよーw');
    setTimeout(function(){
        $('.pass').attr('placeholder', 'Name X Password ○');
    }, 1000);
}
    $(".pass").val("");
    $('.pass').attr('placeholder', 'Password');
</script>

<script>
var input = document.getElementById("passinput");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    passcheck();
  }
});
</script>
