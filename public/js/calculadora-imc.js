function calculateBMI() {
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;

  let bmi = weight / (height / 100 * height / 100);

  let classification;
  let obesity;

  if (bmi < 18.5) {
    classification = "Magreza";
    obesity = 0;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification = "Normal";
    obesity = 0;
  } else if (bmi >= 25 && bmi <= 29.9) {
    classification = "Sobrepeso";
    obesity = "I";
  } else if (bmi >= 30) {
    classification = "Obesidade";
    obesity = "II";
  }

  document.querySelector("#imcVisor").innerHTML = `Classificação: 
  ${classification} 
  grau: ${obesity} 
  Seu IMC é ${bmi.toFixed(2)}`;

  setTimeout(function() {
    document.querySelector("#imcVisor").innerHTML = "";
  }, 5000);
}
