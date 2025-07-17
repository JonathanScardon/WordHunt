import {SolutionsContainer, ScoreSection, ScoreTitle, SolutionItem} from "./SolutionsStyles.jsx"

function Solutions({solutions}){
    if (solutions.length == 0){
        return null;
    }

    return (
        <SolutionsContainer>
        {solutions.map(({ pointVal, words }) => (
            <ScoreSection key = {pointVal}>
                <ScoreTitle>{pointVal}</ScoreTitle>
                {words.map((w, i) => (
                    <SolutionItem key = {i}>
                        {w}
                    </SolutionItem>
                ))}
            </ScoreSection>
        ))}
        </SolutionsContainer>

    )
}

export default Solutions;