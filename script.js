const error = document.getElementsByClassName("email-check");
const input = document.querySelectorAll("input");

const btn = document.querySelectorAll("button");

btn[0].addEventListener("click", clickFirstButton);
btn[1].addEventListener("click", clickSecondButton);

function clickFirstButton() {
  const pattern = (input.pattern = ".+@mail.com");
  const inputValue = input.value;

  const regex = new RegExp(pattern);
  const isValid = regex.test(inputValue);

  if (isValid) {
    input[0].classList.remove("border-red");
    error[0].classList.remove("error");
  } else {
    input[0].classList.add("border-red");
    error[0].classList.add("error");
  }
}

function clickSecondButton() {
  const pattern = (input.pattern = ".+@mail.com");
  const inputValue = input.value;

  const regex = new RegExp(pattern);
  const isValid = regex.test(inputValue);

  if (isValid) {
    error[1].classList.remove("error");
  } else {
    error[1].classList.add("error");
  }
}
