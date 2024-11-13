import React, { useState } from 'react';
function Wordhunt() {

  const initialBoard = [
    ['E', 'A', 'T', 'I'],
    ['T', 'R', 'V', 'Y'],
    ['I', 'C', 'E', 'C'],
    ['S', 'O', 'L', 'L'],
  ];

  const targetWord = 'CREATIVITY';

  const [selectedCells, setSelectedCells] = useState([]);
  const [currentWord, setCurrentWord] = useState('');


  const handleSelect = (row, col) => {
    const letter = initialBoard[row][col];
    if (letter !== ' ') {
      setSelectedCells([...selectedCells, { row, col }]);
      setCurrentWord((prev) => prev + letter);
    }
  };

  const checkWord = () => {
    if (currentWord === targetWord) {
      alert('Congratulations! You found the word CREATIVITY!');
    } else {
      alert('Incorrect Word! Try Again.');
    }
    resetGame();
  };

  const resetGame = () => {
    setSelectedCells([]);
    setCurrentWord('');
  };

  // Convert cell row/col to coordinates for SVG lines
  const getCellCoordinates = (row, col) => {
    const cellSize = 80;
    const offset = 10; // Gap between cells
    return {
      x: col * (cellSize + offset) + cellSize / 2,
      y: row * (cellSize + offset) + cellSize / 2,
    };
  };










  return (
    <div className='p-3 flex flex-col gap-2'>

      <div className='  flex gap-5 p-2 justify-between lg:justify-start items-center text-white'>
        <p className='font-bold lg:text-[20px] text-black'>Jogue e Ganhe <img src="/student/bulb.png" className='inline-block my-auto' alt="" /></p>

        <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Total Score: 100</p>
      </div>
      <div className="flex flex-col gap-5">
        <p className='font-bold text-2xl mt-7 text-center'>Word : <span className='text-5xl text-main-dark'>CREATIVITY</span></p>
        <div className='flex flex-col gap-10 p-5'>

          <div className=''>
            <div className="app">
              <div className="board-container">
                <svg className="svg-lines">
                  {selectedCells.map((cell, index) => {
                    if (index === 0) return null;
                    const start = getCellCoordinates(
                      selectedCells[index - 1].row,
                      selectedCells[index - 1].col
                    );
                    const end = getCellCoordinates(cell.row, cell.col);
                    return (
                      <line
                        key={index}
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                        stroke="blue"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </svg>
                <div className="border border-main-dark rounded-xl p-2 grid grid-cols-4">
                  {initialBoard.map((row, rowIndex) => (
                    <div key={rowIndex} className="">
                      {row.map((letter, colIndex) => (
                        <button
                          key={`${rowIndex}-${colIndex}`}
                          className={`bg-[#FFDDA2CC] text-4xl cell button  justify-center font-bold text-black size-20 flex items-center ${selectedCells.some(
                            (cell) => cell.row === rowIndex && cell.col === colIndex
                          ) && 'selected'}`}
                          onClick={() => handleSelect(rowIndex, colIndex)}
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

            </div>


          </div>

          <div className='flex -mt-5 w-full justify-end'>
            <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark text-white'>Next
            </p>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Wordhunt