import { Dialog } from '@material-tailwind/react';
import { MultiBackend, TouchTransition } from 'dnd-multi-backend';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';


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

const reorderQuestions = [
  {
    question: 'Arrume os planetas pela distância do Sol (do mais próximo ao mais distante)',
    correctOrder: ['Mercúrio', 'Vênus', 'Terra', 'Marte'],
    options: ['Terra', 'Vênus', 'Marte', 'Mercúrio'],
  },
  {
    question: 'Ordene esses números do menor para o maior',
    correctOrder: ['3', '8', '12', '20'],
    options: ['12', '3', '20', '8'],
  },
  {
    question: 'Arrume os eventos históricos em ordem cronológica',
    correctOrder: ['Queda de Roma', 'Descobrimento da América', 'Pouso na Lua', 'Queda do Muro de Berlim'],
    options: ['Pouso na Lua', 'Queda do Muro de Berlim', 'Queda de Roma', 'Descobrimento da América'],
  },
  {
    question: 'Ordene essas cores pela longitude de onda (da mais curta para a mais longa)',
    correctOrder: ['Violeta', 'Azul', 'Verde', 'Vermelho'],
    options: ['Verde', 'Azul', 'Violeta', 'Vermelho'],
  },
  {
    question: 'Arrume os seguintes continentes por tamanho (do menor para o maior)',
    correctOrder: ['Europa', 'Austrália', 'Antártida', 'Ásia'],
    options: ['Ásia', 'Europa', 'Austrália', 'Antártida'],
  },
  
];

const GameThree = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userOrder, setUserOrder] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0); // Progress state

  useEffect(() => {
    // Shuffle questions initially
    const shuffledQuestions = [...reorderQuestions].sort(() => Math.random() - 0.5);
    setQuestionsData(shuffledQuestions);
    setUserOrder(shuffledQuestions[0]?.options);
  }, []);

  const currentQuestion = questionsData[currentQuestionIndex];

  const DraggableItem = ({ item, index, moveItem }) => {
    const [, drag] = useDrag(() => ({
      type: 'item',
      item: { index },
    }));

    const [, drop] = useDrop({
      accept: 'item',
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          moveItem(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });

    return (
      <div
        ref={(node) => drag(drop(node))}
        className="cursor-pointer p-4 bg-main-light text-main-dark font-bold border border-main-dark text-center rounded-lg mb-2"
      >
        {item}
      </div>
    );
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedOrder = [...userOrder];
    const [movedItem] = updatedOrder.splice(fromIndex, 1);
    updatedOrder.splice(toIndex, 0, movedItem);
    setUserOrder(updatedOrder);
  };

  const handleSubmit = () => {
    const correctOrder = currentQuestion.correctOrder;
    const isCorrect = JSON.stringify(userOrder) === JSON.stringify(correctOrder);
    if (isCorrect) setScore(score + 1);

    // Update progress (each question is 20% of 100%)
    setProgress(((currentQuestionIndex + 1) / reorderQuestions.length) * 100);

    if (currentQuestionIndex + 1 < questionsData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserOrder(questionsData[currentQuestionIndex + 1]?.options);
    } else {
      setShowModal(true);
    }
  };

  const handleReset = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserOrder(questionsData[0]?.options);
    setProgress(0);
    setShowModal(false);
  };
  // const scorePercentage = (correctAnswersCount / results.length) * 100;
  const scorePercentage = (score / questionsData.length) * 100;

  const shareScore = () => {
    const shareText = `Eu acertei ${scorePercentage}% no jogo Preencher as Lacunas! 🎉`;

    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);

    setOpen((prev) => !prev);

    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <div className="w-full h-full flex items-center justify-center lg:p-6">


        <div className=" bg-white w-full rounded-lg p-8       space-y-6">
          {/* Progress Bar */}
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
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* <h2 className="text-2xl font-bold text-center text-blue-600">
            Reorder the Items
          </h2> */}
          <p className="lg:text-2xl  font-bold text-center text-blacl mb-4">
            {currentQuestion?.question}
          </p>

          <div className="space-y-2">
            {userOrder.map((item, index) => (
              <DraggableItem
                key={item}
                item={item}
                index={index}
                moveItem={moveItem}
              />
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white py-2 px-4 rounded mt-4 w-full"
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
                    <p className="text-xl m-1 text-[#545454] font-semibold">{`${score} de ${questionsData.length} acertos!`}</p>
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

                  <p className="cursor-pointer" >
                    <img src="/student/social.png" onClick={shareScore} className="w-28 h-fit" alt="" />
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
                <p className="mb-4">Sua pontuação: {score} / {questionsData.length}</p>
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
    </DndProvider>
  );
};

export default GameThree;
