import {useState, useEffect} from "react";
import {PlayContainer, GridContainer, GridItem} from "./PlayStyles.jsx"
import PlayData from "../../components/PlayData/PlayData.jsx"
import PlayerGuess from "../../components/PlayerGuess/PlayerGuess.jsx"

function Play(){
    const [grid, setGrid] = useState([Array(4).fill().map(() => Array(4).fill(""))]);
    const [wordCount, setWordCount] = useState(0);
    const [score, setScore] = useState(0);
    const [guess, setGuess] = useState("");

    const [solutions, setSolutions] = useState(new Set());

    const [found, setFound] = useState(new Set());

    const [path, setPath] = useState([])

    const tempSolutions = ["aaaa", "cccc"]

    const tempGrid = [
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"]       
    ]


    //from backend retrieve:
        //grid
        //solution set
        //solutions w/ paths (endpage display)
   
    useEffect(() => {
        setGrid(tempGrid)
        setSolutions(new Set(tempSolutions))
    }, [])


    const highlightColor = (row, col) => {
        if (path.length == 0){
            return "transparent"
        }

        for (let i = 0; i < path.length; i++){
            if (row == path[i][0] && col == path[i][1]){
                return "blue"
            }
        }

        return "transparent"
    }

    return (
        <PlayContainer>
        <PlayData wordCount = {wordCount} score = {score}/>      

        <GridContainer>
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
        </GridContainer>

        <PlayerGuess 
        guess = {guess}
        setGuess = {setGuess}
        solutions = {solutions}
        setWordCount = {setWordCount} 
        setScore = {setScore}
        found = {found}
        setFound = {setFound}
        setPath = {setPath}
        grid = {grid}
        />

        </PlayContainer>
    )
}

export default Play;