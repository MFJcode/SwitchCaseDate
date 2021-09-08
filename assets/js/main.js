
const h1 = document.querySelector('.container h1'); 
const dataNova = new Date();
h1.innerHTML = dataNova.toLocaleString('en-US', { dateStyle: "full", timeStyle: "short"}); 




