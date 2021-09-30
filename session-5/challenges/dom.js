console.log("Dom is connected");

//console.log(document);

//Selectors
const headingElement = document.getElementById("heading");
console.log(headingElement);

console.log(headingElement.innerHTML);

headingElement.innerHTML = "I just changed you!";

const paragraph = document.querySelector(".paragraph");

console.log(paragraph.innerText);

paragraph.innerText = "Hello World";
