const resultBox = document.getElementById("results");
function convertTemperatures(){
  resultBox.innerHTML = "";
  const number = Number(document.querySelector("input").value);
  const fahrenheitToCelsius = Math.round(((number - 32) * 5/9)*100)/100;
  const fahrenheitToKelvin = Math.round(((number - 32) * 5/9 + 273.15)*100)/100;
  const celsiusToFahrenheit = Math.round(((number*9/5) + 32)*100)/100;
  const celsiusToKelvin = Math.round((number + (27315/100))*100)/100;
  // console.log(celsiusToKelvin);
  const tempConversionString = [
    `${number} grader Fahrenheit tilsvarer ${fahrenheitToCelsius} grader Celsius, og ${fahrenheitToKelvin} grader Kelvin`,
    `${number} grader Celsius tilsvarer ${celsiusToFahrenheit} grader Fahrenheit, og ${celsiusToKelvin} grader Kelvin`
  ];
  tempConversionString.forEach(element => {
    const para = document.createElement("p")
    para.textContent = element;
    resultBox.appendChild(para);
  });
}