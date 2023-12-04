const fs = require("fs");

fs.readFile("in.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const rows = data.trim().split('\n');
        let sum = 0;

        const N = rows.length;
        const M = rows[0].length;

        const allNumbers = [1];
        allNumbers.pop();

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
                } else if (curNum !== -1) {
                    allNumbers.push(curNum);
                    curNum = -1;
                }
            }
        }

        const seen = [];
        for (let i = 0; i < allNumbers.length; i++) {
            seen.push(false);
        }

        console.log(allNumbers);
        console.log(seen);
    }
});
