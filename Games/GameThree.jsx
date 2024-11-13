import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Confetti from 'react-confetti';

const reorderQuestions = [
  {
    question: 'Arrange the planets by distance from the Sun (closest to farthest)',
    correctOrder: ['Mercury', 'Venus', 'Earth', 'Mars'],
    options: ['Earth', 'Venus', 'Mars', 'Mercury'],
  },
  {
    question: 'Order these numbers from smallest to largest',
    correctOrder: ['3', '8', '12', '20'],
    options: ['12', '3', '20', '8'],
  },
  {
    question: 'Arrange the historical events chronologically',
    correctOrder: ['Fall of Rome', 'Discovery of America', 'Moon Landing', 'Berlin Wall Fall'],
    options: ['Moon Landing', 'Berlin Wall Fall', 'Fall of Rome', 'Discovery of America'],
  },
  {
    question: 'Order these colors by wavelength (shortest to longest)',
    correctOrder: ['Violet', 'Blue', 'Green', 'Red'],
    options: ['Green', 'Blue', 'Violet', 'Red'],
  },
  {
    question: 'Arrange the following continents by size (smallest to largest)',
    correctOrder: ['Europe', 'Australia', 'Antarctica', 'Asia'],
    options: ['Asia', 'Europe', 'Australia', 'Antarctica'],
  },
];

const TSetting = () => {
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
        className="cursor-pointer p-4 bg-blue-500 text-white text-center rounded-lg mb-2"
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

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-100 p-6">
        <div className="max-w-xl bg-white rounded-lg p-8 shadow-lg space-y-6">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <h2 className="text-2xl font-bold text-center text-blue-600">
            Reorder the Items
          </h2>
          <p className="text-lg text-center text-gray-700 mb-4">
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
              ? 'Next Question'
              : 'Finish'}
          </button>

          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <Confetti />
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="mb-4">Your Score: {score} / {questionsData.length}</p>
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
    </DndProvider>
  );
};

export default TSetting;
