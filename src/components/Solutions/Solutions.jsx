import {SolutionsContainer, ScoreSection, ScoreTitle, SolutionItem} from "./SolutionsStyles.jsx"

function Solutions({solutions, setSolutionPath}){
    if (solutions.length == 0){
        return null;
    }

    return (
        <SolutionsContainer>
        {solutions.map(({ pointVal, words }) => (
            <ScoreSection key = {pointVal}>
                <ScoreTitle>{pointVal}</ScoreTitle>
                {words.map(({word, path}, i) => (
                    <SolutionItem 
                        key = {`${pointVal}-${i}`}
                        onMouseEnter = {() => setSolutionPath(path)}
                        onMouseLeave= {() => setSolutionPath([])}
                        >
                            {word}
                    </SolutionItem>
                ))}
            </ScoreSection>
        ))}
        </SolutionsContainer>
    )
}

export default Solutions;