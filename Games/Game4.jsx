import { Checkbox } from "@material-tailwind/react";
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const multipleChoiceQuestions = [
  {
    question: 'Which planet is known as the Red Planet?',
    correctAnswer: 'Mars',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
  },
  {
    question: 'What is the largest mammal in the world?',
    correctAnswer: 'Blue Whale',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Shark'],
  },
  {
    question: 'Which language is primarily spoken in Brazil?',
    correctAnswer: 'Portuguese',
    options: ['Spanish', 'Portuguese', 'French', 'English'],
  },
  {
    question: 'What is the capital city of Japan?',
    correctAnswer: 'Tokyo',
    options: ['Osaka', 'Kyoto', 'Tokyo', 'Nagoya'],
  },
  {
    question: 'Which element has the chemical symbol "O"?',
    correctAnswer: 'Oxygen',
    options: ['Osmium', 'Oxygen', 'Gold', 'Silver'],
  },
];

const  QuizGameTwo = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0); // Progress state

  useEffect(() => {
    // Shuffle questions initially
    const shuffledQuestions = [...multipleChoiceQuestions].sort(() => Math.random() - 0.5);
    setQuestionsData(shuffledQuestions);
  }, []);

  const currentQuestion = questionsData[currentQuestionIndex];

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Update progress (each question is a percentage of total questions)
    setProgress(((currentQuestionIndex + 1) / multipleChoiceQuestions.length) * 100);

    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      setShowModal(true);
    }
  };

  const handleReset = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setProgress(0);
    setShowModal(false);
  };

  return (

    <div className=" w-full h-full bg-orange-600 flex p-6">
      <div className=" w-full h-full flex flex-col bg-green-600 rounded-lg">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2 className="text-2xl font-bold text-center text-blue-600">
          Multiple Choice Quiz
        </h2>
        <p className="text-lg text-center text-gray-700 mb-4">
          {currentQuestion?.question}
        </p>

        <div className="flex w-full h-32 bg-red-600 gap-4 justify-between p-3">
          {currentQuestion?.options.map((option) => (
            <div
              key={option}
              className={`flex items-center w-full relative h-full justify-between cursor-pointer p-4 bg-main-light  text-gray-800 rounded-lg mb-2 ${
                selectedAnswer === option ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => handleAnswerSelect(option)}
            >
              <span>{option}</span>
              <Checkbox
                ripple={false}
                checked={selectedAnswer === option}
                className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white py-2 px-4 rounded mt-4 w-full"
          disabled={!selectedAnswer}
        >
          {currentQuestionIndex + 1 < questionsData.length
            ? 'Next Question'
            : 'Finish'}
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <Confetti />
            <div className="bg-white p-8 rounded-lg shadow-lg  text-center">
              <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
              <p className="mb-4">
                Your Score: {score} / {questionsData.length}
              </p>
              <button
                onClick={handleReset}
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default  QuizGameTwo;
