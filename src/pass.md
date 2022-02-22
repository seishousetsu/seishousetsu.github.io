# Password Enter Site

<input class="pass" type="text" id="passinput" placeholder="Password">
<input class="button" onclick="passcheck()" id="checkbtn" type="submit" />

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>function passcheck(){
if ($('.pass').val() == "031-12") {
    window.location.href = "031-12.html";
} else {
    $(".pass").val("");
    $('.pass').attr('placeholder', 'Password');
}
}
</script>

<script>
    // Get the input field
var input = document.getElementById("passinput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    passcheck()
  }
});
