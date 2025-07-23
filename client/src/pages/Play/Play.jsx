import {useState, useEffect} from "react";
import {PlayContainer, GridContainer, GridItem} from "./PlayStyles.jsx"
import PlayData from "../../components/PlayData/PlayData.jsx"
import PlayerGuess from "../../components/PlayerGuess/PlayerGuess.jsx"

function Play(){
    const [grid, setGrid] = useState(Array(4).fill().map(() => Array(4).fill("")));
    const [wordCount, setWordCount] = useState(0);
    const [score, setScore] = useState(0);
    const [guess, setGuess] = useState("");

    const [solutions, setSolutions] = useState(new Set());

    const [found, setFound] = useState(new Set());

    const [path, setPath] = useState([])

    
    const setUp = async () => {
        //retrieve board
        try {
            const response = await fetch('http://localhost:3000/generateGrid', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('backend failure');
            }

            const data = await response.json();
            setGrid(data);

            initSolutions(data);
        } catch (err) {
            console.error('error', err);
        }
    };

    const initSolutions = async (grid) => {
        try {
            const response = await fetch('http://localhost:3000/solve', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    grid: grid.map(row => row.map(letter => letter.toLowerCase()))
                })
            });

            if (!response.ok) {
                throw new Error("backend failure");
            }

            const { solutions, solutionSet } = await response.json();
            setSolutions(new Set(solutionSet));
        } catch (err) {
            console.log("error", err);
        }
    };

   
    useEffect(() => {
        setUp();
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