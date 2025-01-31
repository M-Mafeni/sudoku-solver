import { useState } from "react";
import "./App.css";
import SudokuGrid from "./SudokuGrid.tsx";
import solve from "./sudoku/solve.ts";

const initialGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

function App() {
  // const [count, setCount] = useState(0);
  const [grid, setGrid] = useState(initialGrid);
  const [num, setNum] = useState(0);
  return (
    <>
      <SudokuGrid grid={grid} />
      <button className="solve-btn" onClick={() => solve(initialGrid, setGrid)}>
        Solve
      </button>
      <p>{num}</p>
      <button
        className="solve-btn"
        onClick={async () => {
          for (let i = 1; i <= 100; i++) {
            await new Promise<void>((res) => {
              setTimeout(() => {
                setNum(i);
                res();
              }, 10);
            });
          }
        }}
      >
        Count to 100
      </button>
    </>
  );
}

export default App;
