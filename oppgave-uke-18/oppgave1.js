const output = document.querySelector("main");

async function catFact() {
  const obj = await fetchAPI();
  const p = document.createElement("p");
  p.textContent = obj.fact;
  output.appendChild(p);
}

async function fetchAPI() {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  return data;
}

window.onload = catFact;