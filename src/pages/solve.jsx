import React, {useState, useRef} from "react";
import {SolveContainer, Background} from "./SolveStyles.jsx"
import InputGrid from "../components/InputGrid/InputGrid.jsx";
import Solutions from "../components/Solutions/Solutions.jsx"


import backgroundImg from "../assets/background.png"


function Solve() {
  const [grid, setGrid] = useState(Array(4).fill().map(() => Array(4).fill("")));
  const inputRefs = useRef(
    Array(4).fill(null).map(() =>
      Array(4).fill(null).map(() => React.createRef())
    )
  );

  const [solutions, setSolutions] = useState(["test", "this", "out"]);
  const [path, setPath] = useState([]);

  //setSolutions with API call (now done in InputGrid w "Solve" button)


  return (

    //Solutions component - send "solutions"
      //for each solution, render a solutionItem
    <>
      
    <SolveContainer>
      <InputGrid grid = {grid} setGrid = {setGrid} inputRefs = {inputRefs} setSolutions = {setSolutions}/>  
      <Solutions solutions = {solutions}/>
    </SolveContainer>
    </>
  )
}

export default Solve;