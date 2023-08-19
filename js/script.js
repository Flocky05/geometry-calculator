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
