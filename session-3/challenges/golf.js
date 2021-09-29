/*
Assuming you have the following: 
 
const names = ["Hole in one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey" , 
"Quit"]; 
const par = 0; 
const strokes = 0; 
 
Return the correct phrase, when par and strokes are: 
 
When Strokes    Phrase 
-------         ----------- 
1               Hole in one 
<= par -2       Eagle 
par - 1         Birdie 
par             Par 
par + 1         Bogey 
par + 2         Double Bogey 
>= par + 3      Quit
*/

const names = [
  "Hole in one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Quit",
];
const par = 0;
const strokes = 0;

let golfResult = (strokes, par) => {
  strokes === 1
    ? console.log(names[0])
    : strokes <= par - 2
    ? console.log(names[1])
    : strokes === par - 1
    ? console.log(names[2])
    : strokes === par
    ? console.log(names[3])
    : strokes === par + 1
    ? console.log(names[4])
    : strokes === par + 2
    ? console.log(names[5])
    : console.log("Quit");
};

golfResult(4, 1);
