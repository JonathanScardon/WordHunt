import {GridItem} from "./PlayGridStyles.jsx"
import {GridContainer, Title} from "../../styles/globalStyles.jsx"

function PlayGrid({grid, path}){
    const highlightColor = (row, col) => {
        if (path.length == 0){
            return "transparent"
        }

        for (let i = 0; i < path.length; i++){
            if (row == path[i][0] && col == path[i][1]){
                return "blue"
            }
        }

        return "transparent"
    }

    return(
        <div>
        <Title>Your Board</Title>
        <GridContainer>
            {grid.map((row, rowIndex) =>            
                row.map((letter, colIndex) =>
                    <GridItem
                    key = {`${rowIndex}-${colIndex}`}
                    style = {{ boxShadow: `0 0 5px 5px ${highlightColor(rowIndex, colIndex)}`}}
                    >
                        {letter}
                    </GridItem>
                )
            )}
        </GridContainer>
        </div>
    )
}

export default PlayGrid;