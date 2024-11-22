import { Checkbox, Dialog } from "@material-tailwind/react";
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const multipleChoiceQuestions = [
  {
    question: 'Qual planeta é conhecido como o Planeta Vermelho?',
    correctAnswer: 'Marte',
    options: ['Terra', 'Marte', 'Júpiter', 'Vênus'],
  },
  {
    question: 'Qual é o maior mamífero do mundo?',
    correctAnswer: 'Baleia Azul',
    options: ['Elefante', 'Baleia Azul', 'Girafa', 'Tubarão'],
  },
  {
    question: 'Qual idioma é falado principalmente no Brasil?',
    correctAnswer: 'Português',
    options: ['Espanhol', 'Português', 'Francês', 'Inglês'],
  },
  {
    question: 'Qual é a capital do Japão?',
    correctAnswer: 'Tóquio',
    options: ['Osaka', 'Quioto', 'Tóquio', 'Nagoya'],
  },
  {
    question: 'Qual elemento tem o símbolo químico "O"?',
    correctAnswer: 'Oxigênio',
    options: ['Ósmio', 'Oxigênio', 'Ouro', 'Prata'],
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    correctAnswer: 'Leonardo da Vinci',
    options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet'],
  },
  {
    question: 'Qual é o continente com o maior número de países?',
    correctAnswer: 'África',
    options: ['África', 'Ásia', 'Europa', 'América'],
  },
  {
    question: 'Qual é o animal terrestre mais rápido?',
    correctAnswer: 'Guepardo',
    options: ['Leão', 'Elefante', 'Guepardo', 'Cavalo'],
  },
  {
    question: 'Qual é a capital da França?',
    correctAnswer: 'Paris',
    options: ['Paris', 'Londres', 'Roma', 'Berlim'],
  },
  {
    question: 'Qual é o maior oceano do mundo?',
    correctAnswer: 'Oceano Pacífico',
    options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico'],
  },
  {
    question: 'Em que ano o homem pisou na lua pela primeira vez?',
    correctAnswer: '1969',
    options: ['1965', '1969', '1972', '1959'],
  },
  {
    question: 'Qual é o maior país do mundo em área?',
    correctAnswer: 'Rússia',
    options: ['China', 'Rússia', 'Estados Unidos', 'Canadá'],
  },
  {
    question: 'Qual é o metal mais precioso?',
    correctAnswer: 'Ouro',
    options: ['Prata', 'Ouro', 'Platina', 'Diamante'],
  },
  {
    question: 'Qual é o nome da estrela mais próxima da Terra?',
    correctAnswer: 'Sol',
    options: ['Lua', 'Vênus', 'Sol', 'Júpiter'],
  },
  {
    question: 'Qual é a maior floresta tropical do mundo?',
    correctAnswer: 'Amazônia',
    options: ['Congo', 'Amazônia', 'Boreal', 'Sumatra'],
  },
  {
    question: 'Qual é o maior rio do mundo?',
    correctAnswer: 'Rio Amazonas',
    options: ['Rio Nilo', 'Rio Amazonas', 'Rio Yangtzé', 'Rio Mississipi'],
  },
  {
    question: 'Quem foi o primeiro presidente dos Estados Unidos?',
    correctAnswer: 'George Washington',
    options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'John Adams'],
  },
  {
    question: 'Qual é o maior deserto do mundo?',
    correctAnswer: 'Deserto da Antártida',
    options: ['Deserto do Saara', 'Deserto da Antártida', 'Deserto de Gobi', 'Deserto de Kalahari'],
  },
  {
    question: 'Qual é o maior lago do mundo?',
    correctAnswer: 'Lago Cáspio',
    options: ['Lago Superior', 'Lago de Genebra', 'Lago Cáspio', 'Lago Vitória'],
  },
  {
    question: 'Qual é a montanha mais alta do mundo?',
    correctAnswer: 'Monte Everest',
    options: ['Monte Kilimanjaro', 'Monte Everest', 'Monte Fuji', 'Monte McKinley'],
  },
];


const QuizGameTwo = () => {

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
  
  // Example usage:
  
  
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0); // Progress state
  
  useEffect(() => {
    // Shuffle questions initially
    const selectedQuestions = getRandomQuestions(multipleChoiceQuestions);
    const shuffledQuestions = [...selectedQuestions].sort(() => Math.random() - 0.5);
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
    setProgress(((currentQuestionIndex + 1) / 10) * 100);

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
    const shareText = `Eu acertei ${score}% no jogo Preencher as Lacunas! 🎉`;

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
              className={`flex items-center  w-full justify-center text-center relative h-full  cursor-pointer p-4 bg-main-light  text-main-dark text-xl lg:text-3xl font-bold rounded-lg mb-2 ${selectedAnswer === option ? 'border-2 border-blue-500' : ''
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
  ? 'Próxima Pergunta'
  : 'Finalizar'}

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
                Parabéns
                </p>
                <p className="text-xl m-1 text-[#545454] font-semibold">{`${score } de 5 acertos!`}</p>
                <p className="text-center ">
                Agora você entrou na disputa pelo GRANDE PRÊMIO de 1 garrafa da sua
                escolha durante a festa de hoje à noite!...
                </p>
              </div>
              <p className="text-main-dark font-semibold text-2xl ">
                Sua pontuação
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
                Sua pontuação: {score} / {questionsData.length}
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
