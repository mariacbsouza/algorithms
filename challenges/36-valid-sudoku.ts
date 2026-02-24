/**
 * https://leetcode.com/problems/valid-sudoku/
 */
const getClearDict = () => {
    return {
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false
    }
}

function isValidSudoku(board: string[][]): boolean {
    const rows = Array.from({ length: 9 }, () => getClearDict());
    const columns = Array.from({ length: 9 }, () => getClearDict());
    const boxes = Array.from({ length: 9 }, () => getClearDict());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const current = board[i][j];

            if (current === '.') {
                continue;
            }

            if (!rows[i][current]) {
                rows[i][current] = true;
            } else {
                return false;
            }

            if (!columns[j][current]) {
                columns[j][current] = true;
            } else {
                return false;
            }

            const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            if (!boxes[boxIndex][current]) {
                boxes[boxIndex][current] = true;
            } else {
                return false;
            }
        }
    }

    return true;
};
