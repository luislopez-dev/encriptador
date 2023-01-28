
var in_box = document.getElementById("in-box");

var out_box = document.getElementById("out-box");

function encrypt() {
  out_box.value = in_box.value.split("").reverse().join("");
}

function decrypt(){
  out_box.value = out_box.value.split("").reverse().join("");
}
