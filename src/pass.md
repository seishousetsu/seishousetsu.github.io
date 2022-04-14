# Password Enter Site

<input class="pass" type="text" id="passinput" placeholder="Password">
<input class="button" onclick="passcheck()" id="checkbtn" type="submit" />

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
const inoselist = ["猪瀬", "猪せ", "猪セ", "いの瀬", "イノ瀬", "いノ瀬", "イの瀬", "いのせ", "イノセ", "イのせ", "いノせ", "いのセ", "イノせ", "いノセ", "イのセ"];
function passcheck(){
    if ($('.pass').val() === "031-12") {
        window.location.href = "031-12.html";
    } else if (inoselist.some(v => $('.pass').val().includes(v))) {
        $(".pass").val("");
        $('.pass').attr('placeholder', '自分の名前入れられても…w');
        setTimeout(function(){
            $('.pass').attr('placeholder', 'Name X Password ○');
        },1000);
    } else {
        $(".pass").val("");
        $('.pass').attr('placeholder', 'Password');
    }
}
</script>

<script>
var input = document.getElementById("passinput");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    passcheck();
  }
});
</script>
