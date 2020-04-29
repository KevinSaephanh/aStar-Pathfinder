import React, { useState, useEffect } from "react";
import "./Cell.css";

export const Cell = (props) => {
    const [cellData, setCellData] = useState(props);
    const { row, col, visited, walls } = cellData;

    useEffect(() => {
        // Set each cell in sequence to animate
        // the generation of the maze
        const interval = setInterval(() => {
            setCellData(props);
        }, 10 * props.count);

        return () => {
            clearInterval(interval);
        };
    }, [props]);
    
    return (
        <td
            key={`(${row},${col})`}
            id={`cell-${row}-${col}`}
            className={`cell 
                top-${walls[0]} 
                bottom-${walls[1]} 
                right-${walls[2]} 
                left-${walls[3]} `}
        >
            {visited ? <div className="path"></div> : null}
        </td>
    );
};
