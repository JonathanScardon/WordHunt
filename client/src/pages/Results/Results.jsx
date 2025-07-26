import {useState, useEffect} from "react"
import {useLocation} from "react-router-dom"
import {HeaderWrapper, Title, DataContainer, Data} from "./ResultsStyles.jsx"
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
    const [foundSet, setFoundSet] = useState(new Set());


    const [inFound, setInFound] = useState(false);


    useEffect(() => {
        setGrid(gridRes);
        setSolutions(solutionRes);
        setWordCount(wordCountRes);
        setScore(scoreRes);
        setFoundSet(foundRes);
    }, [])


    return(
        <>
        <SolveContainer>
            <Background src = {backgroundImg}/>

            <HeaderWrapper>
            <Title>Results</Title>
            <DataContainer>
                <Data>Words: {wordCount}</Data>
                <Data>Score: {score}</Data>
            </DataContainer>
            </HeaderWrapper>

            <SolutionDisplay>
                <PlayGrid grid = {grid} path = {solutionPath} inFound = {inFound}/>
                <Solutions solutions = {solutions} setSolutionPath = {setSolutionPath} foundSet = {foundSet} setInFound = {setInFound}/>
            </SolutionDisplay>

        </SolveContainer>
        </>
    )
}

export default Results;