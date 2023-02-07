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

    // Only hide a random number of letters in the word, but at least one
    const lettersToHide = Math.max(Math.floor(Math.random() * (randomWord.length - 3)) + 1, 1);
    let newHiddenWord = ""; // Start with an empty string
    for (let i = 0; i < randomWord.length; i++) {
      if (i < lettersToHide) {
        newHiddenWord += " _ ";
      } else {
        newHiddenWord += randomWord[i];
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
      message.error(`Sorry, incorrect guess. The correct word was "${word}"`);
      generateWord();
    }
    setGuess("");

  };

  return (
    <div className="main_div">
      <div className="content-div">
      <h2>Guess the Word</h2>
      <p>Score: {score}</p>
      <p className="pulsate">{hiddenWord}</p>
      <form onSubmit={handleSubmit}>
        <div className="guesser">
        <div className="input-submit-container">
          <input
            type="text"
            className="input"
            value={guess}
            onChange={handleGuess}
            placeholder="Enter your guess"
          />
          <br/>

          <button
            className="button"
            type="submit"
            disabled={word === ""}
          >
            Submit
          </button>
        </div>
        </div>
      </form>
      <br />
      <div>
        <button className="button" onClick={generateWord}>Generate a New Word</button>
      </div>
      </div>
    </div>
  );
  }  

export default App;
