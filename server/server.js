const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());


const fs = require('fs');
const file = fs.readFileSync('dictionary.txt', 'utf-8');
const englishDict = file
  .split('\n')
  .map(word => word.trim().toLowerCase())
  .filter(Boolean);

const letterFreqs = [
    { range: [0, .113], letter: 'e' },
    { range: [.113, .198], letter: 'a' },
    { range: [.198, .273], letter: 'r' },
    { range: [.273, .348], letter: 'i' },
    { range: [.348, .420], letter: 'o' },
    { range: [.420, .490], letter: 't' },
    { range: [.490, .557], letter: 'n' },
    { range: [.557, .614], letter: 's' },
    { range: [.614, .669], letter: 'l' },
    { range: [.669, .714], letter: 'c' },
    { range: [.714, .750], letter: 'u' },
    { range: [.750, .784], letter: 'd' },
    { range: [.784, .816], letter: 'p' },
    { range: [.816, .846], letter: 'm' },
    { range: [.846, .876], letter: 'h' },
    { range: [.876, .901], letter: 'g' },
    { range: [.901, .922], letter: 'b' },
    { range: [.922, .940], letter: 'f' },
    { range: [.940, .958], letter: 'y' },
    { range: [.958, .971], letter: 'w' },
    { range: [.971, .982], letter: 'k' },
    { range: [.982, .991], letter: 'v' },
    { range: [.991, .994], letter: 'x' },
    { range: [.994, .997], letter: 'z' },
    { range: [.997, .999], letter: 'j' },
    { range: [.999, 1], letter: 'q' },
];


app.post('/solve', (req, res) => {
    const {grid} = req.body;

    let solutionSet = new Set();
    const solutions = solve(grid, solutionSet);

    console.log(solutionSet.size);

    res.json({
        solutions: solutions,
        solutionSet: Array.from(solutionSet)
    })
})



app.get('/generateGrid', (req, res) => {
    let grid = Array(4).fill().map(() => Array(4).fill(""));
    let solutionSet = new Set();
    let solutions;

    while (solutionSet.size < 225){
        solutionSet = new Set();
        
        //fill grid based on letter freqs
        for (let i = 0; i < grid.length; i++){
            for (let j = 0; j < grid.length; j++){
                let letter = "";
                let letterKey = Math.random();

                for (const item of letterFreqs){
                    if (letterKey >= item.range[0] && letterKey <= item.range[1]){
                        letter = item.letter;
                        break;
                    }
                }
                
                grid[i][j] = letter;
            }
        }

        solutions = solve(grid, solutionSet);
    }

    console.log("final size: " + solutionSet.size)

    res.json({
        grid: grid,
        solutions: solutions,
        solutionSet: Array.from(solutionSet),   
    })
})

/*
Returns solutions in form 
{pointVal: p,
    words: [
    [word: w,
    path: [[]]
    ]
}
*/
function solve(grid, solutionSet){
    //init hashmap
    let positions = {};
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid.length; j++){
            const c = grid[i][j];

            if (!positions[c]){
                positions[c] = [];
            }

            positions[c].push([i, j])
        }
    }

    //search for each word
    let solutions = {};
    for (const word of englishDict){
        if (!positions[word[0]]){
            continue
        }
        for (const pos of positions[word[0]]){
            const [row, col] = pos;
            dfs(grid, [[row, col]], row, col, word, 1, solutions, solutionSet)
        }
    }

    //sorted output
    let result = Object.values(solutions).sort((a, b) => b.pointVal - a.pointVal);
    return result;
}

const calculateScore = (len) => {
    if (len == 3) return 100;
    if (len == 4) return 400;
    if (len == 5) return 800;
    if (len == 6) return 1400;
    if (len == 7) return 1800;
    if (len == 8) return 2200;
    if (len == 9) return 2600;
    if (len == 10) return 3000;
}
  
function dfs(grid, visiting, row, col, word, i, solutions, solutionSet){
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    const visited = (r, c) => visiting.some(([x, y]) => x === r && y === c);

    if (i == word.length && !solutionSet.has(word)){
        solutionSet.add(word);
        const score = calculateScore(word.length);
        const wordData = {word: word, path: [...visiting]}

        if (!solutions[score]){
            solutions[score] = {
                pointVal: score,
                words: []
            }
        }
        solutions[score].words.push(wordData);
    }

    for (const [dx, dy] of dirs){
        const r = row + dx;
        const c = col + dy;

        //check if we've found next letter
        if (r >= 0 && r < grid.length && c >= 0 && c < grid.length && grid[r][c] == word[i] && !visited(r, c)){
            visiting.push([r, c]);
            dfs(grid, visiting, r, c, word, i+1, solutions, solutionSet)
            visiting.pop();
        }
    }
}

app.listen(3000, () => console.log("listening on port 3000"));