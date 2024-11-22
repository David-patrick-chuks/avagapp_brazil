import React, { useEffect, useState } from "react";

import { Dialog } from "@material-tailwind/react";
import Confetti from "react-confetti";

const questionsData = [
  {
    question: "As plantas precisam de água, luz solar e ___ para sobreviver.",
    answer: "co2",
  },
  {
    question: "A Terra gira ao redor do ___ no nosso sistema solar.",
    answer: "sol",
  },
  { question: "O símbolo químico da água é ___", answer: "h2o" },
  {
    question:
      "O processo de conversão de energia luminosa em energia química pelas plantas é chamado de ___.",
    answer: "fotossíntese",
  },
  { question: "Os humanos respiram oxigênio e exalam ___.", answer: "co2" },
  {
    question: "O som viaja mais rápido em ___ (sólido, líquido, gasoso).",
    answer: "sólido",
  },
  {
    question: "A luz viaja mais rápido no ___ (vácuo, água, ar).",
    answer: "vácuo",
  },
  {
    question: "O gás que respiramos em maior quantidade é ___.",
    answer: "nitrogênio",
  },
  {
    question: "O nome do maior oceano do planeta é ___.",
    answer: "oceano pacífico",
  },
  {
    question: "Os diamantes são formados principalmente por ___.",
    answer: "carbono",
  },
  {
    question: "O nosso sistema solar é composto por 8 ___.",
    answer: "planetas",
  },

  {
    question: "O sol é uma ___.",
    answer: "estrela",
  },
  {
    question: "O metal mais abundante na crosta terrestre é ___.",
    answer: "alumínio",
  },
  {
    question: "O principal gás responsável pelo efeito estufa é ___.",
    answer: "dióxido de carbono",
  },
  {
    question: "O processo de mudança da água de estado líquido para sólido é chamado de ___.",
    answer: "congelamento",
  },
  
];



function FillGame() {

  function getRandomQuestions(questions, numberOfQuestions = 10) {
    // Shuffle the questions array using Fisher-Yates algorithm
    const shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    
    // Return the first 5 shuffled questions (or the specified number)
    return shuffledQuestions.slice(0, numberOfQuestions);
  }
  
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
    const selectedQuestions = getRandomQuestions(questionsData);

    const shuffledQuestions = selectedQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions.slice(0, 10));
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
    const selectedQuestions = getRandomQuestions(questionsData);

    const shuffledQuestions = selectedQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions.slice(0, 10));
  };

  const correctAnswersCount = results.filter(
    (result) => result.isCorrect
  ).length;
  const scorePercentage = (correctAnswersCount / results.length) * 100;

  const shareScore = () => {
    const shareText = `Eu acertei ${scorePercentage}% no Jogo de Preencher os Espaços! 🎉`;

    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);

    setOpen((prev) => !prev);

    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col w-full items-center justify-center  p-5">
      <div className="  flex gap-5  w-full mb-3 lg:p-2 lg:justify-start justify-start items-center text-white">
        <p className="font-bold lg:text-[20px] text-black">
          Jogue e Ganhe{" "}
          <img
            src="/student/bulb.png"
            className="inline-block my-auto"
            alt=""
          />
        </p>

        <p className="flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark">
          Pontuação Total: 0
        </p>
      </div>
      <div className=" rounded-lg p-8  w-full">
        {/* <h1 className="text-2xl font-bold mb-4 text-start">
          Fill in the Blanks Game
        </h1> */}
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
                          className="border-b-2 font-semibold border-gray-400 outline-none mx-1 w-24 text-center"
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
         Enviar Resposta
        </button>
      </div>

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
                Parabéns
                </p>
                <p className="text-xl m-1 text-[#545454] font-semibold">{`${correctAnswersCount} out of ${results.length} correct!`}</p>
                <p className="text-center ">
                Agora você entrou na disputa pelo GRANDE PRÊMIO de 1 garrafa da sua
                escolha durante a festa de hoje à noite!...
                </p>
              </div>
              <p className="text-main-dark font-semibold text-2xl ">
                Sua pontuação
              </p>
              <p className="text-main-dark font-semibold text-5xl -mt-1">
                {scorePercentage}
              </p>

              <p className="cursor-pointer" onClick={shareScore}>
                <img src="/student/social.png" className="w-28 h-fit" alt="" />
              </p>
            </div>
          </Dialog>
        </>
      )}
    </div>
  );
}

export default FillGame;
