let itemFocado = document.querySelectorAll(".input");
const labelFocada = document.querySelectorAll(".focada");

for (let i in itemFocado) {
  itemFocado[i].addEventListener("focus", () => {
    labelFocada[i].classList.remove("form__label");
    labelFocada[i].classList.add("form__label--focado");
  });
  itemFocado[i].addEventListener("blur", () => {
    if (itemFocado[i].value.length == 0) {
      labelFocada[i].classList.add("form__label");
      labelFocada[i].classList.remove("form__label--focado");
    }
  });
}
