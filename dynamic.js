const rollIt = function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let diceNum = document.getElementById("diceNum");
  diceNum.src = `./dices/${randomNumber}.png`;
};
