let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const defColor = value.style.color;

btns[0].addEventListener("click", function () {
  count -= 1;
  value.textContent = count;
  if (count < 0) {
    value.style.color = "red";
  } else if (count == 0) {
    value.style.color = defColor;
  }
});

btns[1].addEventListener("click", function () {
  count = 0;
  value.textContent = count;
  value.style.color = defColor;
});

btns[2].addEventListener("click", function () {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  } else if (count == 0) {
    value.style.color = defColor;
  }
});
