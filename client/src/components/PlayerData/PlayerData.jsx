import {useState, useEffect} from 'react'
import {DataContainer, DataAnimation} from "./PlayerDataStyles.jsx"

function PlayerData({wordCount, score}){
    const [popWord, setPopWord] = useState(false);
    const [popScore, setPopScore] = useState(false);

    useEffect(() => {
        if (wordCount > 0){
            setPopWord(true);
            const pause = setTimeout(() => setPopWord(false), 300);
            return () => clearTimeout(pause);
        }
    }, [wordCount]);

    useEffect(() => {
        if (score > 0){
            setPopScore(true);
            const pause = setTimeout(() => setPopScore(false), 300);
            return () => clearTimeout(pause);
        }
    }, [score])

    return (
        <DataContainer>
            <DataAnimation className = {popWord ? 'pop' : ''}>
                Words: {wordCount}
            </DataAnimation>
            <DataAnimation className = {popWord ? 'pop' : ''}>
                Score: {score}
            </DataAnimation>
        </DataContainer>
    )
}

export default PlayerData;