import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom"
import PlayerData from "../../components/PlayerData/PlayerData.jsx"
import PlayerGuess from "../../components/PlayerGuess/PlayerGuess.jsx"
import PlayGrid from "../../components/PlayGrid/PlayGrid.jsx"
import {PlayContainer, TimerContainer} from "./PlayStyles.jsx"
import {Background} from "../../styles/globalStyles.jsx"
import backgroundImg from "../../assets/background.png"

function Play(){
    const [grid, setGrid] = useState(Array(4).fill().map(() => Array(4).fill("")));
    const [wordCount, setWordCount] = useState(0);
    const [score, setScore] = useState(0);
    const [guess, setGuess] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [inFound, setInFound] = useState(false);
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
            
            const {grid, solutions, solutionSet} = await response.json();
            const newGrid = grid.map(row => row.map(letter => letter.toUpperCase()));
            setGrid(newGrid);
            setSolutions(solutions);
            setSolutionSet(new Set(solutionSet))
        } catch (err) {
            console.error('error', err);
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
        }, 1000000)

        return () => clearTimeout(timer);
    }, [timeLeft])

    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <PlayContainer>
        <Background src = {backgroundImg}/>

        
        <PlayerData wordCount = {wordCount} score = {score}/>     
        
        
        <TimerContainer>
            {formatTime(timeLeft)}
        </TimerContainer> 

        <PlayGrid
        grid = {grid}
        path = {path}
        submitted = {submitted}
        correct = {correct}
        inFound = {inFound}
        endpage = {false}/>

        <PlayerGuess 
        guess = {guess}
        setGuess = {setGuess}
        setSubmitted = {setSubmitted}
        setCorrect = {setCorrect}
        setInFound = {setInFound}
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