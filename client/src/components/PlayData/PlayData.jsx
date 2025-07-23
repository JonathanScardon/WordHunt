import {DataContainer} from "./PlayDataStyles.jsx"

function PlayData({wordCount, score}){
    return (
        <DataContainer>
            <div>
                Words: {wordCount}
            </div>
            <div>
                Score: {score}
            </div>
        </DataContainer>
    )
}

export default PlayData;