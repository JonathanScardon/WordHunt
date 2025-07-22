import {Wrapper, SolutionsContainer, Title, ScoreSection, ScoreTitle, Score, SolutionItem} from "./SolutionsStyles.jsx"

function Solutions({solutions, setSolutionPath}){
    if (solutions.length == 0){
        return (
            <Wrapper>
                <Title>Solutions</Title>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
        <Title>Solutions</Title>
        <SolutionsContainer>
        {solutions.map(({ pointVal, words }) => (
            <ScoreSection key = {pointVal}>

                <ScoreTitle>
                    <Score>
                    {pointVal + " points"}                     
                    </Score>
                </ScoreTitle>

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
        </Wrapper>
    )
}

export default Solutions;