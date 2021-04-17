const calcule = document.getElementById('calcule');

function bmi() {
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const results = document.getElementById('results');

  const heightCalc = height / 100;
  const bmiValue = weight / (heightCalc * heightCalc);

  if (name !== '' && height !== '' && weight !== '') {
    let classification = '';
    let minRange = 18.5 * (heightCalc * heightCalc);
    let maxRange = 24.9 * (heightCalc * heightCalc);
    let range = `${minRange.toFixed(2)} to ${maxRange.toFixed(2)}`;

    if (bmiValue > 0 && bmiValue <= 18.5) {
      classification = 'Underweight';
    } else if (bmiValue > 18.5 && bmiValue <= 25) {
      classification = 'Normal';
    } else if (bmiValue > 25 && bmiValue <= 29.9) {
      classification = 'Overweight';
    } else {
      classification = 'Obese';
    }

    if (classification == 'Normal') {
      results.textContent = `${name}, Your BMI is ${bmiValue.toFixed(
        2
      )},  ${classification} category for adults of your height.`;
    } else {
      let fullClassification = ` indicating your weight is in the ${classification}. For your height, a normal weight range would be from ${range} kilograms.`;
      results.textContent = `${name}, Your BMI is ${bmiValue.toFixed(
        2
      )},  ${fullClassification} `;
    }
  } else {
    if (name) {
      results.textContent = `${name}, fill the required fields`;
    } else {
      results.textContent = `Please fill the required fields`;
    }
  }
}

calcule.addEventListener('click', bmi);
