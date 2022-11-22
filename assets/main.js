const circulo = document.querySelectorAll(".circle");
const previos = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const activos = document.querySelectorAll(".active");
let Numero = 1 /*No Puede ser 0 , debido a que solo hay 3 steps 1+1=2 , 2+1=3 y 3+1=4 */

// Progreción o decreción

next.addEventListener('click', () => {
    Numero++;
    if (Numero > circulo.length) {
        Numero = circulo.length
    }
    actualizado();
});

previos.addEventListener('click', () => {
    Numero--;
    if (Numero < 1) {
        Numero = 1;
    }
    actualizado();
});

// ACC

const actualizado = () => {
    circulo.forEach((circle, i) => {
        if (i < Numero) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active")
        }
    });

//  Progress Step Bar

progress.style.width = 
    ((Numero - 1) / (circulo.length - 1)) * 100 + "%";
  if (Numero === 1) {
    previos.disabled = true;
  } else if (Numero === circulo.length) {
    next.disabled = true;
  } else {
    previos.disabled = false;
    next.disabled = false;
  }
};
