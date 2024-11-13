import { Dialog } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Confetti from "react-confetti";

// Array of words and questions
const words = [
  "MAÇÃ", "BANANA", "LARANJA", "UVA",
  "MANGA", "PERA", "KIWI", "MAÇÃ",
  "CEREJA", "LIMÃO", "UVA", "LIMÃO",
  "BANANA", "AMEIXA", "KIWI", "MAÇÃ"
];


const questions = [
  { word: "MAÇÃ", answer: 3 },
  { word: "BANANA", answer: 2 },
  { word: "LARANJA", answer: 1 },
  { word: "UVA", answer: 2 },
  { word: "MANGA", answer: 1 }
];

const WordHuntGame = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [inputValues, setInputValues] = useState(Array(5).fill(''));
  const [progress, setProgress] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [bentoGrid, setBentoGrid] = useState(null);
  const [currentQuestion, setcurrentQuestion] = useState(questions[currentPhase]);
  const resetGame = () => {
    setCorrectAnswers(0)
    setFinalScore(0)
    setIsGameOver(false)
    setProgress(0)
    setCurrentPhase(0)
    setInputValues(Array(5).fill(''))
    setShowModal(false);
    setBentoGrid(null);
    setcurrentQuestion(questions[currentPhase])
  }

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
    setCorrectAnswers(correctAnswers);
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
    setBentoGrid(grid)
  };

  useEffect(() => {
    generateBentoGrid();
    // setcurrentQuestion(questions[currentPhase])

  }, [currentPhase])

  // const bentoGrid = generateBentoGrid();





  const shareScore = () => {
    const shareText = `Eu acertei ${finalScore}% no Jogo de Preencher os Espaços! 🎉`;

    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);

    setOpen((prev) => !prev);

    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  return (
    <div className="p-6 bg-main-light">
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
      <div className="mt-6">

        <div className="w-full flex bg-gray-200 h-4 rounded-full">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {/* <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Word Hunt Game</h2> */}

      {/* Bento Grid */}
      <h3 className="text-2xl text-center py-3 font-semibold text-black">
        Quantas vezes a palavra <strong>{currentQuestion?.word}</strong> aparece no tabuleiro?
      </h3>


      <div className="mb-4 place-content-center place-items-center  grid grid-cols-2 lg:grid-cols-3">


        {/* Input for the user answer */}
        <input
          type="text"
          value={inputValues[currentPhase]}
          onChange={(e) => handleInputChange(e, currentPhase)}
          className=" lg:col-start-2 place-content-center w-full text-center p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none place-self-center focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter a number"
        />
        <div className="flex justify-end">
          {currentPhase === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={inputValues[currentPhase] === ''}
              className={`p-2 text-white rounded-lg bg-green-500 hover:bg-green-600 place-self-center ${inputValues[currentPhase] === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Enviar
            </button>
          ) : (
            <button
              onClick={handleNextPhase}
              disabled={inputValues[currentPhase] === ''}
              className={`p-2 place-self-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 ${inputValues[currentPhase] === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Próxima Pergunta
            </button>
          )}
        </div>

      </div>

      {/* Next Button or Submit Button */}

      <div className="grid grid-cols-4 gap-2 lg:gap-4 pt-10 lg:px-16 mb-6">
        {bentoGrid?.map((row, rowIndex) =>
          row.map((word, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="h-20 flex items-center justify-center border text-white cursor-pointer duration-300 bg-main-dark font-bold hover:bg-main-dark/80 p-4 rounded-lg lg:text-lg "
            >
              {word}
            </div>
          ))
        )}
      </div>

      {/* Current Question */}


      {/* Progress Bar */}


      {/* Final Score Modal */}

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
                <p className="text-xl m-1 text-[#545454] font-semibold">{`${correctAnswers} de ${questions.length} acertos!`}</p>

                <p className="text-center ">
                  Agora você entrou na disputa pelo GRANDE PRÊMIO de 1 garrafa da sua
                  escolha durante a festa de hoje à noite!...
                </p>
              </div>
              <p className="text-main-dark font-semibold text-2xl ">
                Sua pontuação
              </p>
              <p className="text-main-dark font-semibold text-5xl -mt-1">
                {finalScore}
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
};

export default WordHuntGame;
