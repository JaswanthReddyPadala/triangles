function check() {
  // alert("checked");
  let length = document.getElementById("length").value;
  let bredth = document.getElementById("bredth").value;

  length = Number(length);
  bredth = Number(bredth);

  //   console.log(length, bredth, third);
  if (length > 0 && bredth > 0) {
    let area = (1 / 2) * (length * bredth);
    let result = document.getElementById("output");
    result.innerText = `Gotcha!! The area of this triangle is ${area}.`;
  } else {
    length = 0;
    bredth = 0;
    third = 0;
    alert("Enter all the values properly!");
  }
}

function calculate(sum) {}
