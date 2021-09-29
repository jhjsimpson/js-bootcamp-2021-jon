const album = {
  title: "21",
  artist: "Adele",
  year: 2000,
  songs: [
    {
      name: "Hello",
    },
    {
      name: "Rolling the deep",
    },
  ],
  info() {
    return `${this.title} was created by ${this.artist}`;
  },
};

console.log(album);

// access properties using DOT notation:
console.log(`Artist is ${album.artist}`);
console.log(album.info());

// JSON:
const product = {
  name: "Samsung TV",
  saleItem: false,
  dimensions: [
    {
      width: 1220,
      height: 900,
    },
  ],
  info() {
    return `${this.name}'s are great!`;
  },
};

let productAsStr = JSON.stringify(product); //, null, 2);
console.log(productAsStr);

// JSON back to JSON Object:
let productBackAsObj = JSON.parse(productAsStr);
console.log(productBackAsObj);

// You can also create an object EXPLICITLY using the 'new'
// keyword and the Object Class.
let car = new Object();
car.model = "Ford";
console.log(car);

// -------------------------------------------

// Session 3:

const firstName = "Bob Smith";

console.log(firstName.length);

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

const bob = firstName.substr(0, firstName.length);
console.log(bob);

const phoneNumber = "032-424-234-234";
const phoneParts = phoneNumber.split("-");
console.log(phoneNumber, " => ", phoneParts);

const emailAddress = "foo@bar.com";

const indexOfAtSymbol = emailAddress.indexOf("@"); //.indexOf("$");
console.log(indexOfAtSymbol);

// Arrays:

// High Order Functions - Is a function, that takes another function as an
// argument, or returns a function as it's result

const countries = [
  "england",
  "france",
  "germany",
  "spain",
  "zimbabwe",
  "italy",
];

const matchedCountries = countries.filter(function (country) {
  return country.startsWith("z");
});

console.log("Matched", matchedCountries);

// ES6:

// implied return and no need for explicit function definition:
const meditteranian = countries.filter((country) => country.startsWith("s"));
console.log(meditteranian);

// MAP:
const people = [
  { name: "Boris Johnson", title: "He has no clue" },
  { name: "Wacko Jacko", title: "Slides everywhere" },
];

const peopleWithDateCreation = people.map(function (person) {
  return {
    name: person.name.toUpperCase(),
    title: person.title,
    dateCreated: new Date(),
  };
});

console.log(peopleWithDateCreation);

// ES6:
const es6People = people.map((person) => {
  return {
    name: person.name.toUpperCase(),
    title: person.title,
    dateCreated: new Date(),
  };
});

console.log("Es6 example", es6People);

// SOME
const fruits = ["apple", "pear", "grape"];

const fruitResult = fruits.some(function (fruit) {
  return fruit === "apple";
});

console.log("es5 fruitResult", fruitResult);

// ES6:

const es6FruitResult = fruits.some((fruit) => fruit === "apple");
console.log("es6FruitResult", es6FruitResult);

// SOME with objects:

const footballTeams = [
  {
    name: "Manchester United",
    nationalities: ["Portugese", "English", "French"],
  },
  {
    name: "Liverpool",
    nationalities: ["Egyptian", "Brazilian"],
  },
];

const hasEnglishPlayers = footballTeams.some((team) => {
  return team.nationalities.includes("Japanese");
});

console.log("hasEnglishPlayers", hasEnglishPlayers);

// SORT

// ----- missing

// Push:

const places = [];

places.push({
  name: "Barcelona",
  population: 10_000_000,
});

console.log(places);

places.push({
  name: "Bristol",
  population: 2_000_000,
});

console.log("Places after Bristol added", places);

// Pop
const bristol = places.pop();
console.log("Last place", bristol);

console.log();

// Shift

places.push({
  name: "Lisbon",
  population: 23_000_000,
});

console.log(places);

console.log(places.shift());

// Unshift
