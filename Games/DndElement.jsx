import React, { useState, useEffect } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Confetti from "react-confetti";
const GameTwo = () => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [usedOptions, setUsedOptions] = useState({});
  const [answer, setAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const questions = [
    { question: 'What is the symbol for Carbon?', correctAnswer: 'C', options: ['C', 'Au', 'H', 'Na'] },
    { question: 'What is the symbol for Gold?', correctAnswer: 'Au', options: ['H', 'Au', 'Na', 'C'] },
    { question: 'What is the symbol for Hydrogen?', correctAnswer: 'H', options: ['H', 'Na', 'C', 'Au'] },
    { question: 'What is the symbol for Sodium?', correctAnswer: 'Na', options: ['Na', 'C', 'H', 'Au'] },
    { question: 'What is the symbol for Oxygen?', correctAnswer: 'O', options: ['O', 'N', 'Fe', 'H'] },
  ];

  const getRandomGradient = () => {
    const gradients = [
      'bg-gradient-to-r from-pink-500 to-yellow-500',
      'bg-gradient-to-r from-green-400 to-blue-500',
      'bg-gradient-to-r from-purple-500 to-indigo-500',
      'bg-gradient-to-r from-red-500 to-orange-500',
      'bg-gradient-to-r from-teal-400 to-cyan-500',
    ];
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
  };

  useEffect(() => {
    const shuffledQuestions = [...questions];
    shuffledQuestions.sort(() => Math.random() - 0.5);
    setQuestionsData(shuffledQuestions);
  }, []);

  useEffect(() => {
    setUsedOptions((prev) => ({
      ...prev,
      [phase]: [], // Reset used options for the current phase
    }));
  }, [phase]);

  const DraggableElement = ({ option, id, isUsed, onDragStart }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'option',
      item: { id, option },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));
    const [gradientClass] = useState(getRandomGradient());

    return (
      <div
        ref={drag}
        className={`cursor-pointer p-4 rounded-lg text-white text-center transition duration-200 transform ${
            isDragging || isUsed ? 'opacity-50 bg-gray-400' : gradientClass
          }`}
        onMouseDown={onDragStart}
      >
        {option}
      </div>
    );
  };

  const DroppableBox = ({ onDrop, currentAnswer, onClick }) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: 'option',
      drop: (item) => onDrop(item.option),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));

    return (
      <div
        ref={drop}
        className={`p-6 rounded-lg text-center shadow-md border-2 border-blue-500 ${
          isOver ? 'border-yellow-500' : ''
        } ${currentAnswer ? 'bg-blue-200' : 'bg-white'}`}
        onClick={() => onClick(currentAnswer)}
      >
        {currentAnswer ? currentAnswer : 'Drop the correct answer here'}
      </div>
    );
  };

  const handleDrop = (option) => {
    const currentQuestion = questionsData[currentQuestionIndex];

    if (answer) {
      setUsedOptions((prev) => ({
        ...prev,
        [phase]: prev[phase].filter((opt) => opt !== answer),
      }));
    }

    setAnswer(option);
    setIsAnswered(true);

    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: currentQuestion.question, selectedAnswer: option },
    ]);

    setUsedOptions((prev) => ({
      ...prev,
      [phase]: [...prev[phase], option],
    }));
  };

  const handleRemoveAnswer = (currentAnswer) => {
    if (currentAnswer) {
      setUsedOptions((prev) => ({
        ...prev,
        [phase]: prev[phase].filter((opt) => opt !== currentAnswer),
      }));
      setAnswer('');
    }
  };

  const handleNextPhase = () => {
    if (!answer) return; // Disable the button if there's no answer

    if (phase === 4) {
      setShowModal(true); // Show modal on the last phase
    } else {
      setPhase((prevPhase) => prevPhase + 1);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setAnsweredCorrectly(false);
      setIsAnswered(false);
      setAnswer('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && answer) {
      handleNextPhase();
    }
  };

  const calculateTotalScore = () => {
    const correctAnswers = answers.filter(
      (answer) => answer.selectedAnswer === questionsData.find((q) => q.question === answer.question)?.correctAnswer
    ).length;
    return (correctAnswers / questionsData.length) * 100;
  };
  
  const correctAnswersCount = () => {
    const correctAnswers = answers.filter(
      (answer) => answer.selectedAnswer === questionsData.find((q) => q.question === answer.question)?.correctAnswer
    ).length;
    return correctAnswers 
  };


  const handleReset = () => {
    setScore(0);
    setProgress(0);
    setPhase(1);
    setCurrentQuestionIndex(0);
    setAnsweredCorrectly(false);
    setIsAnswered(false);
    setUsedOptions({});
    setAnswer('');
    setAnswers([]);
    setShowModal(false);
  };

  const currentQuestion = questionsData[currentQuestionIndex];
  const progressPercentage = Math.min(phase * 20, 100);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [answer]);

  const incorrectAnswersList = answers.filter(
    (answer) => answer.selectedAnswer !== questionsData.find((q) => q.question === answer.question)?.correctAnswer
  );

  const shareScore = () => {
    const shareText = `I scored ${calculateTotalScore()}% in the Fill in the Blanks Game! 🎉`;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-100 p-6">
        <div className="max-w-2xl bg-white rounded-lg p-8 space-y-6 shadow-lg">
          <h2 className="text-center text-blue-600 text-2xl mb-4">Phase {phase} - Match the symbol</h2>

          <div className="mb-6">
            <div className="text-blue-600 mb-2">{currentQuestion?.question}</div>
          </div>

          <div className="mb-6">
            <DroppableBox onDrop={handleDrop} currentAnswer={answer} onClick={handleRemoveAnswer} />
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {currentQuestion?.options.map((option, index) => (
              <DraggableElement
                key={index}
                id={index}
                option={option}
                isUsed={usedOptions[phase]?.includes(option)}
              />
            ))}
          </div>

          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-blue-600">Progress: {progressPercentage}%</span>
            </div>
            <div className="flex mb-2">
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-blue-500 transition-all duration-500 text-xs leading-none py-1 text-center text-white rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleNextPhase}
              disabled={!answer} // Disable if no answer is present
              className={`${
                !answer ? ' cursor-not-allowed bg-blue-300/50' : 'bg-blue-600 hover:bg-blue-700'
              } text-white py-2 px-4 rounded`}
            >
              Next Phase
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              tweenDuration={5000}
              // opacity={0.5}
              // recycle={false}
              numberOfPieces={300}
              // initialVelocityX={5}
              // initialVelocityY={10}
              // gravity={0.3}
              // confettiSource={{ x: window.innerWidth / 2, y: 0 }}
              // friction={0.99}
              wind={0.01}
              // colors={["#FF9800", "#FFC107", "#4CAF50", "#2196F3", "#FF5722"]}
            />
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
              <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
              <p className="mb-4">{`${correctAnswersCount()} out of ${questionsData.length} correct!`}</p>
              <p className="mb-4">Your Score: {calculateTotalScore()}%</p>
{/*   
              <h3 className="font-semibold">Incorrect Answers:</h3>
              <ul className="list-disc pl-5 mb-4">
                {results
                  .filter((result) => !result.isCorrect)
                  .map((result, index) => (
                    <li key={index}>
                      {result.question} <br />
                      Your answer: <strong>{result.userAnswer}</strong> | Correct
                      answer: <strong>{result.correctAnswer}</strong>
                    </li>
                  ))}
              </ul>
   */}
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                onClick={handleReset}
              >
                Play Again
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded"
                onClick={shareScore}
              >
                Share Score
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </DndProvider>
  );
};

export default GameTwo;
