import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {PlayContainer, GridContainer, GridItem} from "./PlayStyles.jsx"
import PlayData from "../../components/PlayData/PlayData.jsx"
import PlayerGuess from "../../components/PlayerGuess/PlayerGuess.jsx"
import PlayGrid from "../../components/PlayGrid/PlayGrid.jsx"

function Play(){
    const [grid, setGrid] = useState(Array(4).fill().map(() => Array(4).fill("")));
    const [wordCount, setWordCount] = useState(0);
    const [score, setScore] = useState(0);
    const [guess, setGuess] = useState("");
    const [solutionSet, setSolutionSet] = useState(new Set());
    const [solutions, setSolutions] = useState([]);
    const [found, setFound] = useState(new Set());
    const [path, setPath] = useState([])
    const [timeLeft, setTimeLeft] = useState(80);
    const navigate = useNavigate();
    
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
            setSolutions(solutions);
            setSolutionSet(new Set(solutionSet));
        } catch (err) {
            console.log("error", err);
        }
    };

   
    useEffect(() => {
        setUp();
    }, [])


    useEffect(() => {
        if (timeLeft <= 0){
            navigate('/results', {
                state: {
                    gridRes: grid,
                    solutionRes: solutions,
                    wordCountRes: wordCount,
                    scoreRes: score,
                    foundRes: found
                }
            })            
        }

        const timer = setTimeout(() => {
            setTimeLeft(prev => prev-1);
        }, 10)

        return () => clearTimeout(timer);
    }, [timeLeft])

    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <PlayContainer>
        <PlayData wordCount = {wordCount} score = {score}/>     


        <div>
            {formatTime(timeLeft)}
        </div> 

        <PlayGrid grid = {grid} path = {path}/>

        <PlayerGuess 
        guess = {guess}
        setGuess = {setGuess}
        solutionSet = {solutionSet}
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