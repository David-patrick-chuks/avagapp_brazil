import React, { useState, useEffect } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import  {MultiBackend, TouchTransition } from 'dnd-multi-backend';


const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
    },
    {
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition,
    },
  ],
};
import Confetti from "react-confetti";
import { Dialog } from '@material-tailwind/react';
const DndElemet = () => {
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
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-tr from-blue-500 to-blue-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-bl from-blue-500 to-blue-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      'bg-gradient-to-r from-blue-500 to-blue-600',
      
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
        className={`cursor-pointer p-4 rounded-lg h-32 text-3xl flex justify-center items-center font-bold text-white text-center transition duration-200 transform ${
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
        className={`p-6 rounded-lg text-center cursor-pointer  h-32  flex justify-center items-center font-bold text-4xl shadow-md border-2 border-blue-500 ${
          isOver ? 'border-yellow-500' : ''
        } ${currentAnswer ? 'bg-blue-200' : 'bg-white'}`}
        onClick={() => onClick(currentAnswer)}
      >
        {currentAnswer ? currentAnswer : (<h1 className='text-2xl'>Drop the correct answer here</h1>)}
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
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className=" flex items-center w-full h-full justify-center  lg:p-6">
        <div className=" w-full bg-white rounded-lg p-8 space-y-6 ">
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
      
      <div className="relative pt-1">
            {/* <div className="flex mb-2 items-center justify-between">
              <span className="text-blue-600">Progress: {progressPercentage}%</span>
            </div> */}
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

          <div className="mb-6">
            <div className="text-blue-600 text-3xl text-center font-semibold mb-2">{currentQuestion?.question}</div>
          </div>

          <div className="mb-6">
            <DroppableBox onDrop={handleDrop} currentAnswer={answer} onClick={handleRemoveAnswer} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {currentQuestion?.options.map((option, index) => (
              <DraggableElement
                key={index}
                id={index}
                option={option}
                isUsed={usedOptions[phase]?.includes(option)}
              />
            ))}
          </div>

       
          <div className="flex justify-end -mt-2 items-end w-full">
            <button
              onClick={handleNextPhase}
              disabled={!answer} // Disable if no answer is present
              className={`${
                !answer ? ' cursor-not-allowed bg-blue-300/50' : 'bg-blue-600 hover:bg-blue-700'
              } text-white py-2 px-8 rounded`}
            >
              Next
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
                <p className="text-xl m-1 text-[#545454] font-semibold">{`${correctAnswersCount()} out of ${questionsData.length} correct!`}</p>
                <p className="text-center ">
                  You've now entered into the GRAND PRIZE of 1 bottle of your
                  choice during tonight's party!...
                </p>
              </div>
              <p className="text-main-dark font-semibold text-2xl ">
                Your score
              </p>
              <p className="text-main-dark font-semibold text-5xl -mt-1">
                {calculateTotalScore()}
              </p>

              <p className="cursor-pointer" onClick={shareScore}>
                <img src="/student/social.png" className="w-28 h-fit" alt="" />
              </p>
            </div>
          </Dialog>
        </>
      )}
       
        </div>
      </div>
    </DndProvider>
  );
};

export default DndElemet;
