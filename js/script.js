/* triangle section */
document.getElementById("tri-btn").addEventListener("click", function () {
  const inputFieldB = document.getElementById("tri-input-b").value;
  const inputFieldStringB = parseFloat(inputFieldB);
  const inputFieldH = document.getElementById("tri-input-h").value;
  const inputFieldStringH = parseFloat(inputFieldH);
  const result = 0.5 * inputFieldStringB * inputFieldStringH;
  const areaCal = document.getElementById("area-cal");
  areaCal.innerText = result;
});

/* Rectangle section start  */
document.getElementById("rec-btn").addEventListener("click", function () {
  const inputRecW = document.getElementById("rec-input-w").value;
  const inputRecWString = parseFloat(inputRecW);
  const inputRecI = document.getElementById("rec-input-i").value;
  const inputRecIString = parseFloat(inputRecI);
  const result = inputRecWString * inputRecIString;
  const areaCal = document.getElementById("area-cal");
  areaCal.innerText = result;
});

/* Parallelogram section start */

document.getElementById("para-btn").addEventListener("click", function () {
  const inputParaB = document.getElementById("para-input-b").value;
  const updateInputparaB = parseFloat(inputParaB);
  const inputParaH = document.getElementById("para-input-h").value;
  const updateInputparaH = parseFloat(inputParaH);
  const result = updateInputparaB * updateInputparaH;
  const areaCal = document.getElementById("area-cal");
  areaCal.innerText = result;
});

/* Rhombus section start */
document.getElementById("rhom-btn").addEventListener("click", function () {
  const inputRhomD1 = document.getElementById("rhom-input-d1").value;
  const updateInputRhomD1 = parseFloat(inputRhomD1);
  const inputRhomD2 = document.getElementById("rhom-input-d2").value;
  const updateInputRhomD2 = parseFloat(inputRhomD2);
  const result = 0.5 * updateInputRhomD1 * updateInputRhomD2;
  const areaCal = document.getElementById("area-cal");
  areaCal.innerText = result;
});

/* Pentagon  section start  */
document.getElementById("penta-btn").addEventListener("click", function () {
  const inputPenta = document.getElementById("penta-input").value;
  const newPenta = parseFloat(inputPenta);
  const result = 1.72 * inputPenta * inputPenta;
  const areaCal = document.getElementById("area-cal");
  areaCal.innerText = result;
});

/* Ellipse section start  */
document.getElementById("elli-btn").addEventListener("click", function () {
  const inputElliA = document.getElementById("elli-input-a").value;
  const NumberElliA = parseFloat(inputElliA);
  const inputElliB = document.getElementById("elli-input-b").value;
  const NumberElliB = parseFloat(inputElliB);
  const result = 3.1416 * NumberElliA * NumberElliB;
  const areaCal = document.getElementById("area-cal");
  areaCal.innerText = result;
});
