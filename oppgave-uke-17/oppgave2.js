const body = document.querySelector("body");

async function fetchAPI() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments/");
  const APIarr = await res.json();
  console.log(APIarr);
  let count = 1;
  APIarr.forEach(element => {
    const div = document.createElement("div")
    const header = document.createElement("h1");
    const subtitle = document.createElement("h4");
    const par = document.createElement("p");
    const num = document.createElement("p");
    header.textContent = element.name;
    subtitle.textContent = element.email;
    par.textContent = element.body;
    num.textContent = count;
    count ++;
    body.appendChild(div);
    div.appendChild(header);
    div.appendChild(subtitle);
    div.appendChild(par);
    div.appendChild(num);
  });
}

window.onload = fetchAPI;

// I stedet for å åpne en fil som tidligere, ønsker vi nå å benytte en ferdiglaget API fra en server et sted. Bruk linken 

// 	https://jsonplaceholder.typicode.com/comments/

// for å hente ned et array med ulike kommentarer. Hver av kommentarene er på formen du ser under: 

// ------------------------------------
// 	{
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   }

// -----------------------------------

//  I stedet for navnet på en fil, bruker vi linken. Altså fetch('https://jsonplaceholder.typicode.com/comments/') 


// a) Bruk fetch() og .then(), og presenter innholdet (JSON) du laster ned via linken på nettsiden.

// b) Bruk fetch() og Async and Await for å hente ned og presentere JSON fra linken

// Siden vi får et array med data (en samling) tilbake, er det naturlig å bruke en løkke for å bla gjennom alle objektene 
// ( .map() eller .forEach() eller tradisjonell for-løkke).