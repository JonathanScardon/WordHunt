import {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import {ResultContainer, ResultDisplay} from "./ResultsStyles.jsx"
import Solutions from "../../components/Solutions/Solutions.jsx"
import PlayGrid from "../../components/PlayGrid/PlayGrid.jsx"


function Results(){
    const { state } = useLocation();
    const { gridRes, solutionRes, wordCountRes, scoreRes, foundRes} = state || {};
    const [grid, setGrid] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [solutionPath, setSolutionPath] = useState([]);
    const [wordCount, setWordCount] = useState(0);
    const [score, setScore] = useState(0);
    const [found, setFound] = useState([]);


    useEffect(() => {
        setGrid(gridRes);
        setSolutions(solutionRes);
        setWordCount(wordCountRes);
        setScore(scoreRes);
        setFound(foundRes);
    }, [])


    return(
        <>
        <ResultContainer>

            <div>
                <div>Word Count: {wordCount}</div>
                <div>Score: {score}</div>
            </div>

            <ResultDisplay>
                <PlayGrid grid = {grid} path = {solutionPath}/>
                <Solutions solutions = {solutions} setSolutionPath = {setSolutionPath}/>
            </ResultDisplay>

        </ResultContainer>
        </>
    )
}

export default Results;