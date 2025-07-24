import {GuessContainer, InputBox} from './PlayerGuessStyles.jsx'

function PlayerGuess({guess, setGuess, solutionSet, setWordCount, setScore, found, setFound, setPath, grid}){
    
    function findPaths(grid, visiting, row, col, word, i){
        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
        const visited = (r, c) => visiting.some(([x, y]) => x === r && y === c);

        if (i == word.length){
            const path = [...visiting];
            setPath(path);
        }

        for (const [dx, dy] of dirs){
            const x = row + dx;
            const y = col + dy;
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length){
                if (grid[x][y] == word[i] && !visited(x, y)){
                    visiting.push([x, y]);
                    findPaths(grid, visiting, x, y, word, i+1);
                    visiting.pop();
                }
            }
        }
    }
    

    //calls dfs on player guess
        //setsPath for all paths of current guess!
    const handleChange = (val) => {
        const guess = val.replace(/[^a-zA-Z]/g, '');
        setGuess(guess);

        //display path
        if (guess.length > 0){
            for (let i = 0; i < grid.length; i++){
                for (let j = 0; j < grid[0].length; j++){
                    if (grid[i][j] == guess[0]){
                        findPaths(grid, [[i, j]], i, j, guess, 1);
                    }
                }
            }
        }
        else {
            setPath([]);
        }
        
    }

    const calculateScore = (word) => {
        const len = word.length;
        if (len == 3) return 100;
        if (len == 4) return 400;
        if (len == 5) return 800;
        if (len == 6) return 1400;
        if (len == 7) return 1800;
        if (len == 8) return 2200;
        if (len == 9) return 2600;
        if (len == 10) return 3000;
    }

    //if guess in solution -> later, some animation / stronger visual indication of change! (enlarge text, color, flash, etc)
        //setWordCount
        //setScore

    //incorrect guess turns red??
    const handleKeyEvent = (e) => {
        const word = e.target.value;
        if (e.key == "Enter"){
            if (solutionSet.has(word) && !found.has(word)){
                setFound(prev => new Set(prev).add(word))
                setWordCount(prev => prev + 1);
                setScore(prev => prev + calculateScore(word));
            }
            setPath([]);
            setGuess("");
        }
    }

    return(
        <GuessContainer>

            <div>
                Guess:
            </div>

            <InputBox
            type="text"
            value = {guess}
            onChange = {(e) => handleChange(e.target.value)}
            onKeyDown = {(e) => handleKeyEvent(e)}
             />

            <div>
                {guess}
            </div>

        </GuessContainer>
    )
}

export default PlayerGuess;