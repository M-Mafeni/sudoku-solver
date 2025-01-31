import "./SudokuGrid.css";

function Row({ row }: { row: number[] }) {
  return (
    <tr className="row">
      {row.map((cell, i) => (
        <td key={i} className="cell">
          <span className="number">
            {cell !== 0 && cell}
          </span>
        </td>
      ))}
    </tr>
  );
}

function SudokuGrid({ grid }: { grid: number[][] }) {
  return (
    <table>
      <tbody>
        {grid.map((row, i) => <Row key={i} row={row} />)}
      </tbody>
    </table>
  );
}

export default SudokuGrid;
