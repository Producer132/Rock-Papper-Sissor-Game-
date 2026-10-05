import { useState } from "react";

export function Game() {
  const moves = ["rock", "paper", "scissors"];

  const getRandomMove = () => {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };

  const [playerMove, setPlayerMove] = useState<string | null>(null);

  const [computerMove, setComputerMove] = useState<string>(() => {
    return getRandomMove();
  });

  const [result, setResult] = useState<string | null>(null);

  function playGame(userChoice: string) {
    if (playerMove !== null) return;

    setPlayerMove(userChoice);

    if (userChoice === computerMove) {
      setResult("It's a tie!");
    } else if (
      (userChoice === "rock" && computerMove === "scissors") ||
      (userChoice === "paper" && computerMove === "rock") ||
      (userChoice === "scissors" && computerMove === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  }

  function resetGame() {
    setPlayerMove(null);
    setResult(null);
    setComputerMove(getRandomMove());
  }

  return (
    <div className="Game">
      <h1>Rock Paper Scissors</h1>

      <p>Your move: {playerMove || "Choose"}</p>

      <button onClick={() => playGame("rock")}>
        🪨 Rock
      </button>

      <button onClick={() => playGame("paper")}>
        📄 Paper
      </button>

      <button onClick={() => playGame("scissors")}>
        ✂️ Scissors
      </button>

      <p>
        Computer move: {playerMove ? computerMove : "???"}
      </p>

      <p>Result: {result || "Waiting..."}</p>

      <button onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}