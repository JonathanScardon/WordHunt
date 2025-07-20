import {Line} from "./PathDisplayStyles.jsx"

function PathDisplay({solutionPath}){
    //drawing algorithm
        //adjacent cells (from center of edges)
        //diagional cells (from corners)

    return (
        <div
        style = {{background: "white"}}
        >
        <svg>
            <Line
            x1 = "0"
            y1 = "0"
            x2 = "100"
            y2 = "100"
            />
        </svg>
        </div>
    )
}

export default PathDisplay;