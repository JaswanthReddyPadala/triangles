function check() {
  let base = document.getElementById("base").value;
  let height = document.getElementById("height").value;

  if (base > 0 && height > 0) {
    let area = (1 / 2) * (base * height);
    let result = document.getElementById("output");
    result.innerText = `Gotcha!! The area of this triangle is ${area}.`;
  } else {
    base.value = 0;
    height.value = 0;
    alert("Enter all the values properly!");
  }
}