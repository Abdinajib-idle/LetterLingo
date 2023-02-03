import React, { useState } from "react";
import randomWords from "random-english-words";
import './index.css';
import { message } from 'antd';

function App() {
  // State to store the word
  const [word, setWord] = useState("");

  // State to store the hidden word
  const [hiddenWord, setHiddenWord] = useState("");

  // State to store the user's guess
  const [guess, setGuess] = useState("");

  // State to store the score
  const [score, setScore] = useState(0);

  // Function to generate a random word
  const generateWord = () => {
    const randomWord = randomWords();
    setWord(randomWord);

    // Only hide 2 letters in the word
    let newHiddenWord = randomWord;
    let count = 0;
    while (count < 2) {
      const randomIndex = Math.floor(Math.random() * newHiddenWord.length);
      if (newHiddenWord[randomIndex] !== "_") {
        newHiddenWord =
          newHiddenWord.slice(0, randomIndex) +
          " _ " +
          newHiddenWord.slice(randomIndex + 1);
        count++;
      }
    }
    setHiddenWord(newHiddenWord);
  };

  // Function to handle the user's guess
  const handleGuess = (e) => {
    setGuess(e.target.value);
  };

  // Function to submit the user's guess
  const handleSubmit = (e) => {
    e.preventDefault();
    if (word === guess) {
      message.success("You got it!");
      setScore(score + 1);
      generateWord();
    } else {
      message.error("Sorry, incorrect guess");
    }
    setGuess("");
  };

  return (
    <div className="main_div">
      <div className="content-div">
      <h1>Guess the Word</h1>
      <p>Score: {score}</p>
      <p className="pulsate">{hiddenWord}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={guess}
          onChange={handleGuess}
          placeholder="Enter your guess"
        />
        <br />
        <br />
        <button
          className="button"
          type="submit"
          disabled={word === ""}
        >
          Submit
        </button>
      </form>
      <br />
      <div>
        <button onClick={generateWord}>Generate a New Word</button>
      </div>
      </div>
    </div>
  );
}

export default App;
