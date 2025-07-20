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



app.post('/solve', (req, res) => {
    console.log("youve called the backend");

    const {grid} = req.body;
    const solutionSet = new Set();
    console.log(solutionSet);
    const solutions = solve(grid, solutionSet);
    // console.log(solutions);
    res.json(solutions);
})


function solve(grid, solutionSet){
    console.log(grid);


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
            visiting.pop([r, c]);
        }
    }
}

app.listen(3000, () => console.log("listening on port 3000"));