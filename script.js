const body = document.getElementById("body");
const button = document.querySelectorAll("li");

button.forEach(function (value) {
  value.addEventListener("click", function () {
    let className = this.classList[0];
    let color = "";
    if (className === "red") {
      color = "#ff7675";
    }
    if (className === "green") {
      color = "#55efc4";
    }
    if (className === "blue") {
      color = "#74b9ff";
    }
    if (className === "pink") {
      color = "#fd79a8";
    }
    if (className === "purple") {
      color = "#a29bfe";
    }
    body.style.backgroundColor = color;
  });
});
