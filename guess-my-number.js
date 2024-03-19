let secretNumber = generateAnswerNumber();
let score = 20;
let highscore = 20;
let lost;

function generateAnswerNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function ValidateGuessNumber() {
  if (
    !(
      document.getElementById("input").value >= 1 &&
      document.getElementById("input").value <= 10
    )
  ) {
    document.getElementById("result-guess").textContent =
      "Guess a number between 1 and 10!";
    return false;
  } else {
    return true;
  }
}

function checkGuess() {
  const isGuessing = document.getElementById("check").textContent == "Check!";
  const isTryAgain =
    document.getElementById("check").textContent == "Try Again!";
  let guess = document.getElementById("input").value;

  if (!isGuessing && !lost) secretNumber = generateAnswerNumber();

  if (isGuessing) {
    if (ValidateGuessNumber()) {
      if (guess == secretNumber) {
        document.getElementById("result-guess").textContent = "✅ You win!";
        score += 2;
        document.getElementById("check").textContent = "Again!";
      } else if (guess > secretNumber) {
        document.getElementById("result-guess").textContent = "📈 Too high!";
        score--;
      } else if (guess < secretNumber) {
        document.getElementById("result-guess").textContent = "📉 Too low!";
        score--;
      }
    }
    if (score == 0) {
      document.getElementById("result-guess").textContent = "📛 You lose!";
      document.getElementById("check").textContent = "Try Again!";
    }
  } else {
    if (isTryAgain) score = 20;
    document.getElementById("check").textContent = "Check!";
    document.getElementById("input").value = "";
    document.getElementById("correct-number").textContent = "?";
    document.getElementById("result-guess").textContent = "Start guessing...";
  }
  document.getElementById("score").textContent = "💯 Score: " + score;
  if (score > highscore)
    document.getElementById("highscore").textContent = "🏆 Highscore: " + score;
}
