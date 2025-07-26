import {useState, useEffect} from 'react'
import {DataContainer, DataAnimation} from "./PlayerDataStyles.jsx"

function PlayerData({wordCount, score}){
    const [popText, setPopText] = useState(false);

    useEffect(() => {
        if (wordCount > 0){
            setPopText(true);
            const pause = setTimeout(() => setPopText(false), 300);
            return () => clearTimeout(pause);
        }
    }, [wordCount]);

    return (
        <DataContainer>
            <DataAnimation className = {popText ? 'pop' : ''}>
                Words: {wordCount}
            </DataAnimation>
            <DataAnimation className = {popText ? 'pop' : ''}>
                Score: {score}
            </DataAnimation>
        </DataContainer>
    )
}

export default PlayerData;