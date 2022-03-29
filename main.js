let a = document.querySelector(".text");
let alphabet = /[a-z]/i;

function insert(num) {
  a.value = a.value + num;
}

function zero(num) {
  if (a.value == "") {
    a.value = "";
  } else {
    a.value = a.value + num;
  }
}

function result() {
  if (a.value.match(alphabet)) {
    a.value = "";
    alert("hatalı giriş");
  }
  let result = a.value;
  if (result) {
    a.value = eval(result);
  }
}

function c() {
  a.value = "";
}
