import {GridItem} from "./PlayGridStyles.jsx"
import {GridContainer, Title} from "../../styles/globalStyles.jsx"
import PathDisplay from "../../components/PathDisplay/PathDisplay.jsx"

function PlayGrid({grid, gridRef, path, submitted, correct, inFound, endpage = true}){
    const highlightColorUnsubmitted = (row, col) => {
        if (path.length == 0){
            return "transparent"
        }

        for (let i = 0; i < path.length; i++){
            if (row == path[i][0] && col == path[i][1]){
                return "white"
            }
        }

        return "transparent"
    }

    const highlightColorCorrect = (row, col) => {
        if (path.length == 0){
            return "transparent"
        }

        for (let i = 0; i < path.length; i++){
            if (row == path[i][0] && col == path[i][1]){
                if (inFound){
                    return "rgba(252, 255, 46, 1)"
                }
                else{
                    return "rgb(106, 188, 58)"
                }
            }
        }

        return "transparent"
    }

    const highlightColorIncorrect = (row, col) => {
        if (path.length == 0){
            return "transparent"
        }

        for (let i = 0; i < path.length; i++){
            if (row == path[i][0] && col == path[i][1]){
                return "red"
            }
        }

        return "transparent"
    }

    const highlightColorEndpage = (row, col) => {
        if (path.length == 0){
            return "transparent"
        }

        if (row === path[0][0] && col == path[0][1]){
            return "white"
        }

        for (let i = 1; i < path.length; i++){
            if (row == path[i][0] && col == path[i][1]){
                return "rgb(106, 188, 58)"
            }
        }

        return "transparent"
    }

    const highlightColor = (row, col) => {
        if (endpage){
            return highlightColorEndpage(row, col);
        }
        else if (submitted){
            if (correct){
                return highlightColorCorrect(row, col)
            }
            else{
                return highlightColorIncorrect(row, col)
            }
        }
        else{
            return highlightColorUnsubmitted(row, col);
        }
    }


    return(
        <div>
        {endpage && <Title>Your Board</Title>}
        <GridContainer ref = {gridRef}>
            {grid.map((row, rowIndex) =>            
                row.map((letter, colIndex) =>
                    <GridItem
                    key = {`${rowIndex}-${colIndex}`}
                    style = {{ boxShadow: `0 0 5px 5px ${highlightColor(rowIndex, colIndex)}`}}
                    >
                        {letter}
                    </GridItem>
                )
            )}
        <PathDisplay
        solutionPath = {path}
        submitted = {submitted}
        correct = {correct}
        inFound = {inFound}
        ></PathDisplay>
        </GridContainer>
        </div>
    )
}

export default PlayGrid;