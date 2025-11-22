// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання.
// Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const inpt = document.querySelector("#name-input");

const spn = document.querySelector("#name-output");

inpt.addEventListener("input", (event) => {
  if (event.target.value.trim() === "") {
    spn.textContent = "Anonymous";
  } else {
    spn.textContent = event.target.value.trim();
  }
});
