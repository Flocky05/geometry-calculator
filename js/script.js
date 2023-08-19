/* triangle section */
document.getElementById("tri-btn").addEventListener("click", function () {
  const inputFieldB = document.getElementById("tri-input-b").value;
  const inputFieldStringB = parseInt(inputFieldB);
  const inputFieldH = document.getElementById("tri-input-h").value;
  const inputFieldStringH = parseInt(inputFieldH);
  const result = inputFieldStringB * inputFieldStringH;
  console.log(result);
});
