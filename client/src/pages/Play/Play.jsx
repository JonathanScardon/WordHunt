import {useState, useEffect} from "react";
import {PlayContainer, GridContainer, GridItem} from "./PlayStyles.jsx"
import PlayData from "../../components/PlayData/PlayData.jsx"
import PlayerGuess from "../../components/PlayerGuess/PlayerGuess.jsx"

function Play(){
    const [grid, setGrid] = useState([Array(4).fill().map(() => Array(4).fill(""))]);
    const [wordCount, setWordCount] = useState(0);
    const [score, setScore] = useState(0);
    const [guess, setGuess] = useState("");

    const tempGrid = [
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"]       
    ]

    useEffect(() => {
        setGrid(tempGrid)
    }, [])


    return (
        <PlayContainer>
        <PlayData wordCount = {wordCount} score = {score}/>      

        <GridContainer>
            {grid.map((row, rowIndex) =>            
                row.map((letter, colIndex) =>
                    <GridItem key = {`${rowIndex}-${colIndex}`}>
                        {letter}
                    </GridItem>
                )
            )}
        </GridContainer>

        <PlayerGuess guess = {guess} setGuess = {setGuess}/>

        </PlayContainer>
    )
}

export default Play;