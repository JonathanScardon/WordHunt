function PathDisplay({ solutionPath, submitted = false, correct = false, inFound = false}) {

  const cellSize = 100;
  const gap = 15;

  const getCellCenter = (row, col) => ({
    x: (col) * (cellSize + gap) + cellSize / 2,
    y: (row) * (cellSize + gap) + cellSize / 2,
  });

  const points = solutionPath.map(([row, col]) => getCellCenter(row, col));



  const strokeColor = () => {
    if (submitted){
      if (correct){
        if (!inFound){
          return "rgb(106, 188, 58)"
        }
        else{
          return "rgba(252, 255, 46, 1)"
        }
      }
      else{
        return "red"
      }
    }
    else{
      return "white"
    }
  }


  return (
    <svg
      width={4 * cellSize + 3 * gap}
      height={4 * cellSize + 3 * gap}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {points.map((p1, i) => {
        if (i === points.length - 1) return null;
        const p2 = points[i + 1];
        return (
          <line
            key={i}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}

            stroke = {strokeColor()}
            // stroke="rgb(106, 188, 58)"s
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default PathDisplay;
