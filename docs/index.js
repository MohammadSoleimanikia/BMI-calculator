const btn = document.getElementById("input-btn");
const outputTitle = document.getElementById("output-title");
// to add gradient to it
const output = document.getElementById("output");
const bmiDescription = document.getElementById("bmi-description");
const outputValue = document.querySelector(".output-value");

function calculateIdealWeight(height) {
  // Convert height from centimeters to meters
  const heightM = height / 100;

  // Calculate ideal weight for BMI of 18.5
  const idealWeightLow = 18.5 * (heightM * heightM);

  // Calculate ideal weight for BMI of 24.9
  const idealWeightHigh = 24.9 * (heightM * heightM);

  return {
    low: idealWeightLow.toFixed(2), // Ideal weight for BMI of 18.5
    high: idealWeightHigh.toFixed(2), // Ideal weight for BMI of 24.9
  };
}

btn.addEventListener("click", () => {
  // Retrieve the values inside the event listener
  // before button clicked the values are empty and thats why we add them in event listener
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);

  // Convert height to meters
  const heightM = height / 100;
  // Calculate BMI
  const bmi = (weight / (heightM * heightM)).toFixed(2);
  outputTitle.textContent = `Your BMI is: ${bmi}`;
//   add different gradient for each type of bmi
  var gradientClass = "";
  if (bmi < 18.5) {
    result = "Underweight";
    gradientClass = "bg-gradient-to-r from-[#FFEFD5] to-[#FFE4B5]";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = "Normal";
    gradientClass = "bg-gradient-to-r from-[#D0f0c0] to-[#90ee90]";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = "Overweight";
    gradientClass = "bg-gradient-to-r from-[#FFB6C1] to-[#FF69B4]";
  } else {
    result = "Obese";
    gradientClass = "bg-gradient-to-r from-[#FFB6C1] to-[#FF0000]";
  }
  output.className = "p-4 rounded-md  font-medium " + gradientClass; // Set gradient class
  outputValue.textContent = result;

//   calculate ideal weight
  let idealWeight=calculateIdealWeight(height);
  bmiDescription.textContent =`Your ideal weight is between ${idealWeight.low} and ${idealWeight.high}`;
});
