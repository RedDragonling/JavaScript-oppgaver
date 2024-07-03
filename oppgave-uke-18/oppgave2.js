const output = document.querySelector("main");

async function dogImg() {
  const obj = await fetchAPI();
  const img = document.createElement("img");
  img.src = obj.message;
  output.appendChild(img);
}

async function fetchAPI() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return data;
}

window.onload = dogImg;