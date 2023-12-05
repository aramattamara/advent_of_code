const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }


    const rows = data.trim().split('\n');
    let sum = 0;

    const N = rows.length;
    const M = rows[0].length;

    const whichNumber = [];
    // Initialize whichNumber
    for (let i = 0; i < N; i++) {
        whichNumber.push([]);
        for (let j = 0; j < M; j++) {
            whichNumber[whichNumber.length - 1].push(-1);
        }
    }

    const allNumbers = [];

    for (let i = 0; i < N; i++) {
        let curNum = -1;

        for (let j = 0; j < M; j++) {
            const c = rows[i][j];

            if (/\d/.test(c)) {
                // Parse current number
                if (curNum === -1) {
                    curNum = parseInt(c);
                } else {
                    curNum *= 10;
                    curNum += parseInt(c);
                }
                whichNumber[i][j] = allNumbers.length;
            } else if (curNum !== -1) {
                allNumbers.push(curNum);
                curNum = -1;
            }

        }

        if (curNum !== -1) {
            allNumbers.push(curNum);
            curNum = -1;
        }
    }

    const seen = [];
    for (let i = 0; i < allNumbers.length; i++) {
        seen.push(false);
    }

    function check(i, j) {
        if (i === -1 || j === -1 || i === N || j === M) {
            return;
        }

        let k = whichNumber[i][j];
        if (k !== -1) {
            if (seen[k] === false) {
                sum += allNumbers[k];
                seen[k] = true;
            }
        }

    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++){
            const c = rows[i][j];

            if (!/[\d.]/.test(c)) {
                check(i - 1, j - 1);
                check(i - 1, j);
                check(i - 1, j + 1);
                check(i, j - 1);
                check(i, j + 1);
                check(i + 1, j - 1);
                check(i + 1, j);
                check(i + 1, j + 1);
            }
        }
    }

    console.log(allNumbers);
    console.log(seen);
    console.log(whichNumber);
    console.log(sum);

});
