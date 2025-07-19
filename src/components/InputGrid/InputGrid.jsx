import {GridContainer, GridItem, SolveButton} from "./InputGridStyles.jsx"


//TODO: overwrite current values on the grid

function InputGrid({grid, setGrid, inputRefs, setSolutions, solutionPath}){

    const isLetter = (c) => /^[a-zA-Z]$/.test(c);

    const handleChange = (row, col, val) => {
        const newGrid = grid.map((r) => [...r]);
        if (isLetter(val)){
            newGrid[row][col] = val.toUpperCase();
            updateFocusNext(row, col);
        }
        else {
            newGrid[row][col] = "";
        }
        setGrid(newGrid);
    }

    
    const updateFocusNext = (row, col) => {
        if (col < grid[0].length-1){
            updateFocus(row, col, [0, 1]);
        }
        else{
            updateFocus(row, col, [1, -col])
        }
    }


    const updateFocus = (row, col, dir) => {
        const x = row + dir[0];
        const y = col + dir[1];
        if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length){
            inputRefs.current[x][y].current.focus()
        }
    }

    const handleKeyEvent = (row, col, e) => {
        if (e.key === "Backspace"){
            handleChange(row, col, "");
        }
        else if (e.key == "ArrowUp"){
            console.log("up")
            updateFocus(row, col, [-1, 0])
        }
        else if (e.key == "ArrowDown"){
            updateFocus(row, col, [1, 0])
        }
        else if (e.key == "ArrowLeft"){
            updateFocus(row, col, [0, -1])
        }
        else if (e.key == "ArrowRight"){
            updateFocus(row, col, [0, 1])
        }
    }


    //future: API call
    const solutions = [
        { 
            pointVal: 800, 
            words: [
                {word: "hello", path: [[0, 0], [0, 1],[0, 2], [0, 3], [1, 3]]},
                {word: "there", path: [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2]]}
            ] 
        },
        { 
            pointVal: 400, 
            words: [
                {word: "cats", path: [[1, 0], [1, 1], [1, 2], [1, 3]]},
                {word: "food", path: [[3, 3], [2, 3], [1, 3], [0, 3]]}
            ] 
        },
        { 
            pointVal: 100,
            words: [
                {word: "lol", path: [[1, 1], [1, 2], [2, 2]]}
            ] 
        }
    ];

    const newSolutions = [
        { poinval: 800, words: []}
    ]

    const getSolutions = () => {
        // setSolutions({800: ["hello", "there"], 400: ["cats", "food"], 100: ["lol"]})
        setSolutions(solutions)
    }


    const isHighlighted = (row, col) => {
        return solutionPath.some(([r, c]) => r === row && c === col);
    }


    return (
        
        <div>
        <GridContainer>
        {grid.map((row, rowIndex) =>
        
            // <div>row</div>
            
            row.map((letter, colIndex) =>
                
                //current: refocus on valid inputs

                <GridItem 
                key = {`${rowIndex}-${colIndex}`}
                ref = {inputRefs.current[rowIndex][colIndex]}
                value = {letter}
                maxLength = {1}
                onChange = {(e) => handleChange(rowIndex, colIndex, e.target.value)}
                onKeyDown = {(e) => handleKeyEvent(rowIndex, colIndex, e)}
                style = {{background: isHighlighted(rowIndex, colIndex) ? "green" : ""}}
                />

            )



        )}

        </GridContainer>
        <SolveButton onClick = {getSolutions}>Solve</SolveButton>
        </div>

    )
}


export default InputGrid;