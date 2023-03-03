let itemFocado = document.querySelectorAll(".input");
const labelFocada = document.querySelectorAll(".focada");

itemFocado.forEach(function (valor, chave) {
  valor.addEventListener("focus", () => {
    labelFocada[chave].classList.remove("form__label");
    labelFocada[chave].classList.add("form__label--focado");
  });
  valor.addEventListener("blur", () => {
    if (valor.value.length === 0) {
      labelFocada[chave].classList.add("form__label");
      labelFocada[chave].classList.remove("form__label--focado");
    }
  });
});
