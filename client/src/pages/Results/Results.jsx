import {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import {Background, SolveContainer, SolutionDisplay} from "../../styles/globalStyles.jsx"
import Solutions from "../../components/Solutions/Solutions.jsx"
import PlayGrid from "../../components/PlayGrid/PlayGrid.jsx"
import backgroundImg from "../../assets/background.png"


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
        <SolveContainer>
            <Background src = {backgroundImg}/>
            <div>
                <div>Word Count: {wordCount}</div>
                <div>Score: {score}</div>
            </div>

            <SolutionDisplay>
                <PlayGrid grid = {grid} path = {solutionPath}/>
                <Solutions solutions = {solutions} setSolutionPath = {setSolutionPath}/>
            </SolutionDisplay>

        </SolveContainer>
        </>
    )
}

export default Results;