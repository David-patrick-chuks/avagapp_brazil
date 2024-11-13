import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// Array of words and questions
const words = [
  "APPLE", "BANANA", "ORANGE", "GRAPE",
  "MANGO", "PEAR", "KIWI", "APPLE",
  "CHERRY", "LEMON", "GRAPE", "LEMON",
  "BANANA", "PLUM", "KIWI", "APPLE"
];

const questions = [
  { word: "APPLE", answer: 3 },
  { word: "BANANA", answer: 2 },
  { word: "ORANGE", answer: 1 },
  { word: "GRAPE", answer: 2 },
  { word: "MANGO", answer: 1 }
];

const WordHuntGame = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [inputValues, setInputValues] = useState(Array(5).fill(''));
  const [progress, setProgress] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // Shuffle function to randomize words
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValues(prevValues => {
        const newValues = [...prevValues];
        newValues[index] = value;
        return newValues;
      });
    }
  };

  const handleNextPhase = () => {
    if (inputValues[currentPhase] !== '') {
      setProgress(progress + 20);
      if (currentPhase < questions.length - 1) {
        setCurrentPhase(currentPhase + 1);
      }
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (parseInt(inputValues[index]) === question.answer) {
        correctAnswers++;
      }
    });
    const scorePercentage = (correctAnswers / questions.length) * 100;
    setFinalScore(scorePercentage);
    setShowModal(true);
    setIsGameOver(true);

    // Update progress to 100% when the game ends
    setProgress(100);
  };

  // Generate a random 4x4 bento grid with shuffled words
  const generateBentoGrid = () => {
    const shuffledWords = shuffleArray(words); // Shuffle words before creating grid
    const grid = [];
    for (let i = 0; i < 4; i++) {
      grid.push(shuffledWords.slice(i * 4, i * 4 + 4));
    }
    return grid;
  };

  const bentoGrid = generateBentoGrid();
  const currentQuestion = questions[currentPhase];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Word Hunt Game</h2>

      {/* Bento Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {bentoGrid.map((row, rowIndex) =>
          row.map((word, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-24 h-24 flex items-center justify-center border bg-gray-100 hover:bg-indigo-100 p-4 rounded-lg text-lg font-semibold"
            >
              {word}
            </div>
          ))
        )}
      </div>

      {/* Current Question */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          How many times does the word <strong>{currentQuestion.word}</strong> appear in the board?
        </h3>

        {/* Input for the user answer */}
        <input
          type="text"
          value={inputValues[currentPhase]}
          onChange={(e) => handleInputChange(e, currentPhase)}
          className="w-24 text-center p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter a number"
        />
      </div>

      {/* Next Button or Submit Button */}
      <div className="flex justify-between">
        {currentPhase === questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={inputValues[currentPhase] === ''}
            className={`p-2 text-white rounded-lg bg-green-500 hover:bg-green-600 ${inputValues[currentPhase] === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNextPhase}
            disabled={inputValues[currentPhase] === ''}
            className={`p-2 text-white rounded-lg bg-blue-500 hover:bg-blue-600 ${inputValues[currentPhase] === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next Question
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <p>Progress: {progress}%</p>
        <div className="w-full flex bg-gray-200 h-4 rounded-full">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div><FaCheckCircle className='inline -ml-3'/>
        </div>
      </div>
      
      {/* Final Score Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h3 className="text-2xl font-semibold mb-4">Congratulations!</h3>
            <p className="text-xl">Your final score is: {finalScore}%</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordHuntGame;
