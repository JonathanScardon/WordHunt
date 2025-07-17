import {GridContainer, GridItem} from "./InputGridStyles.jsx"

function InputGrid({grid, setGrid, inputRefs, setSolutions}){

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


    const getSolutions = () => {
        setSolutions(["dummy", "dummy", "data"])
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
                />



            )



        )}

        </GridContainer>
        <button onClick = {getSolutions}>Solve</button>
        </div>

    )
}


export default InputGrid;