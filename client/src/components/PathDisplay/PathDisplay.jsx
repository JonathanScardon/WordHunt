function PathDisplay({ solutionPath }) {

  const cellSize = 100;
  const gap = 15;

  const getCellCenter = (row, col) => ({
    x: col * (cellSize + gap) + cellSize / 2,
    y: (row+1) * (cellSize + gap) + cellSize / 2,
  });

  const points = solutionPath.map(([row, col]) => getCellCenter(row, col));

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
            stroke="rgb(106, 188, 58)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default PathDisplay;
