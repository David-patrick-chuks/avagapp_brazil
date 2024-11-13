import React, { useState, useEffect } from "react";

import { FaCheckCircle } from "react-icons/fa";
import Confetti from "react-confetti";
import { Dialog } from "@material-tailwind/react";
const questionsData = [
  {
    question: "Plants require water, sunlight, and ___ to survive.",
    answer: "co2",
  },
  {
    question: "The Earth revolves around the ___ in our solar system.",
    answer: "sun",
  },
  { question: "The chemical symbol for water is ___", answer: "h2o" },
  {
    question:
      "The process of converting light energy into chemical energy by plants is called ___.",
    answer: "photosynthesis",
  },
  { question: "Humans breathe in oxygen and breathe out ___.", answer: "co2" },
  {
    question: "Sound travels fastest in ___ (solid, liquid, gas).",
    answer: "solid",
  },
];

function FillGame() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setShowModal(false);
  };

  useEffect(() => {
    const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions.slice(0, 5));
  }, []);

  const handleChange = (e) => {
    const maxLength = questions[currentQuestionIndex].answer.length;
    if (e.target.value.length <= maxLength) {
      setUserAnswer(e.target.value.toLowerCase());
    }
  };

  const handleSubmit = () => {
    if (userAnswer.length !== questions[currentQuestionIndex].answer.length)
      return;

    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = userAnswer.trim() === currentQuestion.answer;

    setResults([
      ...results,
      {
        question: currentQuestion.question,
        userAnswer,
        correctAnswer: currentQuestion.answer,
        isCorrect: isAnswerCorrect,
      },
    ]);

    setUserAnswer("");
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setProgress(progress + 20);
        setIsCorrect(null);
      } else {
        setProgress(100);
        setShowModal(true);
        setOpen((prev) => !prev);
      }
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userAnswer, currentQuestionIndex]);

  const resetGame = () => {
    
    setCurrentQuestionIndex(0);
    setResults([]);
    setProgress(0);
    setShowModal(false);
    setOpen((prev) => !prev);

    const shuffledQuestions = questionsData.sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions.slice(0, 5));
  };

  const correctAnswersCount = results.filter(
    (result) => result.isCorrect
  ).length;
  const scorePercentage = (correctAnswersCount / results.length) * 100;

  const shareScore = () => {
    const shareText = `I scored ${scorePercentage}% in the Fill in the Blanks Game! 🎉`;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);
  
    setOpen((prev) => !prev);
    
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center  p-5">
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
      <div className=" rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-start">
          Fill in the Blanks Game
        </h1>
        <div className="w-full flex  bg-gray-300 rounded-full h-4 mb-6">
          <div
            className="bg-main-dark h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          >
            {/* {progress > 0 && (
              <span className="bg-white absolute right-0  rounded-full flex  ">
                <FaCheckCircle className="text-green-500 inline " size={20} />
              </span>
            )} */}
          </div>
        </div>

        <div className=" flex  bg-main-light rounded-lg p-4 w-full justify-center mt-10 ">
          {questions.length > 0 && (
            <p className="text-xl lg:text-4xl  mb-4">
              {questions[currentQuestionIndex].question
                .split("___")
                .map((part, index) => (
                  <span key={index}>
                    {part}
                    {index <
                      questions[currentQuestionIndex].question.split("___")
                        .length -
                      1 && (
                        <input
                          type="text"
                          className="border-b-2 font-semibold border-gray-400 outline-none mx-1 w-16 text-center"
                          maxLength={
                            questions[currentQuestionIndex].answer.length
                          }
                          onChange={handleChange}
                          value={userAnswer}
                        />
                      )}
                  </span>
                ))}
            </p>
          )}
        </div>

        <button
          className={`bg-blue-500 mt-10 text-white py-2 px-4 rounded ${userAnswer.length !== questions[currentQuestionIndex]?.answer.length
              ? "opacity-50 cursor-not-allowed"
              : ""
            }`}
          onClick={handleSubmit}
          disabled={
            userAnswer.length !== questions[currentQuestionIndex]?.answer.length
          }
        >
          Submit Answer
        </button>
      </div>

      {showModal && (
        <>
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
          <Dialog
            open={showModal}
            handler={resetGame}
            size="xs"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            className="border-2 border-main-dark"
            onClick={resetGame}
          >
            <div className="2xl:p-[30px]  justify-center items-center font-num w-[100%]  p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light">
              <img src="/student/congrat.png" className="w-[30%]" />

              <div className="w-full flex flex-col items-center '">
                <p className="text-main-dark font-bold text-3xl">
                  Congratulations
                </p>
                <p className="text-xl m-1 text-[#545454] font-semibold">{`${correctAnswersCount} out of ${results.length} correct!`}</p>
                <p className="text-center ">
                  You've now entered into the GRAND PRIZE of 1 bottle of your
                  choice during tonight's party!...
                </p>
              </div>
              <p className="text-main-dark font-semibold text-2xl ">
                Your score
              </p>
              <p className="text-main-dark font-semibold text-5xl -mt-1">
                {scorePercentage}
              </p>

              <p className="cursor-pointer" onClick={shareScore}>
                <img src="/student/social.png" className="w-28 h-fit" alt="" />
              </p>
            </div>

            {/* <div className="bg-white p-4  lg:p-8 rounded-lg shadow-lg flex justify-center items-center flex-col  w-full ">
              <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
              <p className="mb-4">{`${correctAnswersCount} out of ${results.length} correct!`}</p>
              <p className="mb-4">Your Score: {scorePercentage}%</p>

              <button
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                onClick={resetGame}
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
          */}
          </Dialog>
        </>
      )}
    </div>
  );
}

export default FillGame;
