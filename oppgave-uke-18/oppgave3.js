const output = document.getElementById("output");
const button = document.getElementById("button");

button.addEventListener("click", getInput);

async function getInput(){
  const input = document.getElementById("name-input").value;
  const name = await fetchAPI(input);
  output.innerHTML = "";
  console.log(name);
  const prob = Math.round((name.probability) * 100);

  const header = document.createElement("h3");
  const gender = document.createElement("h4");
  const p = document.createElement("p");
  header.textContent = `Name: ${name.name}`;
  if (name.gender == "male"){
    gender.textContent = name.gender;
    gender.classList.add("male");
  } else if (name.gender == "female"){
    gender.textContent = name.gender;
    gender.classList.add("female");
  } else {
    gender.textContent = name.gender;
  }
  p.textContent = `Probability: ${prob}%`;
  output.appendChild(header);
  output.appendChild(gender);
  output.appendChild(p);
}

async function fetchAPI(name) {
  const res = await fetch("https://api.genderize.io/?name=" + name);
  const data = await res.json();
  return data;
}