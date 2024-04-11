var randomNumber1 = Math.floor(Math.random() * 20) + 1; //1-20
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 20) + 1; //1-20
console.log(randomNumber2);

var randomDiceImage1 = "Dice" + randomNumber1 + ".png"; //dice1.png - dice20.png
var randomDiceImage2 = "Dice" + randomNumber2 + ".png"; //dice1.png - dice20.png

var randomImageSource1 = "./resources/Dice/" + randomDiceImage1; //images/dice1.png - images/dice20.png
var randomImageSource2 = "./resources/Dice/" + randomDiceImage2; //images/dice1.png - images/dice20.png

console.log(randomImageSource1);
console.log(randomImageSource2);

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// Function to determine the winner and display the result
function displayResult(randomNumber1, randomNumber2) {
  var winner;
  if (randomNumber1 > randomNumber2) {
    winner = 1;
  } else if (randomNumber1 < randomNumber2) {
    winner = 2;
  } else {
    winner = 3;
  }

  if (winner === 1) {
    document.getElementById("result").textContent = "Player 1 wins!";
  }else if(winner === 2){
    document.getElementById("result").textContent = "Player 2 wins!";
  }else {
    document.getElementById("result").textContent = "Its a tie!";
  }
}

// Listen for the load event on both images
image1.addEventListener('load', function() {
  image2.addEventListener('load', function() {
    // Call the function to display the result after both images have loaded
    displayResult(randomNumber1, randomNumber2);
  });
});

// Set the image sources
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);
