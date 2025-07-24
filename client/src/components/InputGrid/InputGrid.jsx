import {GridItem, Button, Buttons} from "./InputGridStyles.jsx"
import {GridContainer, Title} from "../../styles/globalStyles.jsx"
import PathDisplay from "../../components/PathDisplay/PathDisplay.jsx"


//TODO: overwrite current values on the grid

function InputGrid({grid, setGrid, inputRefs, setSolutions, solutionPath}){

    const handleChange = (row, col, val) => {
        const isLetter = (c) => /^[a-zA-Z]$/.test(c);
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

    const clear = () => {
        const newGrid = Array(4).fill().map(() => Array(4).fill(""));
        setGrid(newGrid);
        setSolutions([]);
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
        let n = grid.length;
        let m = grid[0].length;

        if (e.key == "Enter"){
            solve();
        }
        else if (e.key === "Backspace"){
            if (e.target.value != ""){
                handleChange(row, col, "");
            }
            else if (col == 0){
                updateFocus(row, col, [-1, m-1])
            }
            else{
                updateFocus(row, col, [0, -1])
            }
        }
        else if (e.key == "ArrowUp"){
            if (row == 0){
                updateFocus(row, col, [n-1, 0])
            }
            else{
                updateFocus(row, col, [-1, 0])
            }
        }
        else if (e.key == "ArrowDown"){
            if (row == n-1){
                updateFocus(row, col, [1-n, 0])
            }
            else{
                updateFocus(row, col, [1, 0])
            }
        }
        else if (e.key == "ArrowLeft"){
            if (col == 0){
                updateFocus(row, col, [0, m-1])
            }
            else {
                updateFocus(row, col, [0, -1])
            }
        }
        else if (e.key == "ArrowRight"){
            if (col == m-1){
                updateFocus(row, col, [0, 1-m])
            }
            else{
                updateFocus(row, col, [0, 1])
            }
        }
    }


    const solve = async () => {
        let isPopulated = true;
        for (let i = 0; i < grid.length; i++){
            for (let j = 0; j < grid.length; j++){
                if (grid[i][j] == ""){
                    isPopulated = false;
                }
            }
        }

        if (!isPopulated){
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/solve', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grid: grid.map(row => row.map(letter => letter.toLowerCase()))
            })
        });

        if (!response.ok){
            throw new Error("backend failure")
        }

        const {solutions, solutionSet} = await response.json();
        setSolutions(solutions);
    } catch (err){
        console.log("error", err);
    }
    };

    const highlightColor = (row, col) => {
        if (solutionPath.length == 0){
            return "transparent"
        }

        //first letter in green
        if (row === solutionPath[0][0] && col == solutionPath[0][1]){
            return "white"
        }

        //remaining in white
        for (let i = 1; i < solutionPath.length; i++){
            if (row == solutionPath[i][0] && col == solutionPath[i][1]){
                return "rgb(106, 188, 58)"
            }
        }

        return "transparent"
    }


    return (
        <div>
        <Title>Input Board</Title>
        <GridContainer>
        {grid.map((row, rowIndex) =>            
            row.map((letter, colIndex) =>
                <GridItem 
                key = {`${rowIndex}-${colIndex}`}
                ref = {inputRefs.current[rowIndex][colIndex]}
                value = {letter}
                maxLength = {1}
                onChange = {(e) => handleChange(rowIndex, colIndex, e.target.value)}
                onKeyDown = {(e) => handleKeyEvent(rowIndex, colIndex, e)}
                style={{ boxShadow: `0 0 5px 5px ${highlightColor(rowIndex, colIndex)}`}}
                />
            )
        )}
        <PathDisplay solutionPath = {solutionPath}></PathDisplay>
        </GridContainer>
        <Buttons>
            <Button onClick = {solve}>Solve</Button> 
            <Button onClick = {clear}>Clear</Button> 

        </Buttons>
        </div>

    )
}


export default InputGrid;