const calcule = document.getElementById('calcule');

function bmi() {
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const results = document.getElementById('results');

  const heightCalc = height / 100;
  const bmiValue = (weight / (heightCalc * heightCalc)).toFixed(1);

  if (name !== '' && height !== '' && weight !== '') {
    let classification = '';
    let minRange = 18.5 * (heightCalc * heightCalc).toFixed(1);
    let maxRange = 24.9 * (heightCalc * heightCalc).toFixed(1);
    let range = `${minRange} to ${maxRange}`;

    if (bmiValue <= 18.4) {
      classification = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      classification = 'Normal';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      classification = 'Overweight';
    } else {
      classification = 'Obese';
    }

    if (classification == 'Normal') {
      results.textContent = `${name}, Your BMI is ${bmiValue},  ${classification} category for adults of your height.`;
    } else {
      let fullClassification = ` indicating your weight is in the ${classification}. For your height, a normal weight range would be from ${range} kilograms.`;
      results.textContent = `${name}, Your BMI is ${bmiValue},  ${fullClassification} `;
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
