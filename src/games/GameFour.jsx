import { Checkbox, Dialog } from "@material-tailwind/react";
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

const QuizGameTwo = () => {
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
  const shareScore = () => {
    const shareText = `I scored ${score}% in the Fill in the Blanks Game! 🎉`;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);

    setOpen((prev) => !prev);

    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };
  return (

    <div className=" w-full h-full flex p-6">
      <div className=" w-full h-full flex flex-col rounded-lg">
        <div className="  flex gap-5  w-full mb-3 lg:p-2 lg:justify-start justify-start items-center text-white">
          <p className="font-bold lg:text-[20px] text-black">
            Play and Win{" "}
            <img
              src="/student/bulb.png"
              className="inline-block my-auto"
              alt=""
            />
          </p>

          <p className="flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark">
            Total Score: 0
          </p>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-main-dark h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* <h2 className="text-xl mb-8 lg:text-4xl font-bold text-start text-blue-600">
          Multiple Choice Quiz
        </h2> */}
        <p className="text-2xl lg:text-3xl text-center font-bold text-black my-4">
          {currentQuestion?.question}
        </p>

        <div className="lg:flex grid grid-cols-2 w-full h-80 lg:h-64  gap-4 justify-between p-3">
          {currentQuestion?.options.map((option) => (
            <div
              key={option}
              className={`flex items-center  w-full justify-center relative h-full  cursor-pointer p-4 bg-main-light  text-main-dark text-xl lg:text-3xl font-bold rounded-lg mb-2 ${selectedAnswer === option ? 'border-2 border-blue-500' : ''
                }`}
              onClick={() => handleAnswerSelect(option)}
            >
              <span>{option}</span>
              <span className="absolute right-0 top-0">
                <Checkbox
                  ripple={false}
                  checked={selectedAnswer === option}
                  className=" size-5 lg:size-8 rounded-full  border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                />
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-main-dark text-white py-2 px-4 rounded mt-4 w-full"
          disabled={!selectedAnswer}
        >
          {currentQuestionIndex + 1 < questionsData.length
            ? 'Next Question'
            : 'Finish'}
        </button>


        {showModal && (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            tweenDuration={5000}
            numberOfPieces={300}
            wind={0.01}
          />
          <Dialog
            open={showModal}
            handler={handleReset}
            size="xs"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            className="border-2 border-main-dark"
            onClick={handleReset}
          >
            <div className="2xl:p-[30px]  justify-center items-center font-num w-[100%]  p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light">
              <img src="/student/congrat.png" className="w-[30%]" />

              <div className="w-full flex flex-col items-center '">
                <p className="text-main-dark font-bold text-3xl">
                  Congratulations
                </p>
                <p className="text-xl m-1 text-[#545454] font-semibold">{`${score } out of 5 correct!`}</p>
                <p className="text-center ">
                  You've now entered into the GRAND PRIZE of 1 bottle of your
                  choice during tonight's party!...
                </p>
              </div>
              <p className="text-main-dark font-semibold text-2xl ">
                Your score
              </p>
              <p className="text-main-dark font-semibold text-5xl -mt-1">
                {score}
              </p>

              <p className="cursor-pointer" onClick={shareScore}>
                <img src="/student/social.png" className="w-28 h-fit" alt="" />
              </p>
            </div>
          </Dialog>
        </>
      )}
        {/* {showModal && (
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
        )} */}
      </div>
    </div>
  );
};

export default QuizGameTwo;
