let checkBtn = document.querySelector("#check-button");

checkBtn.addEventListener("click", check);

function check() {
  let first = document.getElementById("first-angle").value;
  let second = document.getElementById("second-angle").value;
  let third = document.getElementById("third-angle").value;

  first = Number(first);
  second = Number(second);
  third = Number(third);

  if (first > 0 && second > 0 && third > 0) {
    let sumOfTriangles = first + second + third;
    calculate(sumOfTriangles);
  } else {
    first = 0;
    second = 0;
    third= 0;
    let result = document.getElementById("output")

    result.style.backgroundColor = "black";
    result.style.color = "white"
    result.innerText = "Enter valid inputs"  
  }
}

function calculate(sum) {
  let result = document.getElementById("output")
  if (sum == 180) {
    result.style.backgroundColor = "green";
    result.innerText = "Yay!! These angles make a Triangle";
  } else {
    result.style.backgroundColor = "crimson";
    result.innerText = "Oh no!! These angles doesn't make a Triangle";
  }
}
