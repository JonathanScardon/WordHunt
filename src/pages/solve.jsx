// import InputGrid from "../components/InputGrid/InputGrid.jsx"
// import {SolveContainer} from "./SolveStyles.jsx"

// function Solve(){
//     /*
//     Parent component, must store all states

//     4x4 grid for user to input letters into, use "solve" button to display solutions

//      const [solutions, setSolutions] = useState([]);
//         when "solve" button is clicked, we call setSolutions (should render everything... cuz we have a solutions component)
//     */
    
//     return (
      
//         <InputGrid/>
//         //to do: solve button, display solutions
//     )
// }

// export default Solve;




import React, {useState, useRef} from "react";
import InputGrid from "../components/InputGrid/InputGrid.jsx";

function Solve() {
  const [grid, setGrid] = useState(Array(4).fill().map(() => Array(4).fill("")));
  const inputRefs = useRef(
    Array(4).fill(null).map(() =>
      Array(4).fill(null).map(() => React.createRef())
    )
  );

  const [solutions, setSolutions] = useState([]);
  const [path, setPath] = useState([]);

  return (
    //call grid, pass along setGrid function!

    <>
      <InputGrid grid = {grid} setGrid = {setGrid} inputRefs = {inputRefs}/>

      <p>hi</p>
    </>

  )
}

export default Solve;