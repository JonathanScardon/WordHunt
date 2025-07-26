import {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom"
import PlayerData from "../../components/PlayerData/PlayerData.jsx"
import PlayerGuess from "../../components/PlayerGuess/PlayerGuess.jsx"
import PlayGrid from "../../components/PlayGrid/PlayGrid.jsx"
import Loading from "../../components/Loading/Loading.jsx"
import TimesUp from "../../components/TimesUp/TimesUp.jsx"
import Header from "../../components/Header/Header.jsx"
import {PlayContainer} from "./PlayStyles.jsx"
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
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const hasNavigated = useRef(false);
    const [paused, setPaused] = useState(false);


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
        } finally {
            setLoading(false);
            setTimeLeft(80)
        }
    };
   
    useEffect(() => {
        setUp();
    }, [])


    useEffect(() => {
        if (timeLeft <= 0) {
        if (!hasNavigated.current) {
            hasNavigated.current = true;
            setTimeout(() => {
            navigate('/results', {
                state: {
                gridRes: grid,
                solutionRes: solutions,
                wordCountRes: wordCount,
                scoreRes: score,
                foundRes: found
                }
            });
            }, 4000);
        }
        return;
        }

        else if (paused){
            return
        }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 100);

    return () => clearTimeout(timer);
    }, [timeLeft, navigate, grid, solutions, wordCount, score, found, paused]);


    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    if (loading){
        return (
            <Loading/>
        );
    }

    return (
        <>
        <Header setPaused = {setPaused}/>
        <PlayContainer>
        <Background src = {backgroundImg}/>
        
        {timeLeft == 0 && <TimesUp />}

        <div>{formatTime(timeLeft)}</div> 

        <PlayerData wordCount = {wordCount} score = {score}/>     
        
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
        </>
    )
}

export default Play;