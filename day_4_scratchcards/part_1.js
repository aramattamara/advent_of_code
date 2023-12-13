const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    let res = 0;

    const line = data.trim().split('\n');


    for (let i = 0; i < line.length; i++){
        const firstPart = line[i].split('|')[0].replace(/Card \d+: /, '').trim().split(/\s+/).map(Number);
        const secondPart = line[i].split('|')[1].trim().split(/\s+/).map(Number);

        let onelineres = 0;

        for (let j = 0; j < firstPart.length; j++) {
            if (secondPart.includes(firstPart[j])) {
                if (onelineres === 1 || onelineres > 1) {
                    onelineres = onelineres * 2;
                } else {
                    onelineres = 1;
                }
            }
        }
        res += onelineres;

    }
    console.log(res);
});
