const findLengthButton = document.getElementById("find-length");
const convertAllCapsButton = document.getElementById("convert-all-caps");
const convertNoCapButton = document.getElementById("convert-no-cap");
const outputField = document.getElementById("utskrift");

findLengthButton.addEventListener("click", ()=> {
  const inputField = document.getElementById("input-field").value;
  outputField.innerHTML = `Lengden er ${inputField.length}`;
  // console.log("find length");
});

convertAllCapsButton.addEventListener("click", ()=> {
  const inputField = document.getElementById("input-field").value;
  outputField.innerHTML = inputField.toUpperCase();
  // console.log("convert to all caps");
});

convertNoCapButton.addEventListener("click", ()=> {
  const inputField = document.getElementById("input-field").value;
  outputField.innerHTML = inputField.toLowerCase();
  // console.log("convert to no caps");
});

// "Finn lengde"	"Gjør om til store bokstaver"	"Gjør om til små bokstaver"		