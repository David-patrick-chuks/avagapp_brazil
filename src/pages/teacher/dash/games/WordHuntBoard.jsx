import React, { useState, useRef } from 'react';

const WordHuntBoard = () => {
  // Define a 4x4 grid (can be adjusted for other sizes)
  const gridSize = 4;
  const [grid, setGrid] = useState(Array(gridSize * gridSize).fill(''));
  
  // Create refs for each input
  const inputRefs = useRef([]);

  // Handle input change for each cell
  const handleChange = (index, value) => {
    if (value.length > 1) return; // Ensure only one character is entered

    const newGrid = [...grid];
    newGrid[index] = value.toUpperCase(); // Convert to uppercase
    setGrid(newGrid);

    // Move focus to the next input field
    if (value && index < grid.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace to focus on the previous input
  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !grid[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4">
      <div className="grid grid-cols-4 gap-2">
        {grid.map((letter, index) => (
          <input
            key={index}
            type="text"
            maxLength={1} // Allow only one letter
            value={letter}
            placeholder='Add text'
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)} // Assign ref to each input
            className="w-16 h-16 bg-[#ffdda2cc] placeholder:text-xs placeholder:text-[#54545463] text-center text-4xl font-bold rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
    </div>
  );
};

export default WordHuntBoard;
