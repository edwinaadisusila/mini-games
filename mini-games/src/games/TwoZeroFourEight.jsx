import React from 'react';

const colours = {
  2: '#eee4da',
  4: '#ede0c8',
  8: '#f2b179', 
  16: '#f59563',
  32: '#f67c5f',
  64: '#f65e3b', 
  128: '#ecd17f',
  256: '#f0d047', 
  512: '#ecc402', 
  1024: '#e3ba14',
  2048: '#60d992',
}

function TwoZeroFourEight() {
  const [grid, setGrid] = React.useState([[2,0,0,0], [0,0,0,0], [0,0,0,1024], [0,0,0,1024]]);
  const [game, setGame] = React.useState(0);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.ceil(max));
  }

  const resetGrid = () => {
    setGrid([[2,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]);
    setGame(0);
  }
  
  const moveLeft = () => {
    console.log('left');
    const newGrid = [];
    let moved = false;

    for (let row = 0; row < 4; row++) {
      const newRow = grid[row];
      let j = 0;
      for (let i = 0; i < 4; i++) {
        // skip over 0 elements
        if (newRow[i] === 0) {
          continue;
        }

        // move element to empty spot
        newRow[j] = newRow[i];
        if (j !== i) {
          moved = true;
        }
        j++;
      }

      // fill remaining end spots with 0
      while (j < 4) {
        newRow[j] = 0;
        j++;
      }

      newGrid.push(newRow);
    }

    setGrid(newGrid);

    // merge left 
    for (let row = 0; row < 4; row++) {
      const newRow = grid[row];
      let j = 0; 
      for (let i = 0; i < 3; i++) {
        // skip over 0 elements
        if (newRow[i] === 0) {
          continue;
        }

        // move element to empty spot
        if (newRow[i] === newRow[i + 1]) {
          newRow[j] = newRow[i] * 2;
          newRow[i + 1] = 0;
          moved = true;
        } else {
          newRow[j] = newRow[i];
          if (j !== i) {
            moved = true;
          }
        }
        j++;
      }

      newRow[j] = newRow[3];
      j++;

      // fill remaining end spots with 0
      while (j < 4) {
        newRow[j] = 0;
        j++;
      }
    }

    if (moved) {
      fillSpot();
    } 
  }

  const moveRight = () => {
    console.log('right');
    const newGrid = [];
    let moved = false;

    for (let row = 0; row < 4; row++) {
      const newRow = grid[row];
      let j = 3;
      for (let i = 3; i >= 0; i--) {
        // skip over 0 elements
        if (newRow[i] === 0) {
          continue;
        }

        // move element to empty spot
        newRow[j] = newRow[i];
        if (j !== i) {
          moved = true;
        }
        j--;
      }

      // fill remaining start spots with 0
      while (j >= 0) {
        newRow[j] = 0;
        j--;
      }

      newGrid.push(newRow);
    }

    setGrid(newGrid);

    // merge right 
    for (let row = 0; row < 4; row++) {
      const newRow = grid[row];
      let j = 3; 
      for (let i = 3; i >= 1; i--) {
        // skip over 0 elements
        if (newRow[i] === 0) {
          continue;
        }

        // move element to empty spot
        if (newRow[i] === newRow[i - 1]) {
          newRow[j] = newRow[i] * 2;
          newRow[i - 1] = 0;
          moved = true;
        } else {
          newRow[j] = newRow[i];
          if (j !== i) {
            moved = true;
          }
        }
        j--;
      }

      newRow[j] = newRow[0];
      j--;

      // fill remaining end spots with 0
      while (j >= 0) {
        newRow[j] = 0;
        j--;
      }
    }
    
    if (moved) {   
      fillSpot();
    } 
  }

  const moveUp = () => {
    console.log('up');
    const copy = [...grid];
    let moved = false;

    for (let col = 0; col < 4; col++) {
      let j = 0;
      for (let i = 0; i < 4; i++) {
        // skip over 0 elements
        if (copy[i][col] === 0) {
          continue;
        }

        // move element to empty spot
        copy[j][col] = copy[i][col];
        if (j !== i) {
          moved = true;
        }
        j++;
      }

      // fill remaining end spots with 0
      while (j < 4) {
        copy[j][col] = 0;
        j++;
      }
    }

    setGrid(copy);

    // merge up 
    for (let col = 0; col < 4; col++) {
      let j = 0;
      for (let i = 0; i < 3; i++) {
        // skip over 0 elements
        if (copy[i][col] === 0) {
          continue;
        }

        // move element to empty spot
        if (copy[i][col] === copy[i + 1][col]) {
          copy[j][col] = copy[i][col] * 2;
          copy[i + 1][col] = 0;
          moved = true;
        } else {
          copy[j][col] = copy[i][col];
          if (j !== i) {
            moved = true;
          }
        }
        j++;
      }

      copy[j][col] = copy[3][col];
      j++;

      // fill remaining end spots with 0
      while (j < 4) {
        copy[j][col] = 0;
        j++;
      }
    }

    if (moved) {
      fillSpot();
    } 
  }

  const moveDown = () => {
    console.log('down');
    const copy = [...grid];
    let moved = false;

    for (let col = 0; col < 4; col++) {
      let j = 3;
      for (let i = 3; i >= 0; i--) {
        // skip over 0 elements
        if (copy[i][col] === 0) {
          continue;
        }

        // move element to empty spot
        copy[j][col] = copy[i][col];
        if (j !== i) {
          moved = true;
        }
        j--;
      }

      // fill remaining start spots with 0
      while (j >= 0) {
        copy[j][col] = 0;
        j--;
      }
    }

    setGrid(copy);

    // merge down 
    for (let col = 0; col < 4; col++) {
      let j = 3;
      for (let i = 3; i >= 1; i--) {
        // skip over 0 elements
        if (copy[i][col] === 0) {
          continue;
        }

        // move element to empty spot
        if (copy[i][col] === copy[i - 1][col]) {
          copy[j][col] = copy[i][col] * 2;
          copy[i - 1][col] = 0;
          moved = true;
        } else {
          copy[j][col] = copy[i][col];
          if (j !== i) {
            moved = true;
          }
        }
        j--;
      }

      copy[j][col] = copy[0][col];
      j--;

      // fill remaining start spots with 0
      while (j >= 0) {
        copy[j][col] = 0;
        j--;
      }
    }

    if (moved) {
      fillSpot();
    } 
  }

  const checkWon = () => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (grid[row][col] === 2048) {
          setGame(1);
          return;
        } 
      }
    }
  }

  const checkLose = () => {
    let lost = true;

    // check if empty cell
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (grid[row][col] === 0) {
          lost = false;
        } 
      }
    }

    // check if duplicate numbers next to each other
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col] === grid[row][col + 1]) {
          lost = false;
        } 
        if (grid[col][row] === grid[col + 1][row]) {
          lost = false;
        }
      }
    }

    if (lost) {
      setGame(-1);
    }
    
  }

  const handleKeyDown = (event) => {
    if (game === 0) {
      const key = event.key;
      if (key === 'ArrowLeft') {
        moveLeft();
        checkWon();
        checkLose();
        
      } else if (key === 'ArrowRight') {
        moveRight();
        checkWon();
        checkLose();
        
      } else if (key === 'ArrowUp') {
        moveUp();
        checkWon();
        checkLose();
        
      } else if (key === 'ArrowDown') {
        moveDown();
        checkWon();
        checkLose();
      }
    }
  }

  const fillSpot = () => {
    const copy = [...grid];

    // select random empty spot
    let x = getRandomInt(4);
    let y = getRandomInt(4);
    while (copy[x][y] !== 0) {
      x = getRandomInt(4);
      y = getRandomInt(4);
      
      // check if grid is full 
      let empty = false;
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (copy[row][col] === 0) {
            empty = true;
          } 
        }
      }
      if (!empty) {
        return;
      }
    }
    
    // select between 2 or 4 randomly
    const number = Math.random() < 0.5 ? 2 : 4;

    // set number in grid 
    copy[x][y] = number;
    setGrid(copy);
  }
  
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown); 
    };
  // eslint-disable-next-line
  }, [grid, game]);

  return (
    <>
      <h2>2048</h2>
      <table className='two-table' border="1" style={{ opacity: game === 1 || game === -1 ? '0.5' : ''}}>
        <tbody>
          <tr className='two-row' >
            <td className='two-cell' style={{backgroundColor: colours[grid[0][0]]}}>{grid[0][0]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[0][1]]}}>{grid[0][1]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[0][2]]}}>{grid[0][2]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[0][3]]}}>{grid[0][3]}</td>
          </tr>
          <tr className='two-row' >
            <td className='two-cell' style={{backgroundColor: colours[grid[1][0]]}}>{grid[1][0]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[1][1]]}}>{grid[1][1]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[1][2]]}}>{grid[1][2]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[1][3]]}}>{grid[1][3]}</td>
          </tr>
          <tr className='two-row' >
            <td className='two-cell' style={{backgroundColor: colours[grid[2][0]]}}>{grid[2][0]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[2][1]]}}>{grid[2][1]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[2][2]]}}>{grid[2][2]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[2][3]]}}>{grid[2][3]}</td>
          </tr>
          <tr className='two-row' >
            <td className='two-cell' style={{backgroundColor: colours[grid[3][0]]}}>{grid[3][0]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[3][1]]}}>{grid[3][1]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[3][2]]}}>{grid[3][2]}</td>
            <td className='two-cell' style={{backgroundColor: colours[grid[3][3]]}}>{grid[3][3]}</td>
          </tr>
        </tbody>
      </table>
      <div>
        {
          
          game === 1 ? <><h3>YOU WIN :)</h3><button onClick={() => resetGrid()}>Restart</button></>
          : ''
        }
        {
          game === -1 ? <><h3>YOU LOSE :(</h3><button onClick={() => resetGrid()}>Restart</button></>
          : ''
        }
      </div>
    </>
  );
}

export default TwoZeroFourEight;
