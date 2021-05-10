import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const size = 5;

function Minesweeper() {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.ceil(max));
  } 

  // initialise grid with null
  const newGrid = [];
  for (let i = 0; i < size; i++) {
    const newRow = []
    for (let j = 0; j < size; j++) {
      newRow.push(null);
    }
    newGrid.push(newRow);
  }

  // place bombs in grid with -1 
  let count = 0;
  while (count < size) {
    const x = getRandomInt(size);
    const y = getRandomInt(size);
    if (newGrid[x][y] === null) {
      newGrid[x][y] = -1;
      count++;
    }
  }

  // set number for each cell 
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (newGrid[i][j] !== -1) {
        let count = 0;
        for (let row = i - 1; row <= i + 1; row++) {
          for (let col = j - 1; col <= j + 1; col++) {
            if (row >= 0 && row < size && col >= 0 && col < size) {
              if (newGrid[row][col] === -1) {
                count++;
              }
            }
          }
        }
        newGrid[i][j] = count;
      }
    }
  }

  const [grid, setGrid] = React.useState(newGrid);

  // initialise grid with null
  const showGrid = [];
  for (let i = 0; i < size; i++) {
    const newRow = []
    for (let j = 0; j < size; j++) {
      newRow.push(0);
    }
    showGrid.push(newRow);
  }

  const [show, setShow] = React.useState(showGrid);
  const [flag, setFlag] = React.useState(false);

  const handler = (row, col) => {
    console.log('click', row, col)
    const newShow = [...show];
    if (!flag) {
      newShow[row][col] = 1;
      setShow(newShow);
    } else {
      newShow[row][col] = 2;
      setShow(newShow);
    }
    
    if (grid[row][col] === -1) {
      console.log('bomb');
    }
  }

  const flagHandler = () => {
    setFlag(!flag);
    console.log(flag);
  }

  return (
    <>
      <h2>Minesweeper</h2>
      <ToggleButtonGroup type="checkbox" value={flag} onChange={flagHandler}>
        <ToggleButton value={false}>Reveal</ToggleButton>
        <ToggleButton value={true}>Flag</ToggleButton>
      </ToggleButtonGroup>
      <table className='minesweeper-table'>
        <tbody>
        {
          grid.map((row, rowIndex) => {
            return (
              <tr key={'row' + rowIndex} className='minesweeper-row'>
                {
                  row.map((cell, cellIndex) => {
                    return (
                      <td key={'cell' + cellIndex} className={ show[rowIndex][cellIndex] === 1 ? 'minesweeper-cell hide' : 'minesweeper-cell show'} onClick={() => {handler(rowIndex, cellIndex)}}>
                        {grid[rowIndex][cellIndex]}
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </>
  );
}

export default Minesweeper;
