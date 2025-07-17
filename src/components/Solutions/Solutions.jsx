import {SolutionItem} from "./SolutionsStyles.jsx"

function Solutions({solutions}){
    return (
        <>
        {solutions.map((s, i) => (
            <SolutionItem key = {i}>
                {s}
            </SolutionItem>
        ))}
        </>
    )
}

export default Solutions;