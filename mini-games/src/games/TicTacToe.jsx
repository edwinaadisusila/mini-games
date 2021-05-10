import React from 'react';

const size = 3;

function TicTacToe() {
  const [player, setPlayer] = React.useState(false);
  const [grid, setGrid] = React.useState([[null, null, null], [null, null, null], [null, null, null]])
  const [game, setGame] = React.useState(0)
  const [timer, setTimer] = React.useState(0);

  const resetGrid = () => {
    setGrid([[null, null, null], [null, null, null], [null, null, null]]);
    setGame(0);
    setTimer(0);
  }

  const checkLose = () => {
    let lost = true;
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (grid[row][col] === null) {
          lost = false;
        }
      }
    }
    if (lost) {
      return true;
    } else {
      return false;
    }
  }

  const checkGame = () => {
    // check horizontally and vertically
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size - 2; col++) {
        if (grid[row][col] !== null && grid[row][col] === grid[row][col + 1] && grid[row][col + 1] === grid[row][col + 2]) {
          return true;
        } if (grid[col][row] !== null && grid[col][row] === grid[col + 1][row] && grid[col + 1][row] === grid[col + 2][row]) {
          return true;
        }
      }
    }

    // check diagonally 
    let diagonalOne = true;
    for (let i = 0; i < size - 1; i++) {
      if (grid[i][i] === null || grid[i][i] !== grid[i + 1][i + 1]) {
        diagonalOne = false;
      }
    }

    if (diagonalOne) {
      return true;
    }

    let diagonalTwo = true;
    for (let i = 0; i < size - 1; i++) {
      for (let j = size - 1; j > 0; j--) {
        if (grid[i][j] === null || grid[i][j] !== grid[i + 1][j - 1]) {
          diagonalTwo = false;
        }
      }
    }

    if (diagonalTwo) {
      return true;
    }

    return false;
  }

  const fillCell = (row, col) => {
    if (game === 0 && grid[row][col] === null) {
      const newGrid = [...grid];
      let cell = '';
      if (!player) {
        cell = 'X';
      } else {
        cell = '0';
      }
      newGrid[row][col] = cell;
      setPlayer(!player);
      setGrid(newGrid);

      if (checkGame()) {
        setGame(1);
      } else if (checkLose()) {
        setGame(-1);
      }
    }
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)

    return `${getMinutes} : ${getSeconds}`
  }

  React.useEffect(() => {
    const id = setInterval(() => setTimer(timer + 1), 1000);
    if (game !== 0) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [timer, game]);

  return (
    <>
      <h2>Tic Tac Toe</h2>
      <table className='tictactoe-table'>
        <tbody style={{ opacity: game === 1 || game === -1 ? '0.5' : ''}}>
          <tr className='tictactoe-row'>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(0,0)}>{grid[0][0]}</td>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(0,1)}>{grid[0][1]}</td>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(0,2)}>{grid[0][2]}</td>
          </tr>
          <tr className='tictactoe-row'>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(1,0)}>{grid[1][0]}</td>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(1,1)}>{grid[1][1]}</td>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(1,2)}>{grid[1][2]}</td>
          </tr>
          <tr className='tictactoe-row'>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(2,0)}>{grid[2][0]}</td>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(2,1)}>{grid[2][1]}</td>
            <td className={game === 0 ? 'hover tictactoe-cell' : 'tictactoe-cell'} onClick={() => fillCell(2,2)}>{grid[2][2]}</td>
          </tr>
        </tbody>
      </table>
      <div>
        { game === 0 ? player ? <h3>O's turn</h3> : <h3>X's turn</h3> : ''
        }
        {
          game === 1 ? <><h3>{player ? 'X' : 'O'} WON :)</h3><button onClick={() => resetGrid()}>Restart</button></>
          : ''
        }
        {
          game === -1 ? <><h3>GAME OVER :(</h3><button onClick={() => resetGrid()}>Restart</button></>
          : ''
        }
      </div>
      <div>
        {formatTime()}
      </div>
    </>
  );
}

export default TicTacToe;
