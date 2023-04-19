const cartas = [
  { valor: 1, name: "as" },
  { valor: 2, name: "dos" },
  { valor: 3, name: "tres" },
  { valor: 4, name: "cuatro" },
  { valor: 5, name: "cinco" },
  { valor: 6, name: "seis" },
  { valor: 7, name: "siete" },
  { valor: 8, name: "ocho" },
  { valor: 9, name: "nueve" },
  { valor: 10, name: "diez" },
  { valor: 11, name: "jota" },
  { valor: 12, name: "reina" },
  { valor: 13, name: "rey" },
];
const deck = [];
const totalDeck = (palo) => {
  for (i = 0; i < carta.length; i++) {
    deck.push({
      symbol: palo,
      valor: carta[i].valor,
    });
  }
};

totalDeck("hearts");
totalDeck("spades");
totalDeck("clovers");
totalDeck("diamonds");

console.log(deck);

let randomNumber = Math.floor(Math.random() * deck.length);
let randomNumber2 = Math.floor(Math.random() * deck.length);

const myCard = deck[randomNumber];
const computerCard = deck[randomNumber2];

console.log(myCard);
console.log(computerCard);

const playGame = () => {
  alert(`Tu carta es ${myCard}`);

  let question = prompt(
    "¿Es la carta del ordenador mayor o menor que la tuya? Escribe mayor o menor."
  );

  if (mycard > computerCard && question === "mayor") {
    alert("¡Felicidades, has ganado!");
  } else if (myCard < computerCard && question === "menor") {
    alert("¡Una pena, has perdido!");
  }

  returnGame();
};

playGame();

const returnGame = () => {
  prompt("Quieres jugar otra ronda?(yes/no)");
  if (returnGame === "yes") {
    playGame();
  } else if (returnGame === "no") {
    alert("¡Hasta pronto!");
  }
};
returnGame();
