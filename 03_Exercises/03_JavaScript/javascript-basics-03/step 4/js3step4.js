

var passwd = document.querySelector("#password");
var conf = document.querySelector("#confirmation");
var button = document.querySelector("button");

var border = function () {

  if (passwd.value != conf.value) {
    passwd.style.border = "2px solid red";
    conf.style.border = "2px solid red";
  }
}
button.addEventListener("click", border);