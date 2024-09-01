const btn = document.getElementById("input-btn");
btn.addEventListener("click", () => {
  // Retrieve the values inside the event listener
  // before button clicked the values are empty and thats why we add them in event listener
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const outputTitle = document.getElementById("output-title");
  const output = document.getElementById("output");
  const bmiDescription = document.getElementById("bmi-description");
  const outputValue = document.querySelector(".output-value");

  // Convert height to meters
  const heightM = height / 100;
  // Calculate BMI
  const bmi = weight / (heightM * heightM);
  outputTitle.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
  var gradientClass = "";
  var resultFunny = "";
  if (bmi < 18.5) {
    result = "Underweight";
    resultFunny =
      "Congratulations! You're officially a walking skeleton. Time to hit the buffet and stop auditioning for the role of Human Hangar!";
    gradientClass = "bg-gradient-to-r from-[#FFEFD5] to-[#FFE4B5]";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = "Normal";
    resultFunny =
      "You're in the 'healthy weight' zone, but don’t get too comfy! One too many donuts and you’ll be auditioning for the next reality show: 'Extreme Makeover: Weight Gain Edition!";
    gradientClass = "bg-gradient-to-r from-[#D0f0c0] to-[#90ee90]";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = "Overweight";
    resultFunny =
      "Welcome to the 'fluffy' club! You’re just a few pizza slices away from being the star of 'My 600-lb Life.' Better start jogging, or at least waddle a little faster!";
    gradientClass = "bg-gradient-to-r from-[#FFB6C1] to-[#FF69B4]";
  } else {
    result = "Obese";
    resultFunny =
      "You’ve reached the 'cuddle-friendly' level! At this rate, you might need a forklift to get out of bed. Time to swap those snacks for some veggies—unless you’re trying to become a human beanbag chair!";
    gradientClass = "bg-gradient-to-r from-[#FFB6C1] to-[#FF0000]";
  }
  output.className = "p-4 rounded-md  font-medium " + gradientClass; // Set gradient class
  outputValue.textContent = result;
  bmiDescription.textContent = resultFunny;
});
