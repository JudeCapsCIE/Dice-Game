var randomNumber1 = Math.floor(Math.random() * 20) + 1; //1-20
console.log(randomNumber1);

var randomDiceImage = "Dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "./resources/Dice/" + randomDiceImage; //images/dice1.png - images/dice6.png

console.log(randomImageSource)

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var image2 = document.querySelectorAll("img")[0];

image2.setAttribute("src", randomImageSource);