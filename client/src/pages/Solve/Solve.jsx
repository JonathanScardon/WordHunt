import React, {useState, useRef} from "react";
import {SolveContainer, SolutionDisplay, Title, Background} from "./SolveStyles.jsx"
import InputGrid from "../../components/InputGrid/InputGrid.jsx";
import Solutions from "../../components/Solutions/Solutions.jsx"
import PathDisplay from "../../components/PathDisplay/PathDisplay.jsx"

import backgroundImg from "../../assets/background.png"


function Solve() {
  const [grid, setGrid] = useState(Array(4).fill().map(() => Array(4).fill("")));
  const inputRefs = useRef(
    Array(4).fill(null).map(() =>
      Array(4).fill(null).map(() => React.createRef())
    )
  );

  const [solutions, setSolutions] = useState([]);
  const [solutionPath, setSolutionPath] = useState([[]]);


  return (
    <>
    <Background src = {backgroundImg}/>

    <SolveContainer>
      <Title>The Ultimate Cheat Tool!</Title>

      <SolutionDisplay>

        <InputGrid grid = {grid} setGrid = {setGrid} inputRefs = {inputRefs} setSolutions = {setSolutions} solutionPath = {solutionPath}/>  
        <Solutions solutions = {solutions} setSolutionPath = {setSolutionPath}/>

      </SolutionDisplay>


    </SolveContainer>
    </>
  )
}

export default Solve;