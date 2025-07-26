import {Wrapper, SolutionsContainer, Title, ScoreSection, ScoreTitle, Score, SolutionItem, Message} from "./SolutionsStyles.jsx"

function Solutions({solutions, setSolutionPath, foundSet = new Set(), setInFound = () => {}}){
    if (solutions.length == 0){
        return (
            <Wrapper>
                <Title>Solutions</Title>
            </Wrapper>
        )
    }

    
    const handleMouseEnter = (path, word) => {
        if (foundSet.has(word)){
            setInFound(true);
        }
        setSolutionPath(path);
    }

    const handleMouseLeave = () => {
        setInFound(false);
        setSolutionPath([]);
    }


    const itemColor = (word) => {
        if (foundSet.has(word)){
            return "rgb(73, 0, 255)"
        }
        else{
            return  "#6abc3a"
        }
    }

    return (
        <Wrapper>
        <Title>
            Solutions
            <Message>*Tip: hover over words*</Message>
        </Title>
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
                        onMouseEnter = {() => handleMouseEnter(path, word)}
                        onMouseLeave= {() => handleMouseLeave()}
                        style = {{background: itemColor(word)}}
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