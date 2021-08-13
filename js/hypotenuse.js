let checkBtn = document.querySelector("#check-button");

checkBtn.addEventListener("click", check);

function check() {
  // alert("checked");
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;

  first = Number(first);
  second = Number(second);

  //   console.log(first, second, third);
  if (first > 0 && second > 0) {
    let hypotenuse = Math.sqrt(first * first + second * second).toFixed(2);
    let result = document.getElementById("output");
    result.innerText = `Gotcha!! The hypotenuse of this triangle is ${hypotenuse}.`;
  } else {
    first = 0;
    second = 0;
    third = 0;
    alert("Enter all the values properly!");
  }
}

function calculate(sum) {}
