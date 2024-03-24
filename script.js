let input_type = document.querySelector("#bill");

let btn = document.querySelector("button");
let output = document.querySelector(".output");

btn.addEventListener("click", calpercent);

function calpercent() {
  let value = input_type.value;
  let tip = value * 0.02;
  output.innerHTML = `the tip is to be ${tip}`
}
