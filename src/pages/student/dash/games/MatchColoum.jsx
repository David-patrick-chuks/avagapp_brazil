import React, { useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function MatchColoum() {
    const fruitImages = {
        Mango: '/student/mango.png',
        Grapes: '/student/grape.png',
        Apple: '/student/apple.png',
        Orange: '/student/orange.png',
        Banana: '/student/banana.png',
    };

    const MatchGame = () => {
        const [matched, setMatched] = useState({});
        const [positions, setPositions] = useState({});
        const canvasRef = useRef();

        const handleMatch = (fruit, target) => {
            setMatched((prev) => ({
                ...prev,
                [target]: fruit === target,
            }));
        };

        // Track the position of each draggable and droppable element
        const updatePosition = (name, position) => {
            setPositions((prev) => ({ ...prev, [name]: position }));
        };

        useEffect(() => {
            drawLines();
        }, [matched, positions]);

        const drawLines = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            Object.keys(matched).forEach((fruit) => {
                if (matched[fruit] && positions[fruit] && positions[`${fruit}-image`]) {
                    const start = positions[fruit];
                    const end = positions[`${fruit}-image`];
                    drawArrow(ctx, start.x, start.y, end.x, end.y);
                }
            });
        };

        const drawArrow = (ctx, startX, startY, endX, endY) => {
            const headLength = 10;
            const angle = Math.atan2(endY - startY, endX - startX);

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = '#007bff';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(endX, endY);
            ctx.lineTo(endX - headLength * Math.cos(angle - Math.PI / 6), endY - headLength * Math.sin(angle - Math.PI / 6));
            ctx.lineTo(endX - headLength * Math.cos(angle + Math.PI / 6), endY - headLength * Math.sin(angle + Math.PI / 6));
            ctx.lineTo(endX, endY);
            ctx.fillStyle = '#007bff';
            ctx.fill();
        };

        return (

            <div className='p-3 flex flex-col gap-2'>

                <div className='  flex gap-5 p-2 lg:justify-start justify-between items-center text-white'>
                    <p className='font-bold lg:text-[20px] text-black'>Jogue e Ganhe <img src="/student/bulb.png" className='inline-block my-auto' alt="" /></p>

                    <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Total Score: 100</p>
                </div>
                <img src="/student/progress.png" alt="" />

                <div className="flex flex-col gap-5">
                    
                    <div className='flex flex-col gap-10 p-5'>
                        <h2>Match the coloum
                        </h2>
                        <div className=''>
                            <DndProvider backend={HTML5Backend}>
                                <div className="flex flex-col">
                                    <canvas
                                        ref={canvasRef}
                                        width={window.innerWidth}
                                        height={window.innerHeight}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            pointerEvents: 'none',
                                            zIndex: 1,
                                        }}
                                    />
                                    <div className="flex flex-col gap-16">
                                        <div className="lg:flex grid grid-cols-3 gap-5 justify-between">
                                            {Object.keys(fruitImages).map((fruit) => (
                                                <DraggableItem key={fruit} name={fruit} updatePosition={updatePosition} />
                                            ))}
                                        </div>
                                        <div className=" grid grid-cols-3 lg:flex gap-5 flex-row-reverse justify-between">
                                            {Object.entries(fruitImages).map(([fruit, imageUrl]) => (
                                                <DroppableArea
                                                    key={fruit}
                                                    name={fruit}
                                                    imageUrl={imageUrl}
                                                    onDrop={(item) => handleMatch(item.name, fruit)}
                                                    matched={matched[fruit]}
                                                    updatePosition={updatePosition}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </DndProvider>
                        </div>

                        <div className='flex -mt-5 w-full justify-end'>
                            <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark text-white'>Next
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const DraggableItem = ({ name, updatePosition }) => {
        const itemRef = useRef();

        const [{ isDragging }, drag] = useDrag(() => ({
            type: 'fruit',
            item: { name },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }));

        useEffect(() => {
            if (itemRef.current) {
                const rect = itemRef.current.getBoundingClientRect();
                updatePosition(name, { x: rect.right, y: rect.top + rect.height / 2 });
            }
        }, [name, updatePosition]);

        return (
            <div
                ref={(node) => {
                    drag(node);
                    itemRef.current = node;
                }}
                style={{
                    opacity: isDragging ? 0.5 : 1,
                    cursor: 'pointer',
                    margin: '10px 0',
                    padding: '8px 15px',
                    backgroundColor: '#0d6efd',
                    color: 'white',
                    borderRadius: '5px',
                }}
            >
                {name}
            </div>
        );
    };


    const DroppableArea = ({ name, imageUrl, onDrop, matched, updatePosition }) => {
        const areaRef = useRef();

        const [{ isOver }, drop] = useDrop(() => ({
            accept: 'fruit',
            drop: (item) => onDrop(item),
            collect: (monitor) => ({
                isOver: monitor.isOver(),
            }),
        }));

        useEffect(() => {
            if (areaRef.current) {
                const rect = areaRef.current.getBoundingClientRect();
                updatePosition(`${name}-image`, { x: rect.left, y: rect.top + rect.height / 2 });
            }
        }, [name, updatePosition]);

        return (
            <div
                ref={(node) => {
                    drop(node);
                    areaRef.current = node;
                }}
                style={{
                    border: '2px solid',
                    borderColor: matched ? 'green' : 'lightgray',
                    borderRadius: '8px',
                    padding: '10px',
                    textAlign: 'center',
                    margin: '10px 0',
                    backgroundColor: isOver ? '#f0f8ff' : 'white',
                }}
            >
                <img src={imageUrl} alt={name} className='flex w-full' />
                {/* <p>{matched ? 'Correct!' : 'Drop Here'}</p> */}
            </div>
        );
    };

    return (
        <div> <MatchGame /></div>
    )
}

export default MatchColoum